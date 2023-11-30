const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());       
app.use(bodyParser.urlencoded({ extended: true }));

let taskList = []

app.get("/addtask", function (req, res) { //receive task list as an array from /addtask post and pass tasklist to the template
    res.render("index", {
        tasklist: taskList,
    });
});


app.post('/addtask', function (req, res) {
    let newTask = req.body.newtask
    taskList.push(newTask) 
    res.redirect("/addtask"); //trigger get request for /addtask
});

app.listen(3000, function () {
	console.log("Server started on port 3000.");
});