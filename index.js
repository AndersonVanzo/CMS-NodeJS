import express from 'express';
import mongoose from 'mongoose';
import hbs from 'express-handlebars';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { mongodbUrl } from './config/database.js';
import { PORT } from './config/constraints.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Configure Database
mongoose.connect(mongodbUrl, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.log('MongoDB connection failed: ' + err);
  })

// Configure express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

// Setup View Engines to use Handlebars
app.engine('handlebars', hbs({ defaultLayout: 'website/home/index' }));
app.set('views', path.join(__dirname, 'resources/views'));
app.set('view engine', 'handlebars');

// Routes
app.use('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server is running in port: ${PORT}`);
});