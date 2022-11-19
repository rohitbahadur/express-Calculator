const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html")
})

app.post("/", function (req, res) {

	var number1 = Number(req.body.n1);
	var number2 = Number(req.body.n2);

	var result = number1 + number2;

	res.send("The result of calculation is: " + result)

})


//bmi calculator (for this we need to change the url routing to /bmicalculator)

app.get("/bmicalculator", function (req, res) {
	res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", function (req, res) {

	let weight = parseFloat(req.body.weight);
	let height = parseFloat(req.body.height);
	var bmi = weight / Math.pow(height, 2);

	res.send("Your BMI is " + bmi);

})


app.listen(3000, () => {
	console.log("Calculator started")

})