
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
                  } " aria-current="page" href="#">Ana
                      Sayfa</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link ${
                    this.classEl == `@diziler`
                      ? `active border-bottom border-warning`
                      : ``
                  } " href="#">Diziler</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link ${
                    this.classEl == `@filmler`
                      ? `active border-bottom border-warning`
                      : ``
                  } " href="#">Filmler </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link ${
                    this.classEl == `@listem`
                      ? `active border-bottom border-warning`
                      : ``
                  } " href="#">Listem</a>
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
  first: `<li class="melih users_li"><span class='users_lispan' id="melih">
  <img id="img_header_right" class="ul_images rounded-circle" src="./images/LCDP.png" alt="">
  <p class="mlh">Melih <i id="downsign" class="fas fa-sort-down"></i></p>
  </span> </li>`,
  second: `<li class="users_li"><span class='users_lispan' id="hasanfurkan">
  <img class="ul_images" src="./images/BabyBoss.png" alt="">
  <p class="users hsn"> Hasan Furkan <i id="downsign" class="fas fa-sort-down"></i> </p>
  </span> </li>`,
  third: `<li class="users_li"><span class='users_lispan' id="yaman">
  <img class="ul_images" src="./images/dustin_pp.png" alt="">
  <p class="users ymn">Yaman  <i id="downsign" class="fas fa-sort-down"></i></p>
  </span> </li>`,
  fourth: `<li class="users_li"> <span class='users_lispan' id="markmaddison">
  <img class="ul_images" src="./images/witcher_pp.png" alt="">
  <p class="users md">Mark Maddison  <i id="downsign" class="fas fa-sort-down"></i></p>
  </span> </li>`,
  fifth: `<li class="users_li"><span class='users_lispan' id="mccharty">
  <img class="ul_images" src="./images/lucifer_pp.png" alt="">
  <p class="users mc">Mccarthy Silva  <i id="downsign" class="fas fa-sort-down"></i></p>
  </span> </li>`,
  sixth: '' ,
  seventh: '' ,
  eighth: ''
  
};
const usersMainUl = document.getElementById("users_main_ul");
const fnc2 = () => {
  return `${Users.first}
<ul id="users_ul" class="rounded">

${Users.second != '' ? Users.second : ""}
${Users.third != '' ? Users.third : ""}
${Users.fourth != '' ? Users.fourth : ""}
${Users.fifth != '' ? Users.fifth : ""}
${Users.sixth != '' ? Users.sixth : ""}
${Users.seventh != '' ? Users.seventh : ""}
${Users.eighth != '' ? Users.eighth : ""}

<br>
<li>


<p><a class="profilyonetimi-p" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
Profil Y??netimi  </a> 
  </p>
</li>

  <div class="collapse" id="collapseExample">
  <div class="card card-body profilyonetimi-div">
    <button id='profil-ekle' data-bs-toggle="modal" data-bs-target="#EKLEmodal" class='btn btn-warning rounded-pill'>Kullan??c?? Ekle</button>
    <button id='profil-kaldir' data-bs-toggle="modal" data-bs-target="#KALDIRmodal" class='btn btn-warning rounded-pill'>Kullan??c?? Kald??r</button>
  </div>
</div>
 
<hr>
<li>
<p>Hesap</p>
</li>
<li>
<p>Yard??m Merkezi</p>
</li>
<li>
<p>Oturumu Kapat</p>
</li>
</ul>
`;
};

usersMainUl.innerHTML = fnc2();
const header = document.getElementById("header");
const thisPage = new headerClass(header.classList[0]);
header.innerHTML = thisPage.render();
const mainUl = document.getElementById("users_main_ul");
const childUl = document.getElementById("users_ul");
const users = document.getElementsByClassName("users_lispan");
const melih = document.getElementById("melih");
const hasanfurkan = document.getElementById("hasanfurkan");
const yaman = document.getElementById("yaman");
const markmaddison = document.getElementById("markmaddison");
const mccharty = document.getElementById("mccharty");
const list = {
  choosen: melih,
  parent: null,
};
function userPicker() {
  childUl.style.display = "none";

  setTimeout(() => {
    childUl.style.display = "inline-block";
    const thisParent = this.parentNode;
    const choosenParent = list.choosen.parentNode;
    choosenParent.appendChild(this);

    //   list.choosen.children[1].removeChild(tag)
    thisParent.appendChild(list.choosen);
    list.choosen.children[0].classList.remove("rounded-circle");
    list.choosen = this;
    list.choosen.children[0].classList.add("rounded-circle");
    // usersMainUl.innerHTML = fnc2();
  }, 6);
}
melih.addEventListener("click", userPicker);
markmaddison.addEventListener("click", userPicker);
hasanfurkan.addEventListener("click", userPicker);
yaman.addEventListener("click", userPicker);
mccharty.addEventListener("click", userPicker);
// Array.from(users).forEach((element) => {
//   element.addEventListener("click", userPicker);
// });

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
<p class="resim_eslesme resim_">%${this.eslesme} E??le??me <span class="time">${this.time}</span></p>
</div>`;
  }
}
const wilboy = new imgDivs(
  "kapakfoto_bilmemne_ailesi.png",
  "Willoughby Ailesi",
  "88",
  "1 Saat 59 Dakika",
  true,
  "The Willoughbys, aileleri taraf??ndan terk edilen d??rt ??ocu??un ya??ad??klar??n?? konu ediyor. D??rt Willoughby, ebeveynleri taraf??ndan terk edilince, kendi ba??lar??n??n ??aresine bakmalar?? gerekti??ini fark eder. Sorumsuz ebevenylerinin yoklu??unda kendilerini t??rl?? maceralar??n i??inde bulan d??rt ??ocuk, bu s??re??te aile olman??n ger??ek anlam??n?? ke??feder."
);
const jenerasyon = new imgDivs(
  "kapakfoto_2.png",
  "Gelecek Jenerasyon",
  "91",
  "2 Saat 12 Dakika",
  true,
  "Gelecek Jenerasyon, gizli bir robot ile arkada??l??k kuran bir k??z??n hikayesini konu ediyor. Mai,yaln??z bir k??zd??r. S??k??c?? bir ya??am?? olan k??????k k??z??n hayat??, ??ok gizli bir robot ile arkada??l??k kurmas?? ile bamba??ka bir hal al??r. Sinsi bir k??t?? kahraman??n planlar??n?? ????rene Mai ve robot, birlikte aksiyon dolu bir maceraya at??l??r. Mai ve robot bu s??re??te zorbalara, k??t?? robotlara ve komplocu ????lg??n bir adama kar???? sava??mak zorunda kal??r."
);
const babyboss = new imgDivs(
  "kapakfoto_babyboss.png",
  "Patron Bebek",
  "91",
  "3 Sezon",
  false,
  "Tim 7 ya????nda bir ??ocuktur ve en b??y??k hayali bir k??pek sahibi olmakt??r. Ancak g??n??n birinde hayallerine b??y??k bir darbe iner. Annesi ve babas?? k??????k bir bebe??i evlat edinmi??tir. Ancak bu bebekte bir gariplik vard??r."
);
const peakyBlinders = new imgDivs(
  "kapakfoto_peakyblinders.png",
  "Peaky Blinders",
  "96",
  "5 Sezon",
  false,
  "Birinci D??nya Sava???????ndan yeni ????km???? ??ngiltere???yi, yasad?????? faaliyet g??steren ??e??itli ??eteler sarm????t??r. Bunlardan biri de soygunculuk ve at yar??????yla para kazanan Peaky Blinders???d??r. Polislere r????vet yedirerek pa??ay?? kurtaran ??ete, bir soygunda yanl????l??k yap??nca, ba??lar??na bela olacak yeni bir m??fetti??in ??ehre gelmesine vesile olurlar."
);
const strangerThings = new imgDivs(
  "kapakfoto_st.png",
  "Stranger Things",
  "94",
  "4 Sezon",
  false,
  `80'li y??llar?? kendine fon yapan Stranger Things, d??nemin korku filmlerine selam ??akmay?? atlamayan bir fantastik gerilim dizisi. Winona Ryder, David Harbour, Cara Buono'yu ba??rollerinde bulu??turan dizi; kaybolan gen?? bir ??ocu??u ve onu bulmaya ??al????an annesini anlat??yor.
  `
);
const Lucifer = new imgDivs(
  "kapakfoto_lucifer.png",
  "Lucifer",
  "97",
  "5 Sezon",
  false,
  "???Cehennem Lordu??? Lucifer Morningstar; Los Angeles Polis Departman?? i??in su??lular?? yakalamaktad??r. Ancak b??y??k bir s??rr?? vard??r: Bu ??ekici adam, asl??nda yery??z??ne d????m???? bir melektir! Neil Gaiman taraf??ndan yarat??lan Lucifer, Sandman isimli serinin yard??mc?? karakterlerinden biriydi ve daha sonra kendi ??izgi roman??na kavu??tu. ??izgi romanlarda, karakter Lux isimli bir bar?? i??letiyor."
);

const arrow = new imgDivs(
  "kapakfoto_arrow.jpg",
  "Arrow",
  "81",
  "8 Sezon",
  false,
  `??ld?? san??ld?????? bir deniz kazas??n??n ard??ndan, uzun s??re bir adada yaln??z ba????na ya??ayan milyarder playboy Oliver Queen, adada ge??irdi??i s??re boyunca ??ok de??i??mi??tir. 5 y??l??n ard??nan bulunan ve evine d??nen Oliver, d??n????t?????? bu yeni Oliver'?? ailesinden ve di??erlerinden saklamaya ??al??????rken, ge??mi??te i??ledi??i g??nahlar??ndan ar??nmak i??in su??lularla m??cadele etmeye karar verir ve kendisine Arrow ki??ili??ini yarat??r..
  `
);
const sihirliejder = new imgDivs(
  "kapakfoto_sihirli.png",
  "Sihirli Ejder",
  "91",
  "2 Saat 34 Dakika",
  true,
  `??????i s??n??f?? bir ailenin ??yesi olan Din, b??y??k hayalleri olan bir ??niversite ????rencisidir. Bir g??n Din'in yolu dilekleri ger??e??e d??n????t??rebilen bir ejderha olan Long ile kesi??ir. ??kisi birlikte Din'in uzun s??redir kay??p olan ??ocukluk arkada???? Lina'y?? bulmak i??in macera dolu bir yolculu??a ????kar. ??angay'??n sokaklar??nda heyecan dolu bir maceraya at??lan ikili, bu s??re??te hayat??n bilmecelerini ????zmeye ??al??????r.
  `
);
const lupin = new imgDivs(
  "kapakfoto_lupin.png",
  "Lupin",
  "91",
  "3 Sezon",
  false,
  `Assane Diop???un hayat??, i??lemedi??i bir su??la itham edilen babas??n??n ??lmesiyle alt??st olur. Aradan ge??en y??llar??n ard??ndan Assane Diop, babas??n??n intikam??n?? almaya karar verir ve bunu yapmak i??in de kahraman?? Ars??ne Lupin???den ilham al??r.
`
);
const olulerordusu = new imgDivs(
  "kapakfoto_olulerordusu.png",
  "??l??ler Ordusu",
  "96",
  "3 Saat 9 Dakika",
  true,
  `Army of the Dead, Las Vegas???taki bir zombi salg??n?? s??ras??nda ya??ananlar?? konu ediyor. Bir adam salg??n s??ras??nda bir grup paral?? askeri bir araya getirir ve b??y??k oynamaya karar verir. Ekip, karantina b??lgesine girmeye cesaret ederek gelmi?? ge??mi?? en b??y??k soygunu ger??ekle??tirmeye ??al??????r.
  `
);
const sungerbob = new imgDivs(
  "kapakfoto_sungerbob.png",
  "S??nger Bob",
  "94",
  "2 Saat 34 Dakika",
  true,
  `Sevilen ??izgi-dizi S??ngerbob Karepantolon'un beyazperde uyarlamas?? olan yap??tta S??ngerbob Karepantolon'un k??y??ya ????k??p ya??ayaca???? hayat??n??n en kahramanca maceras??n?? izleyece??iz. Tehlikeli korsan Burger-Beard ele ge??irdi??i sihirli kitab??n son sayfas??n?? bulup form??l?? tamamlayarak plan??n?? hayata ge??irmeyi istemektedir. Bu durumda Bikini Bottom ??ehri tehlikede olacakt??r. ??ehrin S??ngerBob, Patrick ve ekiplerine denizin d??????nda ihtiyac?? vard??r. ??imdi t??m ekip Burger-Beard'a kar???? harekete ge??mek zorundad??r. ??ehirlerini tekrar kazanabilmek i??in ise kitab?? geri almak durumundad??rlar.
  `
);
const cadilarokulu = new imgDivs(
  "kapakfoto_cadilar.png",
  "Cad??lar Okulu",
  "97",
  "4 Sezon",
  false,
  `Mildred Hubbble, annesi Julie ile s??radan bir hayat ya??amaktad??r; ta ki Maud Spellbody s??p??rgesiyle balkonlar??na ??ak??lana kadar. Ondan sonra hi??bir ??ey ayn?? olmayacakt??r. Maud Mildred'i gen?? cad??lar i??in bir okul olan Cackle'??n Akademisi ile tan????t??r??r. Arkada?? canl??s?? okul m??d??r?? Bayan Cackle'??n ve korkutucu yard??mc??s?? Bayan Hardbroom'un g??zletimi alt??nda Mildred e??itimine ba??lar. Ancak ne kadar ??ok ??abalarsa ??abalas??n, b??y??leri sorunlu olur ve s??rekli kaos yarat??r. Acaba Mildred ger??ekten becerikli bir cad?? olabilecek midir?
  `
);

const himym = new imgDivs(
  "kapakfoto_himym.png",
  "How I Met Your Mother",
  "81",
  "1 Sezon",
  false,
  `2030 y??l??nday??z; Ted Mosby ??ocuklar??na anneleri ile tan????mas??n??n ???uzuuun??? hikayesini anlat??yor ve bir anda 2005 y??l??n??n Amerikas?????na geri d??nerek, be?? s??k?? dostun 20???li ya??lardaki e??lenceli ya??amalar??na konuk oluyoruz.
  Ted, 27 ya????nda Manhattan'l?? bir mimard??r. Hukuk fak??ltesinde okuyan Marshall ise en iyi dostudur ve dokuz y??ld??r beraber oldu??u sevgilisi Lily vard??r. Ekibin son ??yesi Barney Stenson ise nev-i ??ahs??na m??nhas??r, tak??m elbise tutkunu bir kad??n avc??s??d??r. Bir g??n Marshall Ted???e, Lily???ye evlenme teklif edece??ini s??yleyince bek??r kalmak istemeyen Ted???in etekleri tutu??ur. Ama evlili??in de herhangi biriyle olmayaca????na ve hayat??n??n ger??ek a??k??n?? bulaca????na inanmaktad??r. Tam da bu s??rada Robin Scherbatsky ile tan??????nca How I Met Your Mother?????n s??k?? be??lisi tamamlan??r.`
);
const fearless = new imgDivs(
  "kapakfoto_fearless.png",
  "Fearless",
  "91",
  "2 Saat 34 Dakika",
  true,
  `??evrimi??i video oyunlara ??ok merakl?? bir ??ocuk olan Reid, ???Korkusuz ??? lakab??yla zaman??n??n ??o??unu ekran ba????nda ge??irmektedir. Anne-babas??n??n hafta sonunda ??ehir d??????nda olmas??ndan dolay?? rahat??a oyun oynamay?? planl??yordur. Okul projesi i??in arkada???? Melanie de gelecek ve birlikte ??al????acaklard??r. Ancak iki ??ocuk o ak??am s??rpriz bir durumla kar????la??acakt??r.  `
);
const cukur = new imgDivs(
  "kapakfoto_cukur.png",
  "??ukur",
  "91",
  "1 Sezon",
  false,
  `Ko??oval?? ailesinin en k??????k o??lu, g??z?? kara ve isyank??r Yama?? karakterini canland??ran Aras Bulut ??ynemli ile deli dolu ve dik kafal??, ya??am enerjisiyle herkesi kendine hayran b??rakan Sena rol??nde izleyece??imiz Dilan ??i??ek Deniz???in yer ald?????? dizinin y??netmenli??ini Sinan ??zt??rk ??stleniyor.`
);
const atiye = new imgDivs(
  "kapakfoto_atiye.png",
  "Atiye",
  "96",
  "1 Sezon",
  false,
  `??eng??l Boyba??'??n ???D??nyan??n Uyan????????? adl?? kitaptan esinlenerek haz??rlanan dizi, gen?? ve g??zel bir ressam olan Atiye ad??ndaki bir kad??n??n mistik hikayesini konu ediyor. Ailesi ve sevgilisi Ozan ile mutllu bir ya??am?? olan Atiye'nin hayat??, bir g??n d??nyan??n en eski tap??na???? olan G??beklitepe???ye ger??ekle??tirdi??i ziyaretle bamba??ka bir hal al??r. Atiye'nin b??lgede yapt?????? gezi s??rdas??nda, Erhan ad??ndaki bir arkeolog, Atiye ile G??beklitepe aras??nda mistik bir ba??lant?? oldu??una dair bir sembol ke??feder. Bu gizeml olay??n pe??ine d????meye karar veren Atiye, kendisine bamba??ka bir kap?? a??an bu antik tap??nakta ge??mi??ini aramaya ba??lar. Atiye, ge??mi??in kap??lar??n?? aralad??k??a, ge??mi??le gelece??i, ger??ek ile ruhani aras??ndaki her ??eyi sorgulamaya ba??lar.
`
);
const drwho = new imgDivs(
  "kapakfoto_doctorwho.png",
  "Doctor Who",
  "94",
  "13 Sezon",
  false,
  `Bu Doktor bamba??ka bir doktor. ??smi, karakteri, tav??rlar?? her ??eyiyle bir muamma. Rose Tyler ad??nda bir kad??n, kendisine Doktor diye adland??ran gizemli bir yabanc??yla tan??????r ve bundan sonra hayat?? ba??tan sona de??i??ir. K??sa s??re i??erisinde ailesi de dahil b??t??n d??nyan??n tehlike alt??nda oldu??unu ????renir. Yapmas?? gereken kurtulu?? yolunu bulmakt??r..
  `
);
const ask101 = new imgDivs("kapakfoto_ask101.png", "A??k 101", "97", "5 Sezon");

const blackmirror = new imgDivs(
  "kapakfoto_bm.png",
  "Black Mirror",
  "81",
  "1 Sezon",
  false,
  `3 b??l??mden olu??an mini dizinin her bir b??l??m?? bir ba??ka hikayeyi anlat??yor. ??lk b??l??m, sosyal medyan??n ba??a bela olabilece??ini g??sterirken, ikinci b??l??m televizyondaki yar????malar??n birg??n varabilece??i noktaya parmak bas??yor. ??????nc?? b??l??m ise; yak??n bir gelecekte insanlar takt??rd??klar?? haf??za ??ipleri sayesinde t??m hayatlar??n?? depolayabilmektedirler. Hi??bir ??ey unutulmuyor, hi??bir ayr??nt?? atlanm??yordur. Peki ya bu, iyi bir ??ey midir?
  `
);
const trolavcilari = new imgDivs(
  "kapakfoto_trol.png",
  "Trol Avc??lar??",
  "91",
  "2 Saat 34 Dakika",
  true,
  `Arcadia s??radan bir kasaba gibi g??r??nebilir, ancak onu troller, uzayl??lar ve b??y??c??ler dahil olmak ??zere di??er d??nya yarat??klar?? aras??ndaki bir??ok sava?? i??in bir ba??lant?? noktas?? yapan b??y??l?? ve mistik ??izgilerin merkezinde yer al??r. ??imdi, ??e??itli kahramanlar, onlar?? birbirine ba??layan sihri kontrol etmek i??in Arcane Order ile sava??malar?? gereken destans?? bir macerada ekip olu??turacaklar.`
);
const vikings = new imgDivs(
  "kapakfoto_vikinks.jpg",
  "Vikings",
  "91",
  "6 Sezon",
  false,
  `8. y??zy??l ??skandinavyas?????nda ge??en dizi, basit bir ??ift??iyken cesur bir sava??????ya d??n????en Ragnar Lothbrok ve ailesinin ??yk??s??n?? ekranlara ta????yor. Sava?? Tanr??s?? Odin'in soyundan geldi??ine inan??lan Ragnor???un ac??mas??z ve korkusuz adamlar??yla birlikte denizlerle olan imtihan??n?? seyrederken; sava?????? ve t??ccar bir kavim olan Vikingler???in ??ok az i??lenmi?? ilgi ??ekici k??lt??r??ne hep birlikte tan??k oluyoruz.

  `
);
const countdown = new imgDivs(
  "kapakfoto_countdown.png",
  "Count Down",
  "96",
  "2 Saat 45 Dakika",
  true,
  `Countdown, bir uygulamadan hayattaki son g??nlerini ya??ad??????n?? ????renen gen?? bir kad??n??n hikayesini konu ediyor. Gen?? bir hem??ire, insanlar??n en zaman ??lece??ini tahmin eden bir uygulamay?? indirir. Uygulamada, ya??amak i??in sadece ???? g??n??n??n kald??????n?? ????renen gen?? kad??n, bu s??rada gizemli bir siluetin kendisini takip etti??ini fark eder. Gen?? kad??n, zaman?? dolmadan ??nce pe??indekinin ne oldu??unu anlay????, hayat??n?? kurtarman??n yolunu bulmak zorundad??r.
  `
);
const raising = new imgDivs(
  "kapakfoto_bunebe.png",
  "Raising",
  "77",
  "2 Sezon",
  false,
  `Raising Dion, kocas??n??n ??l??m??n??n ard??ndan o??luyla bir ba????na kalan gen?? bir kad??n??n hikayesini konu ediyor. Nicole, e??inin ??l??m??n ard??ndan o??lu Dion ile bir ba????na kalan gen?? bir kad??nd??r. Bir yandan e??inin yoklu??u ile ba??a ????kmaya ??al????an Nicole, bir yandan da o??lunu tek ba????na yeti??tirebilmeye ??al??????r. Bir g??n Nicole, o??lu Dion???un bir tak??m s??per g????lere sahip oldu??unu ke??feder. Nicole, bu s??ra d?????? olay kar????s??nda ne yapaca????n?? bilemez. O??lundaki g????lerin a??????a ????kmas??n??n ona zarar verece??ini d??????nen Nicole, bu g????leri gizlemeye karar verir.
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
  imdb() {
    return this.id != "RANDMmodal"
      ? 6 + Math.round(Math.random() * 3) + `.` + Math.round(Math.random() * 9)
      : 10.0;
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

            <div class='modal-title-div'>  <h3 class="modal-title" id="exampleModalLabel">${
              this.name
            }</h3><span class='imdb'>IMDb: ${this.imdb()} ???</span></div>
              <br><div class="movie-type-div"><div class="movie-type-div-div">
              <p class="eslesme">%${
                this.eslesme
              } e??le??me <span class="time modal-time1">${this.time}</span></p>
          <span class="time modal-time orta_nokta">??<span class="movieType">${
            this.type1
          }</span></span>   
          <span class="time modal-time ms-2  orta_nokta">${
            this.type2 == "" ? "" : "??"
          }<span class=" movieType">${this.type2}</span></span>   
          <span class="time modal-time ms-2  orta_nokta">${
            this.type3 == "" ? "" : "??"
          }<span class="movieType">${this.type3}</span></span>   
          <span class="time modal-time ms-2  orta_nokta">${
            this.type4 == "" ? "" : "??"
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
  "modal_lupin.jpg",
  lupin.name,
  lupin.eslesme,
  lupin.time,
  lupin.aciklama,
  "Dram",
  "Gerilim"
);
const randmModal = new modal(
  "RANDMmodal",
  "modal_randm.jpg",
  "Rick and Morty",
  "100",
  "5 Sezon",
  `??ok zeki olmayan 14 ya????ndaki endi??eli bir ??ocuk olan torunu Morty ile
yeti??kin bir
y??zmede animasyonlu bir alkolik ve dikkatsiz bilim adam?? olan Rick'in sonsuz
maceralar??n?? anlatan bir animasyon dizidir. Rick, karakter olarak tamamen farkl??
biri;
??stelik yapt?????? zaman yolculu??u de??il de boyutlar aras?? yolculuk. Rick ve Morty???nin
olduk??a tuhaf ve tehlikeli yolculuklar??n?? boyutlar aras?? seyahat olarak tan??mlasak
da bu
tan??m biraz yetersiz kalabilir. ??yle ki maceralar bir insan anatomisinin i??inde de
devam
edebiliyor. Onlar??nki s??n??rlar?? kesin olmayan bir yolculuk. Dizinin en b??y??k
ba??ar??lar??ndan biri de ??ok y??nl?? olmas??. Abs??rt mizah?? ne kadar iyi verebiliyorsa,
h??zn??
de o kadar iyi veriyor. Derin felsefi konular ne kadar ba??ar??l?? i??leniyorsa basit
geyik
muhabbetleri de o kadar ba??ar??l?? i??leniyor. Rick and Morty hemen her ya??tan
seyirciyi
b??nyesine katabilecek kapasitede bir ??izgi dizi.`,
  "Bilim Kurgu",
  "Kara Mizah",
  "Animasyon",
  "Muhte??em"
);
const olulerModal = new modal(
  "OLULERmodal",
  "modal_oluler.jpg",
  olulerordusu.name,
  olulerordusu.eslesme,
  olulerordusu.time,
  olulerordusu.aciklama,
  "Fantastik",
  "E??lence"
);
const peakyModal = new modal(
  "PEAKYmodal",
  "modal_peaky.jpg",
  peakyBlinders.name,
  peakyBlinders.eslesme,
  peakyBlinders.time,
  peakyBlinders.aciklama,
  "Dram",
  "Gerilim",
  "Su??"
);
const atiyeModal = new modal(
  "ATIYEmodal",
  "modal_atiye.jpg",
  atiye.name,
  atiye.eslesme,
  atiye.time,
  atiye.aciklama,
  "Bilim Kurgu",
  "Gizem",
  "Psikolojik Gerilim"
);
const strangerModal = new modal(
  "STRANGERmodal",
  "modal_stranger.png",
  strangerThings.name,
  strangerThings.eslesme,
  strangerThings.time,
  strangerThings.aciklama,
  "Do??a ??st??",
  "Gerilim",
  "Dram"
);
const luciferModal = new modal(
  "LUCIFERmodal",
  "modal_lucifer.jpg",
  Lucifer.name,
  Lucifer.eslesme,
  Lucifer.time,
  Lucifer.aciklama,
  "Dedektiflik",
  "Fantastik",
  "Gizem"
);
const babybossModal = new modal(
  "BBmodal",
  "modal_babyboss.jpg",
  babyboss.name,
  babyboss.eslesme,
  babyboss.time,
  babyboss.aciklama,
  "??ocuk",
  "Fantastik",
  "Animasyon"
);
const sihirliModal = new modal(
  "SIHIRLImodal",
  "modal_sihirli.jpg",
  sihirliejder.name,
  sihirliejder.eslesme,
  sihirliejder.time,
  Lucifer.sihirliejder,
  "Animasyon",
  "Macera"
);
const wilboyModal = new modal(
  "WILBOYmodal",
  "modal_wilboy.jpg",
  wilboy.name,
  wilboy.eslesme,
  wilboy.time,
  wilboy.aciklama,
  "Animasyon",
  "Komedi"
);
const jenerasyonModal = new modal(
  "JENERASYONmodal",
  "modal_jenerasyon.jpg",
  jenerasyon.name,
  jenerasyon.eslesme,
  jenerasyon.time,
  jenerasyon.aciklama,
  "??ocuk",
  "Aksiyon",
  "Bilim Kurgu"
);
const sungerModal = new modal(
  "SUNGERmodal",
  "modal_sunger.jpg",
  sungerbob.name,
  sungerbob.eslesme,
  sungerbob.time,
  sungerbob.aciklama,
  "??ocuk",
  "E??lence"
);
const fearlessModal = new modal(
  "FEARLESSmodal",
  "modal_fearless.jpg",
  fearless.name,
  fearless.eslesme,
  fearless.time,
  fearless.aciklama,
  "Aksiyon",
  "D??v????"
);
const himymModal = new modal(
  "HIMYMmodal",
  "modal_himym.jpg",
  himym.name,
  himym.eslesme,
  himym.time,
  himym.aciklama,
  "Aksiyon",
  "D??v????"
);
const drwhoModal = new modal(
  "DRWHOmodal",
  "modal_drwho.jpg",
  drwho.name,
  drwho.eslesme,
  drwho.time,
  drwho.aciklama,
  "Aksiyon",
  "D??v????"
);
const cukurModal = new modal(
  "CUKURmodal",
  "modal_cukur.jpg",
  cukur.name,
  cukur.eslesme,
  cukur.time,
  cukur.aciklama,
  "Aksiyon",
  "D??v????"
);
const cadilarModal = new modal(
  "CADILARmodal",
  "modal_cadilar.jpg",
  cadilarokulu.name,
  fearless.eslesme,
  cadilarokulu.time,
  cadilarokulu.aciklama,
  "Aksiyon",
  "D??v????"
);
const arrowModal = new modal(
  "ARROWmodal",
  "modal_arrow.jpg",
  arrow.name,
  arrow.eslesme,
  arrow.time,
  arrow.aciklama,
  "Aksiyon",
  "D??v????"
);
const ask101Modal = new modal(
  "ASK101modal",
  "modal_ask101.jpg",
  ask101.name,
  ask101.eslesme,
  ask101.time,
  ask101.aciklama,
  "Aksiyon",
  "D??v????"
);
const bbModal = new modal(
  "BMmodal",
  "modal_blackmirror.jpg",
  blackmirror.name,
  blackmirror.eslesme,
  blackmirror.time,
  blackmirror.aciklama,
  "Aksiyon",
  "D??v????"
);
const trolModal = new modal(
  "TROLmodal",
  "modal_trol.jpg",
  trolavcilari.name,
  trolavcilari.eslesme,
  trolavcilari.time,
  trolavcilari.aciklama,
  "Aksiyon",
  "D??v????"
);
const vikingsModal = new modal(
  "VIKINGSmodal",
  "modal_vikings.jpg",
  vikings.name,
  vikings.eslesme,
  vikings.time,
  vikings.aciklama,
  "Aksiyon",
  "D??v????"
);
const countdownModal = new modal(
  "COUNTDOWNmodal",
  "modal_countdown.jpg",
  countdown.name,
  countdown.eslesme,
  countdown.time,
  countdown.aciklama,
  "Aksiyon",
  "D??v????"
);
const raisingModal = new modal(
  "RAISINGmodal",
  "modal_raising.jpg",
  raising.name,
  raising.eslesme,
  raising.time,
  raising.aciklama,
  "Aksiyon",
  "D??v????"
);
const klausModal = new modal(
  "KLAUSmodal",
  "modal_klaus.png",
  klaus.name,
  klaus.eslesme,
  klaus.time,
  klaus.aciklama,
  "Aksiyon",
  "D??v????"
);

document.getElementById("modal_insert_randm").innerHTML = randmModal.render();
document.getElementById("modal_insert_lupin").innerHTML = lupinModal.render();
document.getElementById("modal_insert_olulerordusu").innerHTML =
  olulerModal.render();
document.getElementById("modal_insert_peaky").innerHTML = peakyModal.render();
document.getElementById("modal_insert_atiye").innerHTML = atiyeModal.render();
document.getElementById("modal_insert_stranger").innerHTML =
  strangerModal.render();
document.getElementById("modal_insert_lucifer").innerHTML =
  luciferModal.render();
document.getElementById("modal_insert_babyboss").innerHTML =
  babybossModal.render();
document.getElementById("modal_insert_sihirli").innerHTML =
  sihirliModal.render();
document.getElementById("modal_insert_wilboy").innerHTML = wilboyModal.render();
document.getElementById("modal_insert_jenerasyon").innerHTML =
  jenerasyonModal.render();
document.getElementById("modal_insert_sunger").innerHTML = sungerModal.render();
document.getElementById("modal_insert_fearless").innerHTML =
  fearlessModal.render();
document.getElementById("modal_insert_himym").innerHTML = himymModal.render();
document.getElementById("modal_insert_drwho").innerHTML = drwhoModal.render();
document.getElementById("modal_insert_cukur").innerHTML = cukurModal.render();
document.getElementById("modal_insert_cadilar").innerHTML =
  cadilarModal.render();
document.getElementById("modal_insert_arrow").innerHTML = arrowModal.render();
document.getElementById("modal_insert_ask101").innerHTML = ask101Modal.render();
document.getElementById("modal_insert_bm").innerHTML = bbModal.render();
document.getElementById("modal_insert_trol").innerHTML = trolModal.render();
document.getElementById("modal_insert_vikings").innerHTML =
  vikingsModal.render();
document.getElementById("modal_insert_countdonw").innerHTML =
  countdownModal.render();
document.getElementById("modal_insert_raising").innerHTML =
  raisingModal.render();
document.getElementById("modal_insert_klaus").innerHTML = klausModal.render();
const fnc4 = () => {
  return `${Users.first ? Users.first : ""}${
    Users.first != ''
      ? `<button id='firstUserKaldir' class='kaldirButton btn btn-danger'>KALDIR</button><br>`
      : ""
  }<div>
${Users.second != '' ? Users.second : ""}${
    Users.second != ''
      ? `<button id='secondUserKaldir' class='kaldirButton btn btn-danger'>KALDIR</button><br>`
      : ""
  }</div><div>
${Users.third != '' ? Users.third : ""}${
    Users.third != ''
      ? `<button id='thirdUserKaldir' class='kaldirButton btn btn-danger'>KALDIR</button><br>`
      : ""
  }</div><div>
${Users.fourth != '' ? Users.fourth : ""}${
    Users.fourth != ''
      ? `<button id='fourthUserKaldir' class='kaldirButton btn btn-danger'>KALDIR</button><br>`
      : ""
  }</div><div>
${Users.fifth != '' ? Users.fifth : ""}${
    Users.fifth != ''
      ? `<button id='fifthUserKaldir' class='kaldirButton btn btn-danger'>KALDIR</button><br>`
      : ""
  }</div><div>
${Users.sixth != '' ? Users.sixth : ""}${
    Users.sixth != ''
      ? `<button id='sixthUserKaldir' class='kaldirButton btn btn-danger'>KALDIR</button><br>`
      : ""
  }</div><div>
${Users.seventh != '' ? Users.seventh : ""}${
    Users.seventh != ''
      ? `<button id='seventhUserKaldir' class='kaldirButton btn btn-danger'>KALDIR</button><br>`
      : ""
  }</div><div>
${Users.eighth != '' ? Users.eighth : ""}${
    Users.eighth != ''
      ? `<button id='eighthUserKaldir' class='kaldirButton btn btn-danger'>KALDIR</button><br>`
      : ""
  }</div>`;
};
const profilEkle = document.getElementById("profil-ekle");
const profilKaldir = document.getElementById("profil-kaldir");
const fnc1 = () => {
  return `
  <div class="modal fade" id="KALDIRmodal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
      
      <div class="modal-body">
      <h5 class="modal-title" id="exampleModalLabel">Silmek ??stedi??iniz Profilleri Se??in</h5><br><br>
          <button type="button" class="modal-closer btn btn-close btn-warning" data-bs-dismiss="modal" aria-label="Close"></button>
${fnc4()}
<div class='modal_uyari bg-danger'>
  <p> D??KKAT! <br>
  Bir kullan??c??y?? sildikten sonra kullan??c?? de??i??ikli??i yapamaz, daha fazla kullan??c?? silemezsiniz.</p>
</div>
        </div>
      
        </div>
      </div>
    </div>
  </div>`;
};
profilKaldir.addEventListener("click", () => {
  document.getElementById("modal_insert_profilkaldir").innerHTML = fnc1();
});

document.getElementById("modal_insert_profilkaldir").innerHTML = fnc1();
const fnc3 = () => {
  document.getElementById("firstUserKaldir") ? document.getElementById("firstUserKaldir").addEventListener("click", removeUser) : null;
  document.getElementById("secondUserKaldir") ? document.getElementById("secondUserKaldir").addEventListener("click", removeUser) : null;
  document.getElementById("thirdUserKaldir") ? document.getElementById("thirdUserKaldir").addEventListener("click", removeUser) : null;
  document.getElementById("fourthUserKaldir") ? document.getElementById("fourthUserKaldir").addEventListener("click", removeUser) : null;
  document.getElementById("fifthUserKaldir") ? document.getElementById("fifthUserKaldir").addEventListener("click", removeUser) : null;
  document.getElementById("sixthUserKaldir") ? document.getElementById("sixthUserKaldir").addEventListener("click", removeUser) : null;
  document.getElementById("seventhUserKaldir") ? document.getElementById("seventhUserKaldir").addEventListener("click", removeUser) : null;
  document.getElementById("eighthUserKaldir") ? document.getElementById("eighthUserKaldir").addEventListener("click", removeUser) : null;
};

fnc3();
function removeUser() {
  fnc3();
  if (this.id == "firstUserKaldir") {
   alert('Bu Kullan??c??y?? Kald??ramazs??n??z.')
  }
  if (this.id == "secondUserKaldir") {
    Users.second = "";
    this.style.backgroundColor = 'green'
    console.log(this.parentNode.childNode)
    setTimeout(()=>{
      this.parentNode.innerHTML = ''
      this.remove()
    }
      ,500)
  }
  if (this.id == "thirdUserKaldir") {
    Users.third = "";  this.style.backgroundColor = 'green'
    console.log(this.parentNode.childNode)
    setTimeout(()=>{
      this.parentNode.innerHTML = ''
      this.remove()
    }
      ,500)
  }
  if (this.id == "fourthUserKaldir") {
    Users.fourth = "";  this.style.backgroundColor = 'green'
    console.log(this.parentNode.childNode)
    setTimeout(()=>{
      this.parentNode.innerHTML = ''
      this.remove()
    }
      ,500)
  }
  if (this.id == "fifthUserKaldir") {
    Users.fifth = "";  this.style.backgroundColor = 'green'
    console.log(this.parentNode.childNode)
    setTimeout(()=>{
      this.parentNode.innerHTML = ''
      this.remove()
    }
      ,500)
  }
  if (this.id == "sixthUserKaldir") {
    Users.sixth = "";  this.style.backgroundColor = 'green'
    console.log(this.parentNode.childNode)
    setTimeout(()=>{
      this.parentNode.innerHTML = ''
      this.remove()
    }
      ,500)
  }
  if (this.id == "seventhUserKaldir") {
    Users.seventh = "";  this.style.backgroundColor = 'green'
    console.log(this.parentNode.childNode)
    setTimeout(()=>{
      this.parentNode.innerHTML = ''
      this.remove()
    }
      ,500)
  }
  if (this.id == "eighthUserKaldir") {
    Users.eighth = "";  this.style.backgroundColor = 'green'
    console.log(this.parentNode.childNode)
    setTimeout(()=>{
      this.parentNode.innerHTML = ''
      this.remove()
    }
      ,500)
  }

  usersMainUl.innerHTML = fnc2();
  document.getElementById("modal_insert_profilkaldir").innerHTML = fnc1();

  list = {
    choosen: melih,
    parent: null,
  };
}
const fnc5 = () => {
  return `
  <div class="modal fade" id="EKLEmodal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
      
      <div class="modal-body">
      <h5 class="modal-title" id="exampleModalLabel">Yeni Kullan??c??</h5><br><br>
          <button type="button" class="modal-closer btn btn-close btn-warning" data-bs-dismiss="modal" aria-label="Close"></button>
          <form id='newUserForm' action='#'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Kullan??c?? Ad??</label>
    <input  autocomplete="off" type="email" class="form-control"   id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1"class="form-label">??ifre</label>
    <input type="password" id="newUser_password" class="form-control"><br><label for="imgSelect" class="form-label">Profil Resmi</label>
<div id='imgSelect'>
    <input type="radio" id="radios1" name="radio">
    <label for="radios1"><img src="./images/user-pp1.png" alt=""></label>

    <input type="radio" id="radios2" name="radio">
    <label for="radios2"><img src="./images/user-pp2.png" alt=""></label>

    <input type="radio" id="radios3" name="radio">
    <label for="radios3"><img src="./images/user-pp3.png" alt=""></label>

    <input type="radio" id="radios4" name="radio">
    <label for="radios4"><img src="./images/user-pp4.png" alt=""></label>

    <input type="radio" id="radios5" name="radio">
    <label for="radios5"><img src="./images/user-pp5.png" alt=""></label>

    <input type="radio" id="radios6" name="radio">
    <label for="radios6"><img src="./images/user-pp6.png" alt=""></label>

    <input type="radio" id="radios7" name="radio">
    <label for="radios7"><img src="./images/user-pp7.png" alt=""></label>

    <input type="radio" id="radios8" name="radio">
    <label for="radios8"><img src="./images/user-pp8.png" alt=""></label>

</div>
  </div>
  <button id='yenikullanici_btn' type="submit" class="btn mt-3 btn-primary" data-bs-dismiss="modal">Save changes</button>
</form>
        </div>
      
        </div>
      </div>
    </div>
  </div>`;
};
const uuser = {};
document.getElementById("modal_insert_profilekle").innerHTML = fnc5();
// profilEkle.addEventListener('click',()=>{
//   document.getElementById("modal_insert_profilekle").innerHTML = fnc5();

// })
document.getElementById("yenikullanici_btn").addEventListener("click", addUser);
function addUser(e) {
  e.preventDefault();
  uuser.userName = document.getElementById("exampleInputEmail1").value;
  uuser.value1 = document.getElementById("radios1");
  uuser.value2 = document.getElementById("radios2");
  uuser.value3 = document.getElementById("radios3");
  uuser.value4 = document.getElementById("radios4");
  uuser.value5 = document.getElementById("radios5");
  uuser.value6 = document.getElementById("radios6");
  uuser.value7 = document.getElementById("radios7");
  uuser.value8 = document.getElementById("radios8");
  if (uuser.value1.checked){
    uuser.imgLink = 'user-pp1'
  } else  if (uuser.value2.checked){
    uuser.imgLink = 'user-pp2'
  }else  if (uuser.value3.checked){
    uuser.imgLink = 'user-pp3'
  }else  if (uuser.value4.checked){
    uuser.imgLink = 'user-pp4'
  }else  if (uuser.value5.checked){
    uuser.imgLink = 'user-pp5'
  }else  if (uuser.value6.checked){
    uuser.imgLink = 'user-pp6'
  }else  if (uuser.value7.checked){
    uuser.imgLink = 'user-pp7'
  }else  if (uuser.value8.checked){
    uuser.imgLink = 'user-pp8'
  }
  if (Users.sixth == '') {
    Users.sixth = `<li class="users_li"><span class='users_lispan' id="">
  <img class="ul_images" src="./images/${uuser.imgLink}.png" alt="">
   <p class="users">${uuser.userName}<i id="downsign" class="fas fa-sort-down"></i></p>
  </span> </li>`;
  } else if (Users.seventh == '') {
    Users.seventh = `<li class="users_li"><span class='users_lispan' id="">
  <img class="ul_images" src="./images/${uuser.imgLink}.png" alt="">
   <p class="users">${uuser.userName}<i id="downsign" class="fas fa-sort-down"></i></p>
  </span> </li>`;
  } else if (Users.eighth == '') {
    Users.eighth = `<li class="users_li"><span class='users_lispan' id="">
  <img class="ul_images" src="./images/${uuser.imgLink}.png" alt="">
   <p class="users">${uuser.userName}<i id="downsign" class="fas fa-sort-down"></i></p>
  </span> </li>`;
  } else if (Users.fifth == '') {
    Users.fifth = `<li class="users_li"><span class='users_lispan' id="">
  <img class="ul_images" src="./images/${uuser.imgLink}.png" alt="">
   <p class="users">${uuser.userName}<i id="downsign" class="fas fa-sort-down"></i></p>
  </span> </li>`;
  } else if (Users.fourth == '') {
    Users.fourth = `<li class="users_li"><span class='users_lispan' id="">
  <img class="ul_images" src="./images/${uuser.imgLink}.png" alt="">
   <p class="users">${uuser.userName}<i id="downsign" class="fas fa-sort-down"></i></p>
  </span> </li>`;
  } else if (Users.third == '') {
    Users.third = `<li class="users_li"><span class='users_lispan' id="">
  <img class="ul_images" src="./images/${uuser.imgLink}.png" alt="">
   <p class="users">${uuser.userName}<i id="downsign" class="fas fa-sort-down"></i></p>
  </span> </li>`;
  } else if (Users.second == '') {
    Users.second = `<li class="users_li"><span class='users_lispan' id="">
  <img class="ul_images" src="./images/${uuser.imgLink}.png" alt="">
   <p class="users">${uuser.userName}<i id="downsign" class="fas fa-sort-down"></i></p>
  </span> </li>`;
  }else{
    alert('Daha Fazla Kullan??c?? Ekleyemezsiniz')
  }
  usersMainUl.innerHTML = fnc2();
  document.getElementById("modal_insert_profilkaldir").innerHTML = fnc1();
  document.getElementById("newUser_password").value = '';
  document.getElementById("exampleInputEmail1").value = '';}