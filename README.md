# Mini-App CRUD Dockerisee - IEF2I

## Presentation du Projet
Ce projet est une application web complete (Fullstack) permettant de gérer une Liste de Tâches (To-Do List). Il a ete realise dans le cadre du module Docker pour demontrer la mise en place d'une architecture conteneurisee respectant les bonnes pratiques de persistance et de developpement.

## Membres du Groupe
- Kamba Emmanuel, Smock Morgan, Keles Hilmi
- DSP5O24A

## Architecture Technique
L'application est decoupee en 4 services orchestres par Docker Compose :
1. Frontend : Interface utilisateur (HTML/JS) servie sur le port 4200.
2. Backend : API REST Node.js/Express sur le port 3000.
3. Database : MongoDB (Image officielle) sur le port 27017.
4. Admin Tool : Acces via MongoDB Compass pour la gestion des donnees.

## Installation et Lancement

### Prerequis
- Docker Desktop installe et fonctionnel.
- MongoDB Compass installe sur la machine hote.

### Demarrage
A la racine du projet, executez la commande suivante :
```bash
docker-compose up --build