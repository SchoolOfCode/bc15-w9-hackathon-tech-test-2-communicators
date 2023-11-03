import * as noteModel from "./model.js";

// Export async function to create a note
export async function createNote(req, res) {
    const newNoteRequested = req.body;

    const newNoteResult = await noteModel.createNoteInstance(newNoteRequested);

     // Error handling
  // If note is false
  if (!newNoteResult) {
    // Return an object with status 404, false with a "msg"
    return res.status(404).json({
      status: false,
      data: { msg: "Failure to upload new note" },
    });
    //if creating journal entry is successful
  } else {
    //return created status code and setting status to true
    return res.status(201).json({
      status: true,
    });
  }
} 

// Export async function to get all notes
export async function getNotes(req, res) {
    
    const notesReadResult = await noteModel.getAllNotes();

 
   // Error handling
  // If note is false
  if (!notesReadResult) {
    // Return an object with status 404, false with a "msg"
    return res.status(404).json({
      status: false,
      data: { msg: "Failure to read notes" },
    });
    // Check if notes arrary is empty return an error message and display the status as false
  } else if ((notesReadResult.length == 0)) {
         return res.status(404).json({
      status: false,
      data: { msg: "No notes entries" },
    });
    // If read is successful
  } else {
    // Return the notes and true status 
    return res.status(200).json({
      status: true,
      data: notesReadResult,
    });
  }
} 