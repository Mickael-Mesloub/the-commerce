import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import registerRouter from './router/registerRouter.js';
import loginRouter from './router/loginRouter.js';

const app = express();
const PORT = 9812;

app.use(cors());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://mickaelmesloub:7ec5f7e95281aca82596dea572064987@mongodb.3wa.io:27017/mickaelmesloub?authSource=admin');

mongoose.connection.on("error", () => {
    console.log("Erreur lors de la connexion à la base de données");
});

mongoose.connection.on("open", () => {
    console.log("Connexion à la base de donénes établie");
});

app.use('/register' , registerRouter);
app.use('/login' , loginRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})