// DATA PERUSAHAAN
var namaPerusahaan = "Bintang Muda Indonusa";
var nibPerusahaan = "2102240027329";
var dataAlamat = "Jln. Ahmad Yani No. 52, Kel. Sario Tumpaan, Sario, Manado, Sulawesi Utara 95114";
var dataLinkAlamat = "https://maps.app.goo.gl/1zHAKgwwkEKp8dXD6";
var dataTelepon = "82292220994";
var dataEmail = "bintangmudaindonusa@gmail.com";
var dataFacebook = "r.pilohima";
var dataInstagram = "";
var dataTiktok = "";
var dataYoutube = "";
var versiApp = "1.0.0";
var versiWeb = "Developer"; // Developer / Online

// NAVBAR
// NAV TOP
let navTop = document.querySelector(".navTop");
let navBottom = document.querySelector(".navBottom");
let footer = document.querySelector("footer");

function renderNavbar() {
  navTop.innerHTML = `
    <div class="container">
      <div class="collapse navbar-collapse navMenu justify-content-between">
          <div class="d-flex justify-content-end justify-content-lg-start pt-1 pt-lg-0">
              <div class="dropdown">
                  <button class="btn dropdown-toggle btn-dark btn-sm" type="button" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                      <img src="assets/img/flag-id.svg" alt="Indonesia" class="btn-image rounded">
                      <span>Indonesia</span>
                  </button>
                  <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">English</a>
                  </div>
              </div>
          </div>
          <div class="py-1 d-flex align-items-center justify-content-end">
              <ul class="navbar-nav d-flex flex-row">
                  <li class="nav-item">
                      <a href="#" class="text-small nav-link px-2 tanggalHariIni">Tanggal</a>
                  </li>
                  <li class="nav-item">
                      <a href="#" class="text-small nav-link px-2">Versi
                        <span class="d-none d-sm-inline-block badge badge-success versiAplikasi"></span>
                      </a>
                  </li>
              </ul>
              <a href="sign-in.html" class="btn btn-primary btn-sm d-none">Masuk</a>
          </div>
      </div>
  </div>
  `;

  navBottom.innerHTML = `<div class="container">
                          <a class="h3 m-0 text-primary" href="/"><img src="assets/img/logo4.png" width="50px" alt="Logo" class="rounded-circle"><strong>${namaPerusahaan}</strong></a>
                          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse justify-content-end navMenu">
                            <ul class="navbar-nav" id="navMenu">
                              <li class="nav-item">
                                <a class="nav-link h5" href="about.html">Tentang Kami</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link h5" href="contact.html">Kontak</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link h5" href="blog.html">Blog</a>
                              </li>
                              <li class="dropdown">
                                  <a class="nav-link h5 dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="components-dropdown">Contoh 1</a>
                                  <div class="dropdown-menu dropdown-menu-wide p-0 o-hidden dropdown-menu-right" aria-labelledby="components-dropdown">
                                    <div class="list-group list-group-flush">
                                      <a href="coming-soon.html" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
                                        <div class="d-flex align-items-center">
                                          <div>
                                            <span class="h6 d-block mb-0">Coming Soon</span>
                                          </div>
                                        </div>
                                        <i class="material-icons">keyboard_arrow_right</i>
                                      </a>
                                      <a href="sign-up.html" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
                                        <div class="d-flex align-items-center">
                                          <div>
                                            <span class="h6 d-block mb-0">Sign Up</span>
                                          </div>
                                        </div>
                                        <i class="material-icons">keyboard_arrow_right</i>
                                      </a>
                                      <a href="sign-in.html" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
                                        <div class="d-flex align-items-center">
                                          <div>
                                            <span class="h6 d-block mb-0">Sign In</span>
                                          </div>
                                        </div>
                                        <i class="material-icons">keyboard_arrow_right</i>
                                      </a>
                                          <a href="recover.html"
                                              class="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
                                              <div class="d-flex align-items-center">
                                                  <div>
                                                      <span class="h6 d-block mb-0">Recover Account</span>
                                                  </div>
                                              </div>
                                              <i class="material-icons">keyboard_arrow_right</i>
                                          </a>
                                          <a href="services1.html"
                                              class="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
                                              <div class="d-flex align-items-center">
                                                  <div>
                                                      <span class="h6 d-block mb-0">Services 1</span>
                                                  </div>
                                              </div>
                                              <i class="material-icons">keyboard_arrow_right</i>
                                          </a>
                                          <a href="services2.html"
                                              class="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
                                              <div class="d-flex align-items-center">
                                                  <div>
                                                      <span class="h6 d-block mb-0">Services 2</span>
                                                  </div>
                                              </div>
                                              <i class="material-icons">keyboard_arrow_right</i>
                                          </a>
                                      </div>
                                  </div>
                              </li>
                  <li class="dropdown">
                      <a class="nav-link h5 dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false" id="components-dropdown">Contoh 2</a>
                      <div class="dropdown-menu dropdown-menu-wide p-0 o-hidden dropdown-menu-right"
                          aria-labelledby="components-dropdown">
                          <div class="list-group list-group-flush">
                              <a href="pricing.html"
                                  class="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
                                  <div class="d-flex align-items-center">
                                      <div>
                                          <span class="h6 d-block mb-0">Pricing</span>
                                      </div>
                                  </div>
                                  <i class="material-icons">keyboard_arrow_right</i>
                              </a>
                              <a href="maintenance.html"
                                  class="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
                                  <div class="d-flex align-items-center">
                                      <div>
                                          <span class="h6 d-block mb-0">Maintenance</span>
                                      </div>
                                  </div>
                                  <i class="material-icons">keyboard_arrow_right</i>
                              </a>
                              <a href="error404.html"
                                  class="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
                                  <div class="d-flex align-items-center">
                                      <div>
                                          <span class="h6 d-block mb-0">Error 404</span>
                                      </div>
                                  </div>
                                  <i class="material-icons">keyboard_arrow_right</i>
                              </a>
                              <a href="insight-components.html"
                                  class="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
                                  <div class="d-flex align-items-center">
                                      <div>
                                          <span class="h6 d-block mb-0">Insight Components</span>
                                      </div>
                                  </div>
                                  <i class="material-icons">keyboard_arrow_right</i>
                              </a>
                              <a href="bootstrap-components.html"
                                  class="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
                                  <div class="d-flex align-items-center">
                                      <div>
                                          <span class="h6 d-block mb-0">Bootstrap Components</span>
                                      </div>
                                  </div>
                                  <i class="material-icons">keyboard_arrow_right</i>
                              </a>
                              <a href="block-header.html"
                                  class="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
                                  <div class="d-flex align-items-center">
                                      <div>
                                          <span class="h6 d-block mb-0">Block Header</span>
                                      </div>
                                  </div>
                                  <i class="material-icons">keyboard_arrow_right</i>
                              </a>
                          </div>
                      </div>
                  </li>
                </ul>
            </div>
        </div>
  `;
}

function renderFooter() {
  footer.innerHTML = `
    <div class="container">
            <div class="row">
                <div class="col-6 col-md-3 mb-md-0">
                    <img src="assets/img/logo.png" alt="Logo" width="150px" class="mb-2">
                    <ul class="list-unstyled" id="footerMenu">
                        <li class="py-0 py-md-1"><a href="about.html" class="text-white">Tentang Kami</a></li>
                        <li class="py-0 py-md-1"><a href="#" class="text-white">Team Kami</a></li>
                        <li class="py-0 py-md-1"><a href="#" class="text-white">Karir</a></li>
                        <li class="py-0 py-md-1"><a href="#" class="text-white">Berita</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md-3 mb-md-0">
                    <h5 class="text-white"><strong>PRODUK &amp; LAYANAN</strong></h5>
                    <ul class="list-unstyled">
                        <li class="py-0 py-md-1"><a href="services.html" class="text-white">Dokumen Sipil</a></li>
                        <li class="py-0 py-md-1"><a href="services.html" class="text-white">Wajib Pajak</a></li>
                        <li class="py-0 py-md-1"><a href="services.html" class="text-white">Keuangan</a></li>
                    </ul>
                </div>
                <div class="col-12 col-md-3 mb-md-0">
                    <h5 class="text-white"><strong>BANTUAN &amp; DUKUNGAN</strong></h5>
                    <ul class="list-unstyled">
                        <li class="py-0 py-md-1"><a href="#" target="_blank" class="text-white linkWhatsapp">Hubungi Kami</a></li>
                        <li class="py-0 py-md-1"><a href="#" target="_blank" class="text-white linkAlamat">Lokasi Kantor</a></li>
                        <li class="py-0 py-md-1"><a href="#" class="text-white">Informasi Penting</a></li>
                        <li class="py-0 py-md-1"><a href="#" class="text-white">Forum Tanya Jawab</a></li>
                    </ul>
                </div>
                <div class="col-12 col-md-3 mb-md-0">
                    <h5 class="text-white"><strong>SOSIAL MEDIA</strong></h5>
                    <ul class="list-unstyled">
                        <li class="py-0 py-md-1"><a href="https://wa.me/62${dataTelepon}" target="_blank" class="text-white"><i class="bi bi-whatsapp mr-1"></i> WhatsApp</a></li>
                        <li class="py-0 py-md-1"><a href="https://facebook.com/${dataFacebook}" target="_blank" class="text-white"><i class="bi bi-facebook mr-1"></i> Facebook</a></li>
                        <li class="py-0 py-md-1"><a href="https://instagram.com/${dataInstagram}" target="_blank" class="text-white"><i class="bi bi-instagram mr-1"></i> Instagram</a></li>
                        <li class="py-0 py-md-1"><a href="https://tiktok.com/${dataTiktok}" target="_blank" class="text-white"><i class="bi bi-tiktok mr-1"></i> Tiktok</a></li>
                        <li class="py-0 py-md-1"><a href="https://youtube.com/${dataYoutube}" target="_blank" class="text-white"><i class="bi bi-youtube mr-1"></i> Youtube</a></li>
                    </ul>
                </div>
            </div>
            <p class="text-small text-white m-0">
              <span class="opacity-50">
                <i class="bi bi-c-circle"></i>
                <span class="spanTahun"></span>
              </span>
              <strong class="text-small text-white">PT. 
                <span class="text-uppercase spanNama"></span>
              </strong>
            </p>
            <p class="text-small text-white m-0"><i class="bi bi-geo-alt"></i> ${dataAlamat}</p>
        </div>
  `;
}

function renderMenu(){
  const navMenu = document.querySelector('#navMenu');
  const footerMenu = document.querySelector('#footerMenu');
  let isiNavMenu = '';
  let isiFooterMenu = '';

  const dataMenu = [
    {
      judul: "Produk & Layanan",
      link: "services.html",
    },
    {
      judul: "Tentang Kami",
      link: "about.html",
    },
    {
      judul: "Kontak",
      link: "contact.html",
    },
    {
      judul: "Berita",
      link: "blog.html",
    },
  ];

  dataMenu.forEach((mn) => {
    if ("/" + mn.link == window.location.pathname) {
      isiNavMenu += `<li class="nav-item"><a class="nav-link active text-primary h5" href="${mn.link}"><strong><u>${mn.judul}</u></strong></a></li>`;
    } else {
      isiNavMenu += `<li class="nav-item"><a class="nav-link h5" href="${mn.link}">${mn.judul}</a></li>`;
    }
    isiFooterMenu += `<li class="py-0 py-md-1"><a href="${mn.link}" class="text-white">${mn.judul}</a></li>`;
  });

  navMenu.innerHTML = isiNavMenu;
  footerMenu.innerHTML = isiFooterMenu;
}

renderNavbar();
renderFooter();
renderMenu();

// NAMA & NIB DINAMIS
let spanNama = document.querySelectorAll(".spanNama");
let spanNib = document.querySelectorAll(".spanNib");
let spanTelepon = document.querySelectorAll(".spanTelepon");
let linkWhatsapp = document.querySelectorAll(".linkWhatsapp");
let spanEmail = document.querySelectorAll(".spanEmail");
let spanAlamat = document.querySelectorAll(".spanAlamat");
let linkAlamat = document.querySelectorAll(".linkAlamat");
// Nama
spanNama.forEach((spnm) => {
  spnm.innerText = namaPerusahaan;
});
// NIB
spanNib.forEach((spni) => {
  spni.innerText = nibPerusahaan;
});
// Telepon
spanTelepon.forEach((sptl) => {
  sptl.innerText = `+62${dataTelepon}`;
});
// Telepon
linkWhatsapp.forEach((lkwa) => {
  lkwa.setAttribute('href', `https://wa.me/62${dataTelepon}`);
});
// Email
spanEmail.forEach((spem) => {
  spem.innerText = dataEmail;
});
// Alamat
spanAlamat.forEach((spal) => {
  spal.innerText = dataAlamat;
});
linkAlamat.forEach((lkal) => {
  lkal.setAttribute("href", dataLinkAlamat);
});



// WAKTU
let tanggalHariIni = document.querySelectorAll(".tanggalHariIni");
let versiAplikasi = document.querySelectorAll(".versiAplikasi");
let spanTahun = document.querySelectorAll(".spanTahun");
// Versi
versiAplikasi.forEach((vApp) => {
  if (versiWeb == "Developer") {
    vApp.innerHTML = `${versiApp} (Beta)`;
  } else {
    vApp.innerHTML = versiApp;
  }
});

// Judul web
document.title = namaPerusahaan;
setInterval(() => {
  let waktu = new Date();
  let hr = waktu.getDay();
  const namaHari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu",
  ];
  let hari = namaHari[hr];
  let tgl = waktu.getDate() < 10 ? "0" + waktu.getDate() : waktu.getDate();
  let bln = waktu.getMonth();
  const namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  let bulan = namaBulan[bln];
  let thn = waktu.getFullYear();
  let jam = waktu.getHours() < 10 ? "0" + waktu.getHours() : waktu.getHours();
  let menit =
    waktu.getMinutes() < 10 ? "0" + waktu.getMinutes() : waktu.getMinutes();
  let detik =
    waktu.getSeconds() < 10 ? "0" + waktu.getSeconds() : waktu.getSeconds();
  tanggalHariIni.forEach((tglHr) => {
    tglHr.innerHTML = `${hari}, ${tgl} ${bulan} ${thn} - ${jam} : ${menit} : ${detik} WITA`;
  });
  spanTahun.forEach((spth) => {
    spth.innerHTML = thn;
  });
}, 1);
