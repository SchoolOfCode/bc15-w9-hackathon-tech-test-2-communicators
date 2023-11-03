import { pool } from "./index.js";

// Exporting function to make the SQL call to add a note
export async function createNoteInstance(newNote) {
    // Put in try/catch to catch database errors gracefully
    try {
      // Build the database query passing in parameterised queries
      const postNewEntry = await pool.query(
        `INSERT INTO note (title, content)
        VALUES ($1,$2);`,       
        [
          newNote.title,
          newNote.content,
         ]
      );
      // Return the results
      
      return postNewEntry;

    } catch {
      // If database error occurs return a bad result for error handling
      return false;
    }
  }
  
  

  // Exporting function to make the SQL call to read all notes
export async function getAllNotes() {
    // Put in try/catch to catch database errors gracefully
    try {
      // Build the database query passing in parameterised queries
      const getAllEntries = await pool.query(
        `SELECT * FROM note`    
        );
      // Return the results
      console.log(getAllEntries);
      return getAllEntries;

    } catch {
      // If database error occurs return a bad result for error handling
      return false;
    }
  }