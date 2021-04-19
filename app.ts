import express from "express";
import path from "path";
import mongoose from "mongoose";

const app = express();
const port = 8080; // default port to listen

//Body Parser
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: false, limit: '50mb' }));

mongoose.connect("mongodb://localhost:27017/ts-user", {
    useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true 
}, () => {
    console.log("Db Connected")
});   

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    // render the index template
    res.render( "index" );
} );
app.use("/api/user", require("./routes/user"));

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );


