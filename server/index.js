const express = require("express");
const userRoutes = require("./src/Routes/userRoutes");
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;
const connectToDatabase = require("./src/database/db");
connectToDatabase();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true 
}));

app.use(express.json());
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
