import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { registerRouter, loginRouter, verifyTokenRouter } from './router/authRouter.js'
import productRouter from './router/productRouter.js'

const app = express();
const PORT = 9812;

app.use(cors());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://mickaelmesloub:123@clusterapp.pxkxgvb.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.on("error", () => {
    console.log("Erreur lors de la connexion à la base de données");
});

mongoose.connection.on("open", () => {
    console.log("Connexion à la base de donénes établie");
});

app.use('/register' , registerRouter);
app.use('/login' , loginRouter);
app.use('/verify-token' , verifyTokenRouter);
app.use('/products', productRouter)



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})