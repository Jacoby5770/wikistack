const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const layout = require("./views/layout");
const models = require('./models');
const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res, next) => {
	res.send(layout(""));
});

const PORT = 3000;

const init = async () => {
	await models.Page.sync();
	await models.User.sync();

	app.listen(PORT, () => {
		console.log("listening on " + PORT);
	});
}

init();
