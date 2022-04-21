require('dotenv').config();
const express = require('express');
const cors = require('cors');
const route = require('./src/routes/medics.route');
const connectToDatabase = require('./src/database/database');

const port = process.env.PORT || 3000;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors({ origin: '*', allowedHeaders: ['Content-Type'] }));
app.use('/medic', route);

app.listen(port, () => console.log(`Server running on port ${port}`));
