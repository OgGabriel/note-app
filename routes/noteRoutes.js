const express = require('express');
const {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote,
    shareNote
} = require('../controllers/noteController');
const { authenticate } = require('../middleware/authMiddleware'); // Assuming you will create this middleware
const router = express.Router();

// Middleware to authenticate user
router.use(authenticate);

// Get all notes
router.get('/', getAllNotes);

// Get a note by ID
router.get('/:id', getNoteById);

// Create a new note
router.post('/', createNote);

// Update an existing note
router.put('/:id', updateNote);

// Delete a note
router.delete('/:id', deleteNote);

// Share a note with another user
router.post('/:id/share', shareNote);

module.exports = router;