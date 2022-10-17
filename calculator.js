const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html")
})

app.post("/", function (req, res) {

	var number1 = Number(req.body.num1);
	var number2 = Number(req.body.num2);

	var result = number1 + number2;

	res.send("The result of calculation is: " + result)

})


//bmi calculator 

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