const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import CORS
const path = require('path');
const connectDB = require('./server/database/connection');

const app = express();
app.use(cors());  // Enable CORS
dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'));

// MongoDB
connectDB();

// requesty do body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

app.use('/', require('./server/routes/router'));

app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`);
});
