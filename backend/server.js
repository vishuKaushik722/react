import express from 'express';
import csitdata from './csitdata.js';
import medata from './medata.js';
import dotenv from 'dotenv';
import config from './config.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';

dotenv.config();

const mongodbUrl = config.MONGODB_URL; 
mongoose.connect('mongodb+srv://myusername:mypassword@cluster0.vcuxd.mongodb.net/canteenreact?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})


const app = express();

app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.get("/api/meproducts/:id", (req, res) => {
  const productId = req.params.id;
  const product = medata.products.find(x => x._id === productId);
  if (product)
    res.send(product);
  else
    res.status(404).send({ msg: "Product Not Found." })
});

app.get("/api/csitproducts", (req, res) => {
	res.send(csitdata.products);
});

app.get("/api/meproducts", (req, res) => {
	res.send(medata.products);
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server started at http://localhost:5000');
});