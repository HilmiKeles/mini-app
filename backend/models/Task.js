const mongoose = require('mongoose');

// Définition de ce qu'est une "Tâche" dans notre base [cite: 53]
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', taskSchema);