import express from "express";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const PORT = process.env.PORT ||5000;

app.get("/", (req, res) => {
    res.json({ message: "Exam Notes AI Backend Running Successfully 🚀 " })
})

app.listen(PORT, () => {
    console.log(`✅ Server is running on PORT ${PORT}`);
})