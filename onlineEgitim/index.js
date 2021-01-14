const express=require("express");
const app=express();
app.set("view engine","ejs");
app.use(express.static(__dirname+"/dosyalar"));

var egitimler=[
  { index:0,
  egitimAdi:"Yazarlık Eğitimi",
   egitmen:"Said Faik",
   fotoLink:"/resimler/yazarlik.jpg",
   tarih:"04.Ocak.2021",
   zaman:"Pazartesi,Çarşamba,Cuma(20.30-22.00)",
   sure:"4 Hafta",
   fiyat:"400",
   icerik:"'Yazmasam ölecektim!' sözüyle ifade eder Sait Faik insandaki anlatma sancısını. Yazmak ne büyülü bir kelimedir. Yazar ise büyülü bir evrenin yapıtaşlarını dizen bir yaratıcı değil midir? Muhayyel bir muhatap olmaktan sıyrılıp elini şakağına dayayıp arzı endam eden bir portre olmayı; yani yazar olmayı istemez misiniz?Bu eğitim programı, edebî açıdan nitelikli metinler üretebilmeyi ve ayrıca reel sektörün ihtiyaç duyduğu metin yazarlığı bilgi ve becerisi kazandırmayı amaçlamaktadır.Konu Başlıkları: Kurgusal Metnin Doğası, Kompozisyon Teknikleri, Süreç Odaklı Yazma, Yazma Stratejileri, Kelime Hazinesini Geliştirme Teknikleri, Yaratıcı Yazma.Eğitim içeriğinde, kurgusal metnin doğası, kompozisyon teknikleri, sürece dayalı yazma yaklaşımı, yazma stratejileri, kelime hazinesi geliştirme teknikleri ve yaratıcı yazma ile ilgili teorik ve pratik bilgiler verilecektir.Eğitim sonunda edinilen kazanımlarla edebî metin üretimi için gerekli bilgi ve becerilerle donanmış, reel sektörün ihtiyaç duyduğu metin yazarlığı ve içerik üretimcisi özelliklerini haiz kursiyerlerin yetişmesi sağlanacaktır.Her branştan öğretmenler, öğretmen adayları, eğitim yöneticileri, her bölümden üniversite öğrencileri, içerik üreticileri ve konuya ilgi duyan herkes katılabilir. Katılım için herhangi bir önkoşul / ön yeterlilik şartı yoktur."
 },
 { index:1,
   egitimAdi:"Oyun Terapisi",
  egitmen:"Oya yıldız",
  fotoLink:"/resimler/oyun.png",
  tarih:"09.Ocak.2021",
  zaman:"Cumartesi-Pazar(10.00-15.00)",
  sure:"2 Hafta",
  fiyat:"450",
  icerik:"Oyun terapisi eğitimini tamamlayan kişiler çocukların duygularını ve düşünce dünyalarını daha iyi bir şekilde anlamaya başlarlar. Çocuklar ile uyumlu ve etkili bir şekilde iletişim kurmaya başlayan kişiler eğitim sonrasında kreş ve anaokulları gibi kurumlarda da çalışma imkanı elde edebilirler.Çocukların uyumlu ve daha mutlu bir şekilde yaşayabilmelerini hedefleyen gelişimsel bir terapi şekli olan oyun terapisi, çocukların oyun ve oyuncakları kullanarak kendilerini ifade edebilmelerine odaklanır. Kendilerine güvenli bir ortam sunan eğitimli bir oyun terapisti sayesinde çocuklar kendilerini daha cesaretli ve güvende hissederler. Süreç içerisinde çocukların duygusal sorunlarının ifade edilebilmesi için farklı çeşitlerde oyuncaklar sunulur. Aynı zamanda oyun terapisi eğitimi alan kişiler çocukların sanat, drama ve fantezi içeren oyunlar yoluyla da kendilerini ifade edebilmelerine destek verebilirler."
},
{ index:2,
  egitimAdi:"Masal Anlatıcılığı",
 egitmen:"Sema Özçelik",
 fotoLink:"/resimler/masal.jpg",
 tarih:"09.Ocak.2021",
 zaman:"Cumartesi-Pazar(13.00-17.00)",
 sure:"2 Hafta",
 fiyat:"450",
 icerik:"İnsanlığın en kadim becerilerinden biri masal ve hikâye anlatıcılığıdır. Hikâye ve masallar yoluyla çocuklar geleceğe hazırlanmış ve geleceği inşa etmelerinde onlara bu yolla malzemeler sunulmuştur. Günümüzde ise etkili bir şekilde eğitim ortamları başta olmak üzere sosyal her ortamda masal ve hikâyelere yer verilmektedir.Ticari hayatta da hikâyenin gücünü keşfedenlerin insanları ikna amaçlı bu gücü kullandıkları yaygın olarak görülmektedir. Hiçbir etkili konuşma yoktur ki içinde hikâye olduğu vakit sıkıcı geçsin, anlaşılması güç olsun. Anlatımı güçlendirmek, öğretici olmak ve dinleyenleri sıkmamak için en iyi yol hikâyelerdir.Hikâye ve masal dinlemeden büyüyen çocuk olmadığı gibi masal ve hikâye anlatmadan çocuk büyütende veya eğitende yoktur. İşte masal ve hikâyenin öğretici, eğitici ve gizemli dünyasından yararlanmak için “Hikâye ve Masal Anlatıcılığı Eğitici Eğitimi Sertifika Programı” düzenlemiş bulunmaktayız.Her branştan öğretmenler, öğretmen adayları, her bölümden üniversite öğrencileri, anne-babalar, anlatmayı sevenler ve konuya ilgi duyan herkes katılabilir. Katılım için herhangi bir önkoşul yoktur."
},
{ index:3,
  egitimAdi:"Robotik Kodlama Eğitmen Eğitimi",
 egitmen:"Yavuz Samur",
 fotoLink:"/resimler/robotik.jfif",
 tarih:"16.Ocak.2021",
 zaman:"Cumartesi-Pazar(10.00-15.00)",
 sure:"5 Hafta",
 fiyat:"600",
 icerik:"Kodlama, bir problemi çözebilmek için farklı bilişsel becerilerin bir arada kullanılma sürecidir. Problemi çözebilmenin ilk aşaması öncelikle verilen problemin net olarak anlaşılması ve analiz edilmesidir. Bireylere, problemlere çok yönlü çözümler sunmak, sistematik düşünmek, olayları ilişkilendirmek, farklı ve yaratıcı düşünmek, problem çözme odaklı olmak, takım çalışması yapabilme, eleştirel düşünebilme gibi özellikler kazandırır. Ayrıca çocukların bilgisayar başında harcadıkları zaman göz önüne alındığında, bu zamanı onlara fayda sağlayacak ve geliştirecek konuya yönlendirmek daha yararlı olacaktır."
},
{index:4,
 egitimAdi:"STEM Eğitmen Eğitimi",
 egitmen:"Levent Yılmaz",
 fotoLink:"/resimler/stem.jpg",
 tarih:"16.Ocak.2021",
 zaman:"Cumartesi-Pazar(10.00-15.00)",
 sure:"5 Hafta",
 fiyat:"600",
 icerik:"Bu eğitimde katılımcılara disiplinlerarası bakış açısı, 21. Yüzyıl becerileri, STEM alanlarını (Fen, teknoloji, mühendislik ve matematik) disiplinlerarası bakış açısıyla kullanarak günlük hayattaki problemlere çözümler oluşturma, analitik ve tasarım odaklı düşünme becerilerini kazandırmayı amaçlayan STEM Eğitimi alanında teorik ve uygulamalı bir eğitim verilecek olup bu eğitimle ilgili birçok uygulama yapacaklardır.Eğitim sonunda STEM Eğitimi alanında özel bilgi ve beceri, bu eğitimin farklı disiplinlerde kullanımı konusunda farkındalık ve eğitimde STEM yaklaşımının kullanımı konusunda bilgi sahibi olacka olan katılımcılar, STEM eğitimini öğretebilecek ve uygulayabilecek seviyeye gelebilecek ve STEM Eğitiminin eğitimini verebileceklerdir."
}
];



app.get("/",function(req,res){
  res.render("anasayfa",{ tumEgitimler : egitimler });
});

app.get("/egitimler",function(req,res){
  res.render("egitimler",{ tumEgitimler : egitimler });
});


app.get("/kayit",function(req,res){
  res.render("kayit",{});
});

app.get("/egitim/:egitimAdi/:index", function(req, res){
    var indexDegeri = req.params.index;
    var egitimAdi = egitimler[indexDegeri].egitimAdi;
    var egitmenAdi=egitimler[indexDegeri].egitmen;
    var egitimFiyati= egitimler[indexDegeri].fiyat;
    var resimLinki=egitimler[indexDegeri].fotoLink;
    var egitimTarihi= egitimler[indexDegeri].tarih;
    var egitimZamani= egitimler[indexDegeri].zaman;
    var egitimSuresi= egitimler[indexDegeri].sure;
    var egitimIcerik=egitimler[indexDegeri].icerik;

    res.render("egitim" , {egitimAdi:egitimAdi,
                          index:indexDegeri,
                          fiyat:egitimFiyati,
                          fotoLink:resimLinki,
                          tarih:egitimTarihi,
                          zaman:egitimZamani,
                          sure:egitimSuresi,
                          icerik:egitimIcerik,
                          egitmen:egitmenAdi,

                          tumEgitimler :egitimler
                         });

});



app.get("/iletisim",function(req,res){

    var bilgiler={ resimLink:"/resimler/bizeulas.png"  ,
                   telno: "+90-546-123-45-67",
                   adres: "Akçaköy Mahallesi Fikir Çıkmazı Sokak No:17 D:5 Mecidiyeköy/İstanbul",
                  email:"onlineegitim@egitim.edu.tr"
                 };
    res.render('iletisim',bilgiler);

  });











app.listen(8000);
