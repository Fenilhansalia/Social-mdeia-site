const functions = require("firebase-functions");
const app = require("express")();

const FBauth = require('./Utils/FBauth') 


const { getAllScreams, postOneScream } = require('./Handlers/screams')
const { signup, login} = require("./Handlers/users")



//scream routes
app.get("/screams", getAllScreams);
app.post("/scream", FBauth, postOneScream);

//user routes
app.post("/signup", signup);
app.post("/login", login);






//signup route


exports.api = functions.https.onRequest(app);
