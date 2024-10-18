# --- SCRIPT D'ORIGINE (commencer) ---

# Utiliser une image Node.js officielle comme base
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et yarn.lock pour installer les dépendances
COPY package.json yarn.lock ./

# Installer les dépendances de l'application
RUN yarn install --frozen-lockfile

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port pour le serveur Metro
EXPOSE 8080

# Commande par défaut pour démarrer le serveur Metro de React Native
CMD ["npx", "react-native", "start"]

# --- SCRIPT D'ORIGINE (fin) ---


# --- AJOUTS POUR ANDROID, JAVA ET REACT NATIVE (commencer) ---

# Installer les outils nécessaires pour le SDK Android et Java
RUN apk add --no-cache bash openjdk11 curl && \
    curl -o sdk-tools.zip https://dl.google.com/android/repository/commandlinetools-linux-7583922_latest.zip && \
    unzip sdk-tools.zip -d /android-sdk-linux && \
    rm sdk-tools.zip

# Définir les variables d'environnement Android et Java
ENV ANDROID_HOME /android-sdk-linux
ENV PATH $PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools

# Accepter les licences SDK Android et installer les outils nécessaires
RUN mkdir -p ~/.android/ && touch ~/.android/repositories.cfg && \
    yes | $ANDROID_HOME/tools/bin/sdkmanager --licenses && \
    $ANDROID_HOME/tools/bin/sdkmanager "platform-tools" "build-tools;33.0.2" "platforms;android-33" "extras;google;m2repository" "extras;android;m2repository"

# Créer le répertoire assets et générer le bundle Android pour React Native
RUN npx mkdirp android/app/src/main/assets/ && \
    npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

# --- AJOUTS POUR ANDROID, JAVA ET REACT NATIVE (fin) ---
