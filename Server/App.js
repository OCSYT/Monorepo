import express from "express";
const App = express();
const PORT = 8080;
App.use(express.json());

App.get("/", (req, res) => {
	res.json({ Message: "API Response Successful!" });
});

App.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}/`);
});