var express = require('express')
var app = express();

var port = 4000;

app.get("/",(req,res)=>{
    var date = new Date()
    var day = date.getDay();
    res.send(quotes[day])
})

var httpServer = app.listen(process.env.PORT || port,()=>{
    console.log("listenning at port "+port);
})

var quotes = [
    "I love you the more in that I believe you had liked me for my own sake and for nothing else.",
    "But man is not made for defeat. A man can be destroyed but not defeated.",
    "When you reach the end of your rope, tie a knot in it and hang on.",
    "There is nothing permanent except change.",
    "You cannot shake hands with a clenched fist.",
    "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.",
    "There is no charm equal to tenderness of heart."
]


