const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded( {extended: true} ));
app.set('view engine', 'ejs');
// "/" anasayfayı temsil eder.
app.get('/' , function(req, res){
    res.sendFile(__dirname + "/index.html");
});
app.get("/iletisim" , function(req, res)   {
    res.sendFile( __dirname + "/iletisim.html");
});
app.get("/giris" , function(req, res){
    res.sendFile(__dirname + "/giris.html");
});
app.get("/profil" , function(req, res){
    res.send("Şuanda get yöntemini kullanıyorsun.");
});
app.post("/profil" , function(req, res){
    // kullanıcı adı "hamza" şifre 1234 ise hoşgeldin yazalım, aksi durumda bilgiler hatalı..
    if(req.body.kullaniciadi == "hamza" && req.body.sifre == "1234"){
      res.send("Hoşgeldin : " + req.body.kullaniciadi);
    }else{
      res.send("Bilgiler hatalı.");
    }
});
app.get("/yazi", function(req , res){
     // gelen isteklere göre, o sayfanın içeriğini değiştireceğiz.
     // ejs = embedded javascript
     var gonderilecekler = {
       baslik : 'Almanya Hükümetinden Açıklama' ,
       yorumsayisi : '30' ,
       yazar : 'Recep Bey'
     };
     res.render('yazi' , gonderilecekler  )
});

// urun sayfasi için bir tane istek oluşturun. urun sayfasina bağlanmak isteyen kişi için
// urun.ejs dosyasını render edin ve urun sayfasında da ürünün başlığı ve yorumsayisi olsun.

app.get ("/urun", function(req,res){
var gonder ={
  urunbaslik: 'Nike',
  yorumsayisi: '123',
};
  res.render('urun', gonder)
})

// kitap sayfasi için bir tane istek oluşturun. kitap sayfasına bağlanmak isteyn kişi için
// kitap.ejs dosyasını rnder edin ve kitap sayfasında
// kitap ismi, kitap yazarı, kitap açıklaması ve fiyatı olsun

app.get ("/kitap", function(req,res){
  var gonder =  {
    Booktitle: 'Kite Runner',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51vRNqL61aL._SX318_BO1,204,203,200_.jpg',
    Author: 'Khaled Hosseini',
    Description: 'The #1 New York Times bestselling debut novel that introduced Khaled Hosseini to millions of readers the world over.',
    Price: '$11.99',
  }
  res.render('kitap',gonder)
})
















app.get("*" , function(req, res){
    res.send("Hataaa ! Yanlış sayfadasınız, lütfen tarayıcınız ayarlarıyla oynayınız.");
});
app.listen(8000);
