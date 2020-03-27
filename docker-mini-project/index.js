const express = require("express");
const app = express();

app.get("/", (req, res) =>{
	res.json({
		message: 'Hello this is root'
	})
})

app.get("/login", (req, res) =>{
	res.json({
		message: 'Hello this is login'
	})
})

app.get("/signup", (req, res) =>{
	res.json({
		message: 'Hello this is signup'
	})
})

app.listen(9000, () => {
	console.log('app is running at 9000');
});