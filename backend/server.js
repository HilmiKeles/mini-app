require('dotenv').config(); // Charge les variables d'environnement [cite: 49, 75]
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Task = require('./models/Task');

const app = express();

// Middleware
app.use(express.json()); // Permet à l'API de lire le format JSON
app.use(cors()); // Autorise le Frontend à appeler l'API [cite: 38]

// Connexion à MongoDB via la variable d'environnement [cite: 48, 52]
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connecté à MongoDB !"))
  .catch(err => console.error("Erreur de connexion :", err));

// --- ROUTES API REST --- [cite: 42]

// 1. GET : Lister toutes les tâches [cite: 44]
app.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// 2. POST : Ajouter une tâche [cite: 45]
app.post('/tasks', async (req, res) => {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
});

// 3. PUT : Modifier une tâche (Back-only selon sujet) [cite: 46, 22]
app.put('/tasks/:id', async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
});

// 4. DELETE : Supprimer une tâche [cite: 47]
app.delete('/tasks/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Tâche supprimée" });
});

// Lancement du serveur 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));