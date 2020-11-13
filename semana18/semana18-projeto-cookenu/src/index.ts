import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { postUser } from './endpoints/postUser'
import { login } from './endpoints/login'
import { getOwnProfile } from './endpoints/getOwnProfile'
import { getOtherProfile } from './endpoints/getOtherProfile'
import { postRecipe } from './endpoints/postRecipe'
import { getRecipeById } from './endpoints/getRecipeById'
import { postFollow } from './endpoints/postFollow'
import { postUnfollow } from './endpoints/postUnfollow'
import { getFeed } from './endpoints/getFeed'

const app = express()
app.use(express.json())
app.use(cors())

// app.post("/users/signup", postUser);
app.post("/users/login", login);
// app.get("/users/profile", getOwnProfile);
// app.get("/users/:id", getOtherProfile);
app.post("/users/recipe", postRecipe);
// app.get("/recipe/:id", getRecipeById);
app.post("/users/follow", postFollow);
app.post("/users/unfollow", postUnfollow);
app.get("/users/feed", getFeed)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
