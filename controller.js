import * as noteModel from "./model.js";

// Export async function to create a note
export async function createNote(req, res) {
    const newNoteRequested = req.body;

    const newNoteResult = await noteModel.createNoteInstance(newNoteRequested);

    return newNoteResult;
}