const express = require("express");

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
	res.json({
		scores: [
			{ player: { name: "jaska", score: 20 } },
			{ player: { name: "elli", score: 15 } },
			{ player: { name: "juuso", score: 10 } },
			{ player: { name: "saara", score: 5 } },
			{ player: { name: "aino", score: 1 } },
		]
	});
});

app.post("/", (req, res) => {
	res.json({ message: "New score added succesfully!" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});