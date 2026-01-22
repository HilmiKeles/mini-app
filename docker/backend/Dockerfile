# 1. Utiliser une image de base Node.js
FROM node:18

# 2. Définir le répertoire de travail dans le conteneur
WORKDIR /app

# 3. Copier les fichiers de dépendances (package.json)
COPY package*.json ./

# 4. Installer les dépendances [cite: 58]
RUN npm install

# 5. Copier le reste du code source
COPY . .

# 6. Exposer le port utilisé par l'API
EXPOSE 3000

# 7. Commande pour lancer le serveur [cite: 59]
CMD ["npm", "start"]