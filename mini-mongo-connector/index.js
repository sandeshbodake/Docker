const mongoose = require("mongoose")
const DATABASE = "mongodb://mymongo:27017/testup"
const express = require("express")
const app = express();



mongoose.connect(DATABASE)
				.then(() => {
					console.log('DB connected')
				})
				.catch(() => {
					console.log('DB not connected')
				})


app.get("/", (req, res) => {
	res.json({
		message: 'You Are Stark'
	})
})


app.listen(8000, () => {
	console.log('Listing')
})