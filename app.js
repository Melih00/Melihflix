class headerClass {
  constructor(classEl) {
    this.classEl = classEl;
  }
  render() {
    return `
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <a class="nav-link ${
                    this.classEl == `@anasayfa`
                      ? `active border-bottom border-warning`
                      : ``
                  } " aria-current="page" href="./anasayfa.html">Ana
                      Sayfa</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link ${
                    this.classEl == `@diziler`
                      ? `active border-bottom border-warning`
                      : ``
                  } " href="./diziler.html">Diziler</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link ${
                    this.classEl == `@filmler`
                      ? `active border-bottom border-warning`
                      : ``
                  } " href="./filmler.html">Filmler </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link ${
                    this.classEl == `@listem`
                      ? `active border-bottom border-warning`
                      : ``
                  } " href="./listem.html">Listem</a>
              </li>
  
  
          </ul>
 
  
 `;
  }
}
// const usersList = {
//   melih : `<li class="melih users_li"><span id="melih">
//   <img id="img_header_right" class="ul_images rounded-circle" src="./images/LCDP.png" alt="">
//   <p class="mlh">Melih <i id="downsign" class="fas fa-sort-down"></i></p>

// </span> </li>`,
// hasan : `<li class="users_li"><span id="hasanfurkan">
// <img class="ul_images" src="./images/BabyBoss.png" alt="">
// <p class="users hsn"> Hasan Furkan </p>
// </span> </li>`,
// yaman : `<li class="users_li"><span id="yaman">
// <img class="ul_images" src="./images/dustin_pp.png" alt="">
// <p class="users ymn">Yaman </p>
// </span> </li>`,
// mark: `<li class="users_li"> <span id="markmaddison">
// <img class="ul_images" src="./images/witcher_pp.png" alt="">
// <p class="users md">Mark Maddison </p>
// </span> </li>`,
// mccharty:`<li class="users_li"><span id="mccharty">
// <img class="ul_images" src="./images/lucifer_pp.png" alt="">
// <p class="users mc">Mccarthy Silva </p>
// </span> </li>
// <li>`
// }
const Users = {
  first: `<li class="melih users_li"><span id="melih">
  <img id="img_header_right" class="ul_images rounded-circle" src="./images/LCDP.png" alt="">
  <p class="mlh">Melih <i id="downsign" class="fas fa-sort-down"></i></p>
  
  </span> </li>`,
  second:`<li class="users_li"><span id="hasanfurkan">
  <img class="ul_images" src="./images/BabyBoss.png" alt="">
  <p class="users hsn"> Hasan Furkan </p>
  </span> </li>` ,
  third: `<li class="users_li"><span id="yaman">
  <img class="ul_images" src="./images/dustin_pp.png" alt="">
  <p class="users ymn">Yaman </p>
  </span> </li>`,
  fourth:`<li class="users_li"> <span id="markmaddison">
  <img class="ul_images" src="./images/witcher_pp.png" alt="">
  <p class="users md">Mark Maddison </p>
  </span> </li>` ,
  fifth:  `<li class="users_li"><span id="mccharty">
  <img class="ul_images" src="./images/lucifer_pp.png" alt="">
  <p class="users mc">Mccarthy Silva </p>
  </span> </li`
}
const usersMainUl = document.getElementById("users_main_ul");
usersMainUl.innerHTML = `${Users.first}
<ul id="users_ul" class="rounded">

${Users.second}
${Users.third}
${Users.fourth}
${Users.fifth}
<br><br>
<li>
<p>Profil Yönetimi</p>
</li>

<hr>
<li>
<p>Hesap</p>
</li>
<li>
<p>Yardım Merkezi</p>
</li>
<li>
<p>Oturumu Kapat</p>
</li>
</ul>
`
 
;
const header = document.getElementById("header");
const thisPage = new headerClass(header.classList[0]);
header.innerHTML = thisPage.render();
const mainUl = document.getElementById("users_main_ul");
const childUl = document.getElementById("users_ul");
const melih = document.getElementById("melih");
const hasanfurkan = document.getElementById("hasanfurkan");
const yaman = document.getElementById("yaman");
const markmaddison = document.getElementById("markmaddison");
const mccharty = document.getElementById("mccharty");
const mlh = document.getElementsByClassName("mlh")[0];
const ymn = document.getElementsByClassName("ymn")[0];
const hsn = document.getElementsByClassName("hsn")[0];
const md = document.getElementsByClassName("md")[0];
const mc = document.getElementsByClassName("mc")[0];
const list = {
  choosen: melih,
  parent: null,
};
const tag = list.choosen.children[1].children[0];
function userPicker() {
  childUl.style.display = 'none'
  
  setTimeout(
    () =>{
      childUl.style.display = 'inline-block'
       const thisParent = this.parentNode;
  const choosenParent = list.choosen.parentNode;
  this.appendChild(tag);
  choosenParent.appendChild(this);
  //   list.choosen.children[1].removeChild(tag)
  thisParent.appendChild(list.choosen);
  list.choosen.children[0].classList.remove("rounded-circle");
  list.choosen = this;
  list.choosen.children[0].classList.add("rounded-circle");
  
    },6
  )
 
}

melih.addEventListener("click", userPicker);
markmaddison.addEventListener("click", userPicker);
hasanfurkan.addEventListener("click", userPicker);
yaman.addEventListener("click", userPicker);
mccharty.addEventListener("click", userPicker);

class imgDivs {
  constructor(imgLink, name, eslesme, time, isMovie, aciklama) {
    this.img = imgLink;
    this.name = name;
    this.eslesme = eslesme;
    this.time = time;
    this.isMovie = isMovie;
    this.aciklama = aciklama;
  }
  render() {
    return `<div class="img_divs"><img class="kapakfotolari" style='border-radius:.8rem;' src="./images/${this.img}" alt="">
<div class="for_background rounded resim_"></div><i title="Oynat" class="fas fa-play opener resim_oynat resim_"></i><i
    title="Bilgi" class="fas fa-plus resim_ resim_arti "></i>
<p class="resim_p resim_">${this.name}</p>
<p class="resim_eslesme resim_">%${this.eslesme} Eşleşme <span class="time">${this.time}</span></p>
</div>`;
  }
}
const wilboy = new imgDivs(
  "kapakfoto_bilmemne_ailesi.png",
  "Willoughby Ailesi",
  "88",
  "1 Saat 59 Dakika",
  true,
  "The Willoughbys, aileleri tarafından terk edilen dört çocuğun yaşadıklarını konu ediyor. Dört Willoughby, ebeveynleri tarafından terk edilince, kendi başlarının çaresine bakmaları gerektiğini fark eder. Sorumsuz ebevenylerinin yokluğunda kendilerini türlü maceraların içinde bulan dört çocuk, bu süreçte aile olmanın gerçek anlamını keşfeder."
);
const jenerasyon = new imgDivs(
  "kapakfoto_2.png",
  "Gelecek Jenerasyon",
  "91",
  "2 Saat 12 Dakika",
  true,
  "Gelecek Jenerasyon, gizli bir robot ile arkadaşlık kuran bir kızın hikayesini konu ediyor. Mai,yalnız bir kızdır. Sıkıcı bir yaşamı olan küçük kızın hayatı, çok gizli bir robot ile arkadaşlık kurması ile bambaşka bir hal alır. Sinsi bir kötü kahramanın planlarını öğrene Mai ve robot, birlikte aksiyon dolu bir maceraya atılır. Mai ve robot bu süreçte zorbalara, kötü robotlara ve komplocu çılgın bir adama karşı savaşmak zorunda kalır."
);
const babyboss = new imgDivs(
  "kapakfoto_babyboss.png",
  "Patron Bebek",
  "91",
  "3 Sezon",
  false,
  "Tim 7 yaşında bir çocuktur ve en büyük hayali bir köpek sahibi olmaktır. Ancak günün birinde hayallerine büyük bir darbe iner. Annesi ve babası küçük bir bebeği evlat edinmiştir. Ancak bu bebekte bir gariplik vardır."
);
const peakyBlinders = new imgDivs(
  "kapakfoto_peakyblinders.png",
  "Peaky Blinders",
  "96",
  "5 Sezon",
  false,
  "Birinci Dünya Savaşı’ndan yeni çıkmış İngiltere’yi, yasadışı faaliyet gösteren çeşitli çeteler sarmıştır. Bunlardan biri de soygunculuk ve at yarışıyla para kazanan Peaky Blinders’dır. Polislere rüşvet yedirerek paçayı kurtaran çete, bir soygunda yanlışlık yapınca, başlarına bela olacak yeni bir müfettişin şehre gelmesine vesile olurlar."
);
const strangerThings = new imgDivs(
  "kapakfoto_st.png",
  "Stranger Things",
  "94",
  "4 Sezon",
  false,
  `80'li yılları kendine fon yapan Stranger Things, dönemin korku filmlerine selam çakmayı atlamayan bir fantastik gerilim dizisi. Winona Ryder, David Harbour, Cara Buono'yu başrollerinde buluşturan dizi; kaybolan genç bir çocuğu ve onu bulmaya çalışan annesini anlatıyor.
  `
);
const Lucifer = new imgDivs(
  "kapakfoto_lucifer.png",
  "Lucifer",
  "97",
  "5 Sezon",
  false,
  "“Cehennem Lordu” Lucifer Morningstar; Los Angeles Polis Departmanı için suçluları yakalamaktadır. Ancak büyük bir sırrı vardır: Bu çekici adam, aslında yeryüzüne düşmüş bir melektir! Neil Gaiman tarafından yaratılan Lucifer, Sandman isimli serinin yardımcı karakterlerinden biriydi ve daha sonra kendi çizgi romanına kavuştu. Çizgi romanlarda, karakter Lux isimli bir barı işletiyor."
);

const arrow = new imgDivs(
  "kapakfoto_arrow.jpg",
  "Arrow",
  "81",
  "8 Sezon",
  false,
  `Öldü sanıldığı bir deniz kazasının ardından, uzun süre bir adada yalnız başına yaşayan milyarder playboy Oliver Queen, adada geçirdiği süre boyunca çok değişmiştir. 5 yılın ardınan bulunan ve evine dönen Oliver, dönüştüğü bu yeni Oliver'ı ailesinden ve diğerlerinden saklamaya çalışırken, geçmişte işlediği günahlarından arınmak için suçlularla mücadele etmeye karar verir ve kendisine Arrow kişiliğini yaratır..
  `
);
const sihirliejder = new imgDivs(
  "kapakfoto_sihirli.png",
  "Sihirli Ejder",
  "91",
  "2 Saat 34 Dakika",
  true,
  `İşçi sınıfı bir ailenin üyesi olan Din, büyük hayalleri olan bir üniversite öğrencisidir. Bir gün Din'in yolu dilekleri gerçeğe dönüştürebilen bir ejderha olan Long ile kesişir. İkisi birlikte Din'in uzun süredir kayıp olan çocukluk arkadaşı Lina'yı bulmak için macera dolu bir yolculuğa çıkar. Şangay'ın sokaklarında heyecan dolu bir maceraya atılan ikili, bu süreçte hayatın bilmecelerini çözmeye çalışır.
  `
);
const lupin = new imgDivs(
  "kapakfoto_lupin.png",
  "Lupin",
  "91",
  "3 Sezon",
  false,
  `Assane Diop’un hayatı, işlemediği bir suçla itham edilen babasının ölmesiyle altüst olur. Aradan geçen yılların ardından Assane Diop, babasının intikamını almaya karar verir ve bunu yapmak için de kahramanı Arsène Lupin’den ilham alır.
`
);
const olulerordusu = new imgDivs(
  "kapakfoto_olulerordusu.png",
  "Ölüler Ordusu",
  "96",
  "3 Saat 9 Dakika",
  true,
  `Army of the Dead, Las Vegas’taki bir zombi salgını sırasında yaşananları konu ediyor. Bir adam salgın sırasında bir grup paralı askeri bir araya getirir ve büyük oynamaya karar verir. Ekip, karantina bölgesine girmeye cesaret ederek gelmiş geçmiş en büyük soygunu gerçekleştirmeye çalışır.
  `
);
const sungerbob = new imgDivs(
  "kapakfoto_sungerbob.png",
  "Sünger Bob",
  "94",
  "2 Saat 34 Dakika",
  true,
  `Sevilen çizgi-dizi Süngerbob Karepantolon'un beyazperde uyarlaması olan yapıtta Süngerbob Karepantolon'un kıyıya çıkıp yaşayacağı hayatının en kahramanca macerasını izleyeceğiz. Tehlikeli korsan Burger-Beard ele geçirdiği sihirli kitabın son sayfasını bulup formülü tamamlayarak planını hayata geçirmeyi istemektedir. Bu durumda Bikini Bottom şehri tehlikede olacaktır. Şehrin SüngerBob, Patrick ve ekiplerine denizin dışında ihtiyacı vardır. Şimdi tüm ekip Burger-Beard'a karşı harekete geçmek zorundadır. Şehirlerini tekrar kazanabilmek için ise kitabı geri almak durumundadırlar.
  `
);
const cadilarokulu = new imgDivs(
  "kapakfoto_cadilar.png",
  "Cadılar Okulu",
  "97",
  "4 Sezon",
  false,
  `Mildred Hubbble, annesi Julie ile sıradan bir hayat yaşamaktadır; ta ki Maud Spellbody süpürgesiyle balkonlarına çakılana kadar. Ondan sonra hiçbir şey aynı olmayacaktır. Maud Mildred'i genç cadılar için bir okul olan Cackle'ın Akademisi ile tanıştırır. Arkadaş canlısı okul müdürü Bayan Cackle'ın ve korkutucu yardımcısı Bayan Hardbroom'un gözletimi altında Mildred eğitimine başlar. Ancak ne kadar çok çabalarsa çabalasın, büyüleri sorunlu olur ve sürekli kaos yaratır. Acaba Mildred gerçekten becerikli bir cadı olabilecek midir?
  `
);

const himym = new imgDivs(
  "kapakfoto_himym.png",
  "How I Met Your Mother",
  "81",
  "1 Sezon",
  false,
  `2030 yılındayız; Ted Mosby çocuklarına anneleri ile tanışmasının ‘uzuuun’ hikayesini anlatıyor ve bir anda 2005 yılının Amerikası’na geri dönerek, beş sıkı dostun 20’li yaşlardaki eğlenceli yaşamalarına konuk oluyoruz.
  Ted, 27 yaşında Manhattan'lı bir mimardır. Hukuk fakültesinde okuyan Marshall ise en iyi dostudur ve dokuz yıldır beraber olduğu sevgilisi Lily vardır. Ekibin son üyesi Barney Stenson ise nev-i şahsına münhasır, takım elbise tutkunu bir kadın avcısıdır. Bir gün Marshall Ted’e, Lily’ye evlenme teklif edeceğini söyleyince bekâr kalmak istemeyen Ted’in etekleri tutuşur. Ama evliliğin de herhangi biriyle olmayacağına ve hayatının gerçek aşkını bulacağına inanmaktadır. Tam da bu sırada Robin Scherbatsky ile tanışınca How I Met Your Mother’ın sıkı beşlisi tamamlanır.`
);
const fearless = new imgDivs(
  "kapakfoto_fearless.png",
  "Fearless",
  "91",
  "2 Saat 34 Dakika",
  true,
  `Çevrimiçi video oyunlara çok meraklı bir çocuk olan Reid, “Korkusuz “ lakabıyla zamanının çoğunu ekran başında geçirmektedir. Anne-babasının hafta sonunda şehir dışında olmasından dolayı rahatça oyun oynamayı planlıyordur. Okul projesi için arkadaşı Melanie de gelecek ve birlikte çalışacaklardır. Ancak iki çocuk o akşam sürpriz bir durumla karşılaşacaktır.  `
);
const cukur = new imgDivs(
  "kapakfoto_cukur.png",
  "Çukur",
  "91",
  "1 Sezon",
  false,
  `Koçovalı ailesinin en küçük oğlu, gözü kara ve isyankâr Yamaç karakterini canlandıran Aras Bulut İynemli ile deli dolu ve dik kafalı, yaşam enerjisiyle herkesi kendine hayran bırakan Sena rolünde izleyeceğimiz Dilan Çiçek Deniz’in yer aldığı dizinin yönetmenliğini Sinan Öztürk üstleniyor.`
);
const atiye = new imgDivs(
  "kapakfoto_atiye.png",
  "Atiye",
  "96",
  "1 Sezon",
  false,
  `Şengül Boybaş'ın “Dünyanın Uyanışı” adlı kitaptan esinlenerek hazırlanan dizi, genç ve güzel bir ressam olan Atiye adındaki bir kadının mistik hikayesini konu ediyor. Ailesi ve sevgilisi Ozan ile mutllu bir yaşamı olan Atiye'nin hayatı, bir gün dünyanın en eski tapınağı olan Göbeklitepe’ye gerçekleştirdiği ziyaretle bambaşka bir hal alır. Atiye'nin bölgede yaptığı gezi sırdasında, Erhan adındaki bir arkeolog, Atiye ile Göbeklitepe arasında mistik bir bağlantı olduğuna dair bir sembol keşfeder. Bu gizeml olayın peşine düşmeye karar veren Atiye, kendisine bambaşka bir kapı açan bu antik tapınakta geçmişini aramaya başlar. Atiye, geçmişin kapılarını araladıkça, geçmişle geleceği, gerçek ile ruhani arasındaki her şeyi sorgulamaya başlar.
`
);
const drwho = new imgDivs(
  "kapakfoto_doctorwho.png",
  "Doctor Who",
  "94",
  "13 Sezon",
  false,
  `Bu Doktor bambaşka bir doktor. İsmi, karakteri, tavırları her şeyiyle bir muamma. Rose Tyler adında bir kadın, kendisine Doktor diye adlandıran gizemli bir yabancıyla tanışır ve bundan sonra hayatı baştan sona değişir. Kısa süre içerisinde ailesi de dahil bütün dünyanın tehlike altında olduğunu öğrenir. Yapması gereken kurtuluş yolunu bulmaktır..
  `
);
const ask101 = new imgDivs("kapakfoto_ask101.png", "Aşk 101", "97", "5 Sezon");

const blackmirror = new imgDivs(
  "kapakfoto_bm.png",
  "Black Mirror",
  "81",
  "1 Sezon",
  false,
  `3 bölümden oluşan mini dizinin her bir bölümü bir başka hikayeyi anlatıyor. İlk bölüm, sosyal medyanın başa bela olabileceğini gösterirken, ikinci bölüm televizyondaki yarışmaların birgün varabileceği noktaya parmak basıyor. Üçüncü bölüm ise; yakın bir gelecekte insanlar taktırdıkları hafıza çipleri sayesinde tüm hayatlarını depolayabilmektedirler. Hiçbir şey unutulmuyor, hiçbir ayrıntı atlanmıyordur. Peki ya bu, iyi bir şey midir?
  `
);
const trolavcilari = new imgDivs(
  "kapakfoto_trol.png",
  "Trol Avcıları",
  "91",
  "2 Saat 34 Dakika",
  true,
  `Arcadia sıradan bir kasaba gibi görünebilir, ancak onu troller, uzaylılar ve büyücüler dahil olmak üzere diğer dünya yaratıkları arasındaki birçok savaş için bir bağlantı noktası yapan büyülü ve mistik çizgilerin merkezinde yer alır. Şimdi, çeşitli kahramanlar, onları birbirine bağlayan sihri kontrol etmek için Arcane Order ile savaşmaları gereken destansı bir macerada ekip oluşturacaklar.`
);
const vikings = new imgDivs(
  "kapakfoto_vikinks.jpg",
  "Vikings",
  "91",
  "6 Sezon",
  false,
  `8. yüzyıl İskandinavyası’nda geçen dizi, basit bir çiftçiyken cesur bir savaşçıya dönüşen Ragnar Lothbrok ve ailesinin öyküsünü ekranlara taşıyor. Savaş Tanrısı Odin'in soyundan geldiğine inanılan Ragnor’un acımasız ve korkusuz adamlarıyla birlikte denizlerle olan imtihanını seyrederken; savaşçı ve tüccar bir kavim olan Vikingler’in çok az işlenmiş ilgi çekici kültürüne hep birlikte tanık oluyoruz.

  `
);
const countdown = new imgDivs(
  "kapakfoto_countdown.png",
  "Count Down",
  "96",
  "2 Saat 45 Dakika",
  true,
  `Countdown, bir uygulamadan hayattaki son günlerini yaşadığını öğrenen genç bir kadının hikayesini konu ediyor. Genç bir hemşire, insanların en zaman öleceğini tahmin eden bir uygulamayı indirir. Uygulamada, yaşamak için sadece üç gününün kaldığını öğrenen genç kadın, bu sırada gizemli bir siluetin kendisini takip ettiğini fark eder. Genç kadın, zamanı dolmadan önce peşindekinin ne olduğunu anlayığ, hayatını kurtarmanın yolunu bulmak zorundadır.
  `
);
const raising = new imgDivs(
  "kapakfoto_bunebe.png",
  "Raising",
  "77",
  "2 Sezon",
  false,
  `Raising Dion, kocasının ölümünün ardından oğluyla bir başına kalan genç bir kadının hikayesini konu ediyor. Nicole, eşinin ölümün ardından oğlu Dion ile bir başına kalan genç bir kadındır. Bir yandan eşinin yokluğu ile başa çıkmaya çalışan Nicole, bir yandan da oğlunu tek başına yetiştirebilmeye çalışır. Bir gün Nicole, oğlu Dion’un bir takım süper güçlere sahip olduğunu keşfeder. Nicole, bu sıra dışı olay karşısında ne yapacağını bilemez. Oğlundaki güçlerin açığa çıkmasının ona zarar vereceğini düşünen Nicole, bu güçleri gizlemeye karar verir.
`
);
const klaus = new imgDivs(
  "kapakfoto_klaues.png",
  "Klaus",
  "83",
  "5 Sezon",
  true
);

document.getElementById("wilboy").innerHTML = wilboy.render();
document.getElementById("jenerasyon").innerHTML = jenerasyon.render();
document.getElementById("babyboss").innerHTML = babyboss.render();
document.getElementById("peakyBlinders").innerHTML = peakyBlinders.render();
document.getElementById("strangerThings").innerHTML = strangerThings.render();
document.getElementById("Lucifer").innerHTML = Lucifer.render();

document.getElementById("arrow").innerHTML = arrow.render();
document.getElementById("sihirliejder").innerHTML = sihirliejder.render();
document.getElementById("lupin").innerHTML = lupin.render();
document.getElementById("olulerordusu").innerHTML = olulerordusu.render();
document.getElementById("sungerbob").innerHTML = sungerbob.render();
document.getElementById("cadilarokulu").innerHTML = cadilarokulu.render();

document.getElementById("himym").innerHTML = himym.render();
document.getElementById("fearless").innerHTML = fearless.render();
document.getElementById("cukur").innerHTML = cukur.render();
document.getElementById("atiye").innerHTML = atiye.render();
document.getElementById("drwho").innerHTML = drwho.render();
document.getElementById("ask101").innerHTML = ask101.render();

document.getElementById("blackmirror").innerHTML = blackmirror.render();
document.getElementById("trolavcilari").innerHTML = trolavcilari.render();
document.getElementById("vikings").innerHTML = vikings.render();
document.getElementById("countdown").innerHTML = countdown.render();
document.getElementById("raising").innerHTML = raising.render();
document.getElementById("klaus").innerHTML = klaus.render();

// ..
// ..
// ..
// ..
// ..
// ..
// ..

class modal {
  constructor(
    id,
    resim,
    name,
    eslesme,
    time,
    aciklama,
    type1 = "",
    type2 = "",
    type3 = "",
    type4 = ""
  ) {
    this.id = id;
    this.resim = resim;
    this.name = name;
    this.eslesme = eslesme;
    this.time = time;
    this.aciklama = aciklama;
    this.type1 = type1;
    this.type2 = type2;
    this.type3 = type3;
    this.type4 = type4;
   
  }
  imdb (){
      return( this.id!='RANDMmodal' ? (6 + Math.round(Math.random()*3)) + `.` + (Math.round(Math.random()*9)) : 10.0)
    }
  render() {
    return `<div class="modal fade" id="${
      this.id
    }" tabindex="-1" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog modal-xl">
      <div class="modal-content rounded-3">
           <div class="modal-body">  <img class='modal-img rounded-3' src="./images/${
                this.resim
              }" alt="" >    <button type="button" class="modal-closer btn btn-close btn-warning" data-bs-dismiss="modal" aria-label="Close"></button>

            <div class='modal-title-div'>  <h3 class="modal-title" id="exampleModalLabel">${this.name}</h3><span class='imdb'>IMDb: ${this.imdb()} ★</span></div>
              <br><div class="movie-type-div"><div class="movie-type-div-div">
              <p class="eslesme">%${this.eslesme} eşleşme <span class="time modal-time1">${
      this.time
    }</span></p>
          <span class="time modal-time orta_nokta">·<span class="movieType">${
            this.type1
          }</span></span>   
          <span class="time modal-time ms-2  orta_nokta">${
            this.type2 == "" ? "" : "·"
          }<span class=" movieType">${this.type2}</span></span>   
          <span class="time modal-time ms-2  orta_nokta">${
            this.type3 == "" ? "" : "·"
          }<span class="movieType">${this.type3}</span></span>   
          <span class="time modal-time ms-2  orta_nokta">${
            this.type4 == "" ? "" : "·"
          }<span class="movieType">${this.type4}</span></span>   
      </div>
      </div>
 
            <i title="Oynat" data-bs-toggle="tooltip" data-bs-placement="top" class="fas fa-play btn btn-light rounded-pill modal_opener "></i><i
              title="Listeme Ekle"  data-bs-toggle="tooltip" data-bs-placement="top" class="fas fa-plus btn btn-secondary modal_opener1"></i>
              <div class="modal-aciklama">
      
                  <p class="">${this.aciklama}</p>
  
              </div>
          </div>
          <br><br>
      </div>
  </div>`;
  }
}
const lupinModal = new modal(
  "LUPINmodal",
  'modal_lupin.jpg',
  lupin.name,
  lupin.eslesme,
  lupin.time,
  lupin.aciklama,
  "Dram",
  'Gerilim'
);
const randmModal = new modal(
  "RANDMmodal",
  "modal_randm.jpg",
  "Rick and Morty",
  "100",
  "5 Sezon",
  `Çok zeki olmayan 14 yaşındaki endişeli bir çocuk olan torunu Morty ile
yetişkin bir
yüzmede animasyonlu bir alkolik ve dikkatsiz bilim adamı olan Rick'in sonsuz
maceralarını anlatan bir animasyon dizidir. Rick, karakter olarak tamamen farklı
biri;
üstelik yaptığı zaman yolculuğu değil de boyutlar arası yolculuk. Rick ve Morty’nin
oldukça tuhaf ve tehlikeli yolculuklarını boyutlar arası seyahat olarak tanımlasak
da bu
tanım biraz yetersiz kalabilir. Öyle ki maceralar bir insan anatomisinin içinde de
devam
edebiliyor. Onlarınki sınırları kesin olmayan bir yolculuk. Dizinin en büyük
başarılarından biri de çok yönlü olması. Absürt mizahı ne kadar iyi verebiliyorsa,
hüznü
de o kadar iyi veriyor. Derin felsefi konular ne kadar başarılı işleniyorsa basit
geyik
muhabbetleri de o kadar başarılı işleniyor. Rick and Morty hemen her yaştan
seyirciyi
bünyesine katabilecek kapasitede bir çizgi dizi.`,
  "Bilim Kurgu",'Kara Mizah','Animasyon','Muhteşem'
);
const olulerModal = new modal(
  'OLULERmodal','modal_oluler.jpg',olulerordusu.name,  olulerordusu.eslesme,
  olulerordusu.time,
  olulerordusu.aciklama,'Fantastik','Eğlence'
)
const peakyModal = new modal(
  'PEAKYmodal','modal_peaky.jpg',peakyBlinders.name,peakyBlinders.eslesme,peakyBlinders.time,peakyBlinders.aciklama,'Dram', 'Gerilim','Suç'
)
const atiyeModal = new modal(
  'ATIYEmodal','modal_atiye.jpg',atiye.name,atiye.eslesme,atiye.time,atiye.aciklama,'Bilim Kurgu', 'Gizem','Psikolojik Gerilim'
)
const strangerModal = new modal(
  'STRANGERmodal','modal_stranger.png',strangerThings.name,strangerThings.eslesme,strangerThings.time,strangerThings.aciklama,'Doğa Üstü', 'Gerilim','Dram'
)
const luciferModal = new modal(
  'LUCIFERmodal','modal_lucifer.jpg',Lucifer.name,Lucifer.eslesme,Lucifer.time,Lucifer.aciklama,'Dedektiflik', 'Fantastik','Gizem'
)
const babybossModal = new modal(
  'BBmodal','modal_babyboss.jpg',babyboss.name,babyboss.eslesme,babyboss.time,babyboss.aciklama,'Çocuk', 'Fantastik','Animasyon'
)
const sihirliModal = new modal(
  'SIHIRLImodal','modal_sihirli.jpg',sihirliejder.name,sihirliejder.eslesme,sihirliejder.time,Lucifer.sihirliejder,'Animasyon', 'Macera'
)
  const wilboyModal = new modal(
  'WILBOYmodal','modal_wilboy.jpg',wilboy.name,wilboy.eslesme,wilboy.time,wilboy.aciklama,'Animasyon', 'Komedi'
)
const jenerasyonModal = new modal(
  'JENERASYONmodal','modal_jenerasyon.jpg',jenerasyon.name,jenerasyon.eslesme,jenerasyon.time,jenerasyon.aciklama,'Çocuk', 'Aksiyon','Bilim Kurgu'
)
const sungerModal = new modal(
  'SUNGERmodal','modal_sunger.jpg',sungerbob.name,sungerbob.eslesme,sungerbob.time,sungerbob.aciklama,'Çocuk', 'Eğlence'
)
const fearlessModal = new modal(
  'FEARLESSmodal','modal_fearless.jpg',fearless.name,fearless.eslesme,fearless.time,fearless.aciklama,'Aksiyon', 'Dövüş'
)
const himymModal = new modal(
  'HIMYMmodal','modal_himym.jpg',himym.name,himym.eslesme,himym.time,himym.aciklama,'Aksiyon', 'Dövüş'
)
const drwhoModal = new modal(
  'DRWHOmodal','modal_drwho.jpg',drwho.name,drwho.eslesme,drwho.time,drwho.aciklama,'Aksiyon', 'Dövüş'
)
const cukurModal = new modal(
  'CUKURmodal','modal_cukur.jpg',cukur.name,cukur.eslesme,cukur.time,cukur.aciklama,'Aksiyon', 'Dövüş'
)
const cadilarModal = new modal(
  'CADILARmodal','modal_cadilar.jpg',cadilarokulu.name,fearless.eslesme,cadilarokulu.time,cadilarokulu.aciklama,'Aksiyon', 'Dövüş'
)
const arrowModal = new modal(
  'ARROWmodal','modal_arrow.jpg',arrow.name,arrow.eslesme,arrow.time,arrow.aciklama,'Aksiyon', 'Dövüş'
)
const ask101Modal = new modal(
  'ASK101modal','modal_ask101.jpg',ask101.name,ask101.eslesme,ask101.time,ask101.aciklama,'Aksiyon', 'Dövüş'
)
const bbModal = new modal(
  'BMmodal','modal_blackmirror.jpg',blackmirror.name,blackmirror.eslesme,blackmirror.time,blackmirror.aciklama,'Aksiyon', 'Dövüş'
)
const trolModal = new modal(
  'TROLmodal','modal_trol.jpg',trolavcilari.name,trolavcilari.eslesme,trolavcilari.time,trolavcilari.aciklama,'Aksiyon', 'Dövüş'
)
const vikingsModal = new modal(
  'VIKINGSmodal','modal_vikings.jpg',vikings.name,vikings.eslesme,vikings.time,vikings.aciklama,'Aksiyon', 'Dövüş'
)
const countdownModal = new modal(
  'COUNTDOWNmodal','modal_countdown.jpg',countdown.name,countdown.eslesme,countdown.time,countdown.aciklama,'Aksiyon', 'Dövüş'
)
const raisingModal = new modal(
  'RAISINGmodal','modal_raising.jpg',raising.name,raising.eslesme,raising.time,raising.aciklama,'Aksiyon', 'Dövüş'
)
const klausModal = new modal(
  'KLAUSmodal','modal_klausjpg',klaus.name,klaus.eslesme,klaus.time,klaus.aciklama,'Aksiyon', 'Dövüş'
)
document.getElementById("modal_insert_randm").innerHTML = randmModal.render();
document.getElementById("modal_insert_lupin").innerHTML = lupinModal.render();
document.getElementById("modal_insert_olulerordusu").innerHTML = olulerModal.render();
document.getElementById("modal_insert_peaky").innerHTML = peakyModal.render();
document.getElementById("modal_insert_atiye").innerHTML = atiyeModal.render();
document.getElementById("modal_insert_stranger").innerHTML = strangerModal.render();
document.getElementById("modal_insert_lucifer").innerHTML = luciferModal.render();
document.getElementById("modal_insert_babyboss").innerHTML = babybossModal.render();
document.getElementById("modal_insert_sihirli").innerHTML = sihirliModal.render();
document.getElementById("modal_insert_wilboy").innerHTML = wilboyModal.render();
document.getElementById("modal_insert_jenerasyon").innerHTML = jenerasyonModal.render();
document.getElementById("modal_insert_sunger").innerHTML = sungerModal.render();
document.getElementById("modal_insert_fearless").innerHTML = fearlessModal.render();
document.getElementById("modal_insert_himym").innerHTML = himymModal.render();
document.getElementById("modal_insert_drwho").innerHTML = drwhoModal.render();
document.getElementById("modal_insert_cukur").innerHTML = cukurModal.render();
document.getElementById("modal_insert_cadilar").innerHTML = cadilarModal.render();
document.getElementById("modal_insert_arrow").innerHTML = arrowModal.render();
document.getElementById("modal_insert_ask101").innerHTML = ask101Modal.render();
