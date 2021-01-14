const bodyParser = require("body-parser");
const express =require("express");
const app = express();
app.use(bodyParser.urlencoded( {extended: true} ));
app.set ("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

var bilgiler = [
  {
  isim : "Gursoy Karatas",
  email : "gursoyk@hotmail.com",
  address : "19 Underwood Road, Pinetown, 3610",
  telephone : "+27605252054",
  resimlinki : "/images/gursoy.jpg",
  hakkimda : "I grew up in Ardahan, Turkey."
}
];

var name = bilgiler[0].isim;
var resim = bilgiler[0].resimlinki;
var postal = bilgiler[0].address;
var tel = bilgiler[0].telephone;
var emailAddress = bilgiler[0].email;
var aboutMe = bilgiler[0].hakkimda;

app.get("/", function(req, res){
    res.render("home", {name: name,
                        emailAddress: emailAddress,
                        resim: resim});
});

app.get("/contact", function(req, res){
    res.render("contact", {
                        name: name,
                        emailAddress: emailAddress,
                        tel: tel,
                        postal: postal,
      });
});

app.get("/about", function(req, res){
    res.render("about", {about: aboutMe});
});








app.listen(8000);
