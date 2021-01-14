var sepetAc = document.getElementById("cart-info");
var sepetDiv = document.getElementById("cart");
​
//sepetin Açılması Fonksiyonu
sepetAc.onclick = function() {
  sepetDiv.classList.toggle("show-cart");
}
​
var cards = document.querySelectorAll(".store-item");
var ekleBtn = document.querySelectorAll(".store-item-icon");
const urunImage = document.querySelectorAll('.store-img');
const urunName = document.querySelectorAll('#store-item-name');
const urunPrice = document.querySelectorAll('#store-item-price');
const urunler = [];
​
//Urun Nesnesi
function Urun(img, name, price, btn) {
  this.img = img;
  this.name = name;
  this.price = price;
  this.btn = btn;
}
​
​
​
// Ürünlerin her birinin resim,isim,fiyat ve tıklama butonu bilgisinden
// 12 adet ürün nesnesini oluşturuyoruz.
// 12 nesneyi arraye (urunler) eklemiş oluyoruz.
for (var i = 0; i < cards.length; i++) {
​
  var imgSrc = urunImage[i].getAttribute("src");
  var imgSrc2 = imgSrc.replace("img", "img-cart");
  var uname = urunName[i].textContent;
  var uprice = urunPrice[i].textContent;
  var ubtn = ekleBtn[i];
​
  let urun = new Urun(imgSrc2, uname, uprice, ubtn); //Nesne Oluşturma
​
  urunler.push(urun); //Array'a ekleme
​
}
​
console.log(urunler);
​
​
var urunSayisi = document.getElementById("item-count"); //buton üzerindeki urun sayısı
var toplambtn = document.querySelector(".item-total"); //buton üzerindeki toplam fiyat
var toplamcart = document.getElementById("cart-total"); //sepet üzerindeki toplam fiyat
​
var toplam = 0;
var uruns = 0;
​
// Herbir ürün için döngü oluşturuyoruz
urunler.forEach((urun, i) => {
  urun.btn.onclick = function() { //hangi ürünün butonu tıklandıysa
​
    alert("1 adet " + urun.name.toUpperCase()  + " sepetinize eklendi.");
​
    uruns++;
    urunSayisi.textContent = uruns;
​
    console.log(urun.img + " " + urun.name + " " + urun.price);
​
    //sepete yeni ürün ekleme
    var yeniitem = '<div class="cart-item d-flex justify-content-between text-capitalize my-3">' +
      '<img src="' + urun.img + '" class="img-fluid rounded-circle" id="item-img" alt="">' +
      '<div class="item-text">' +
      '<p id="cart-item-title" class="font-weight-bold mb-0">' + urun.name + '</p>' +
      '<span>$</span>' +
      '<span id="cart-item-price" class="cart-item-price" class="mb-0">' + urun.price + '</span>' +
      '</div>' +
      '<a href="#" id="cart-item-remove" class="cart-item-remove">' +
      '<i class="fas fa-trash"></i>' +
      '</a>' +
      '</div>';
​
    sepetDiv.insertAdjacentHTML("afterbegin", yeniitem);
​
    toplam += parseInt(urun.price);
    toplambtn.textContent = toplam;
    toplamcart.textContent = toplam;
​
    //ürünSilme
    var urunSil = document.querySelectorAll(".cart-item-remove i");
​
    urunSil.forEach((item, i) => {
​
      item.onclick = function() {
​
        var silinecekDiv = this.parentElement.parentElement
        var price = silinecekDiv.querySelector(".cart-item-price");
​
        toplam -= price.textContent;
        silinecekDiv.remove();
​
        uruns--;
        toplambtn.textContent = toplam;
        toplamcart.textContent = toplam;
        urunSayisi.textContent = uruns;
      };
    });
  };
});
​
// Sepettekilerin hepsini sil.
var hepsiniSilBtn = document.getElementById("clear-cart");
​
hepsiniSilBtn.onclick = function() {
  console.log(uruns);
  for (var i = uruns; i >= 0; i--) {
    sepetDiv.removeChild(sepetDiv.childNodes[i]);
  }
  toplambtn.textContent = 0;
  toplamcart.textContent = 0;
  urunSayisi.textContent = 0;
  uruns = 0;
  toplam = 0;
};
​
​
//filter Butonları
var butonlar=document.querySelectorAll(".filter-btn");
var cards=document.querySelectorAll(".store-item");
​
for (var i=0; i<butonlar.length; i++){
​
  butonlar[i].onclick=function(e){
    var filter=e.target.getAttribute("data-filter");
​
    for (var j=0; j<cards.length;j++){
​
      if(filter=="all"){
          cards[j].style.display="block";
​
      }else{
        if(cards[j].classList.contains(filter)){
          cards[j].style.display="block";
        }else {cards[j].style.display="none";}
      }
    }
  };
}
​
​
//Arama Kutusu
var searchBox=document.getElementById("search-item");
​
searchBox.onkeyup=function(e){
​
var sfilter=e.target.value.toLowerCase();
for (var j=0; j<cards.length;j++){
if(cards[j].textContent.includes(sfilter)){
cards[j].style.display="block";
}else {cards[j].style.display="none";}
}
