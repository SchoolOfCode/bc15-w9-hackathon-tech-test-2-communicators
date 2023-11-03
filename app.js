// Import all external packages needed(express, cors)
import express from "express";

// Create a variable called app from the express aplication
export const app = express();

// Import functions from controller.js file
import * as note from "./controller.js";

// Use ".use" to create middleware for parsing JSON requests with express
app.use(express.json());

// route handler to create new journal entries
app.post("/note", note.createNote);
