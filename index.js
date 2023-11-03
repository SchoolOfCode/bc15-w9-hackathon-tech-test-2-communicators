//import pg library 
import pg from "pg";

//retrieve connection string into process.env
const connectionUrl = process.env.DB_CONNECTION_STRING;  

//error throwing - if database url undefined 
if(!connectionUrl){
    throw new Error(
        "Connection string Error!"
    );
}

//export connection string to pool so we can handle DB requests
export const pool = new pg.Pool({ connectionString: connectionUrl, });
