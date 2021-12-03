export default class AndestuenNotesAPI {
    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem("andestuen-notesapp-notes") || "[]", 1);

        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveNote(noteToSave) {
        const notes = AndestuenNotesAPI.getAllNotes();
        const existing = notes.find(note => note.id == noteToSave.id);

        // Edit/Update
        if (existing) {
            existing.title = noteToSave.title;
            existing.body = noteToSave.body;
            existing.updated = new Date().toISOString();
        } else {
            noteToSave.id = Math.floor(Math.random() * 1000000);
            noteToSave.updated = new Date().toISOString();
            notes.push(noteToSave);
        }

        localStorage.setItem("andestuen-notesapp-notes", JSON.stringify(notes));
    }

    static deleteNote(id) {
        const notes = AndestuenNotesAPI.getAllNotes();
        const newNotes = notes.filter(note => note.id != id);

        localStorage.setItem("andestuen-notesapp-notes", JSON.stringify(newNotes));
    }
}
