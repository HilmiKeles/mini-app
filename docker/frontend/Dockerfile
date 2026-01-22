FROM node:18

# Dossier de travail dans le conteneur
WORKDIR /app

# Copie les fichiers de dépendances depuis le "context"
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie tout le reste du code
COPY . .

EXPOSE 4200

# Commande de lancement
CMD ["npm", "start"]