import { pool } from "../index.js";

async function resetDB() {
  // Drop the tables in the database.
  try {
    await pool.query(`
        DROP TABLE IF EXISTS note;
        `);

    // Create the note table in the database.
    await pool.query(`
        CREATE TABLE note (
        id SERIAL PRIMARY KEY,
        title VARCHAR(80) NOT NULL,
        content VARCHAR
        );
        `);

    // Seed data into the newly created note database table
    await pool.query(`
        INSERT INTO note (title, content)
        VALUES ('This is our first note', 'Adam has gone to get burgers...sob.  We are missing you Adam'), 
        ('This is our 2nd note', 'Still no Adam');`);

    //informing user databse has been reset
    console.log("Database has been reset");

    //catching errors in databse
  } catch (error) {
    console.log("Database reset didn't work: ", error);
  } finally {
    await pool.end();
  }
}

//RUN the database reset script
await resetDB();
