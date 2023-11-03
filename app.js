// Import all external packages needed(express, cors)
import express from "express";
import cors from "cors";

// Create a variable called app from the express aplication
export const app = express();

// Import functions from controller.js file
import * as note from "./controller.js";

// Use ".use" to create middleware for parsing JSON requests with express
app.use(express.json());

// Use ".use" to create middleware for using CORS
app.use(cors());

// route handler to create new note
app.post("/note", note.createNote);

// route handler to get all notes
app.get("/note", note.getNotes);
