const express = require("express");
const password = "RandomPassword_3e10";

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
	res.json({
		scores: [
			{ name: "jaska", score: 20 },
			{ name: "elli", score: 15 },
			{ name: "juuso", score: 10 },
			{ name: "saara", score: 5 },
			{ name: "aino", score: 1 },
		]
	});
});

app.post("/", (req, res) => {
	if (req.body.pw == password) {
		res.json({ message: `New score ${req.body.score} added for player ${req.body.name}!` });
	} else {
		res.status(401).send({ message: "Unauthorized!"	});
	}
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});