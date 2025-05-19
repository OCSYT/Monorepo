import express from "express";
import cors from "cors";
const App = express();
const PORT = 8080;

const CORSOptions = {
	origin: "*",
	methods: ["GET", "POST"],
	allowedHeaders: ["Content-Type"],
};

App.use(express.json());
App.use(cors(CORSOptions));

App.get("/", (req, res) => {
	res.json({ Message: "API Response Successful!", Date: new Date().toUTCString() });
});

App.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}/`);
});