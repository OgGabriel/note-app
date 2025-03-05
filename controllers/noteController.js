const Note = require('../models/Note');

// Get all notes for the authenticated user
exports.getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find({ userId: req.user.id });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get a note by ID for the authenticated user
exports.getNoteById = async (req, res) => {
    try {
        const note = await Note.findOne({ _id: req.params.id, userId: req.user.id });
        if (!note) return res.status(404).json({ message: 'Note not found' });
        res.json(note);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Create a new note for the authenticated user
exports.createNote = async (req, res) => {
    try {
        const note = new Note({ ...req.body, userId: req.user.id });
        await note.save();
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update an existing note by ID for the authenticated user
exports.updateNote = async (req, res) => {
    try {
        const note = await Note.findOneAndUpdate({ _id: req.params.id, userId: req.user.id }, req.body, { new: true });
        if (!note) return res.status(404).json({ message: 'Note not found' });
        res.json(note);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a note by ID for the authenticated user
exports.deleteNote = async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
        if (!note) return res.status(404).json({ message: 'Note not found' });
        res.json({ message: 'Note deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Share a note with another user
exports.shareNote = async (req, res) => {
    try {
        const { userId } = req.body; // ID of the user to share with
        const note = await Note.findOne({ _id: req.params.id, userId: req.user.id });
        if (!note) return res.status(404).json({ message: 'Note not found' });
        note.sharedWith.push(userId);
        await note.save();
        res.json(note);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};