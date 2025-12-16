window.addEventListener("load", function() {
    document.body.classList.add("loaded");
  });

let currentLang = localStorage.getItem("lang") || "en";

const translations = {
  en: {
    // navbar

    home:"Home",
    about:"About Us",
    works:"Our Works",
    contact:"Contact Us",

    // index page

    welcome:"Welcome to E-nerkom",
    welcometext:"Your one-stop solution for all your needs.",
    client:"Our <br> Client",
    partner:"Our <br> Partner",
    do:"What We Do?",
    what:"What we can help & provide to help your company",
    a1:"<b> Telekomunikasi & IT </b><br> As a provider of Products & Services that include Telecommunication Devices and Telecommunication Services.  <br>  <b>Sistem Integrator </b><br>  Planning, designing, and analyzing website or mobile-based software systems.<br> Ect.",
    
    // contact page

    work:"Let's work together",
    c1:"Any question or remark? just write us a message",
    send:"Send Message",
    c2:"If you want to discuss anything related to Software, Hardware, Electrical, Data Center, System Integrator or Telecommunication and IT, you are in the right place.",
    name:"Full Name",
    email:"Email Address",
    message:"Message",
    phone:"Phone Number",

    // about page
    visi:"Vision",
    misi:"Mission",
    a2:"To become a professional company, with high commitment and integrity, trusted as a provider of technology-based multimedia information application solutions and global-scale data security, thus providing optimal benefits for companies and the public.",
    a3:"Providing the best quality, reliable service, and precise and fast implementation, Providing a professional team, Running Partnerships with Companies/Individuals in fulfilling the needs of Goods and Services by prioritizing Quality, Cost and Delivery (QCD) in the ICT (Information Communication Technology) Sector in Indonesia.",
    ta1:"Our Specialities",
    s1:"<b>Telecommunication Dan IT</b> <br> As a provider of products and services that include telecommunications equipment and telecommunications services.",
    s2:"<b> Sistem Integrator </b> <br> Planning, design, and analysis of integrated software and hardware systems.",
    s3:"<b> Data Center </b> <br> Ensure the security of your digital assets from the risk of data loss with a robust data center solution.",
    s4:"<b> Hardware </b> <br> Providing enterprise-class hardware to ensure maximum performance, high data processing speed and long-term reliability for all digital services.",
    s5:"<b> Electrical </b> <br> Keeping electrical systems and equipment safe, reliable and efficient through regular inspection, testing, repair and cleaning, aims to prevent fatal damage.",
    s6:"<b> Software </b> <br> provides information technology-based software solutions designed to improve business efficiency, security, and productivity. Combining innovation, high performance, and ease of use, our software meets the needs of a wide range of industry sectors.",
    why:"Why Choose Us?",
    why1:"Building solid and high-integrity partnerships, by providing the right solutions to complete work and thus increasing productivity with the best strategies.",
    git:"Get In Touch",

    // card sec
     sf:"Our company provides information technology-based software solutions designed to improve business efficiency, security, and productivity. Combining  innovation, high performance, and ease of use, our software meets the needs of a wide range of industry sectors.",
     dcm:"Data center maintenance infrastructure encompasses all systems, devices, and procedures designed to maintain the availability, reliability, and security of data center operations. The goal is to ensure that all IT  services and systems stored or operated within the data center operate optimally  and without interruption.",
     hard:"IT hardware is the physical component of an information technology system that serves as the primary foundation for running, storing, processing, and managing data and digital services. This hardware works alongside software to  support all company operational activities, including user, server, and network infrastructure.",
     ele:"Electrical systems in IT are fundamental components that provide and maintain reliable power supply for all information technology devices, including servers, networking devices, data storage systems, and other supporting facilities. Without a stable and protected electrical system, IT operations are highly vulnerable to disruptions, hardware failure , and even data loss.",

    //  software page
    sf1:"High security and reliability",
    sf2:"Customizable and scalable",
    sf3:"Improves efficiency and productivity",

    ow:"Our Works",
    key:"Key Features",
    isf1:"<b>New Software Project</b> <br> Made new a app project to help improve business efficiency, security, and productivity. Combining innovation, high performance",
    isf2:"<b>Add New Features</b><br> We can provide a new feature to yours software project",
    isf3:"<b>Maintenance</b><br> Help you to maintenance yours software",
    

    // hardware page
    hd1:"<b>New HardWare Project</b> <br> Made new a app project to help improve business efficiency, security, and productivity. Combining innovation, high performance",
    hd2:"<b>Add New Features</b> <br> We can provide a new feature to yours Hardware project</p>",
    hd3:"<b>Maintenance</b> <br> Maintenance infrastructure encompasses all systems, devices, and procedures designed to maintain the availability, reliability, and security of data center operations.",

    // electrical page
    ele1:"<b>New electrical Project</b> <br> A new electrical system designed to help improve business efficiency, safety and productivity.",
    ele2:"<b>Add New Electrial System</b> <br> We can provide a new feature to your electrical system designed.",
    ele3:"<b>Maintenance</b> <br> Maintenance electrical infrastructure encompasses all systems, devices, and procedures designed to maintain the availability, reliability, and security of data center operations.",

    // data page
    dc1:"<b>New Data Center Project</b> <br> Made new a app data center to help improve business efficiency, security, and productivity. Combining innovation, high performance",
    dc2:"<b>Add New Features</b> <br> We can provide a new feature to yours data center project",
    dc3:"<b>Maintenance</b> <br> Maintenance infrastructure encompasses all systems, devices, and procedures designed to maintain the availability, reliability, and security of  data center operations.",
    

    ctc:"Contact our team to learn how we can help your business grow.",
    int:"Interested in our services?",



    // footer

    i1:"To become a professional and leading company providing goods and services in Indonesia.",
    i2:"© Copyright 2025. Design by Pt. E-nerkom",
    
  },

  
  id: {
    // navbar

    home:"Beranda",
    about:"Tentang Kami",
    works:"Project",
    contact:"Kontak Kami",  

    // index page

    welcome:"Selamat Datang Di E-nerkom",
    welcometext:"Solusi lengkap untuk semua kebutuhan Anda.",
    client:"klient <br> Kami",
    partner:"Mitra <br> Kami",
    do:"Apa Yang Kami Lakukan?",
    what:"Apa yang dapat kami bantu & sediakan untuk membantu perusahaan Anda",
    a1:"<b> Telekomunikasi & IT </b><br> Sebagai penyedia Produk & Jasa Pelayanan yang mencakup Perangkat Telekomunikasi dan Jasa Telekomunikasi.  <br>  <b>Sistem Integrator </b><br>  Perencanaan, perancangan, dan analisa sistem perangkat lunak berbasis Website atau Mobile.<br> Dll.",
    
    // contact page

    work:"Ayo bekerja sama",
    c1:"Ada pertanyaan atau komentar? Tulis pesan kepada kami.",
    send:"Kirimkan Pesan",
    c2:"Jika Anda ingin mendiskusikan apa pun yang terkait dengan Software, Hardware, Electrical,Data Center,Sistem Integrator atau Telekomunikasi Dan IT, Anda berada di tempat yang tepat.",
    name:"Nama Lengkap",
    email:"Alamat Email",
    message:"Pesan",
    phone:"Nomor Telepon",

    // about page
    visi:"Visi",
    misi:"Misi",
    a2:"Menjadi perusahaan yang profesional, memiliki komitmen dan integritas tinggi yang terpercaya sebagai penyedia solusi aplikasi informasi multimedia berbasis teknologi serta keamanan data berskala global sehingga memberikan manfaat yang optimal untuk perusahaan maupun umum.",
    a3:"Memberikan kualitas terbaik, pelayanan yang handal, dan implementasi yang tepat dan cepat, Menyediakan tim yang profesional, Menjalankan Kemitraan dengan Perusahaan/Perorangan dalam memenuhi kebutuhan Barang dan Jasa dengan mengutamakan Quality, Cost dan Delivery (QCD) dalam Bidang ICT (Information Communication Technology) di Indonesia.",
    ta1:"Spesialisasi Kami",
    s1:"<b>Telekomunikasi Dan IT</b> <br> Sebagai penyedia produk dan jasa pelayanan yang mencakup perangkat telekomunikasi dan jasa telekomunikasi.",
    s2:"<b> Sistem Integrator </b> <br> Perencanaan, perancangan, dan analisa penggabungan sistem perangkat lunak dan perangkat keras.",
    s3:"<b> Data Center </b> <br> Memastikan keamanan aset digital anda dari resiko kehilangan data dengan solusi data center yang kokoh.",
    s4:"<b> Hardware </b> <br> Menyediakan perangkat keras berkelas enterprise untuk memastikan kinerja maksimal, kecepatan pemerosesan data tinggi dan keandalan jangka panjang untuk semua layanan digital.",
    s5:"<b> Electrical </b> <br> Menjaga sistem dan peralatan listrik tetap aman, andal, dan efisien melalui inspeksi, pengujian, perbaikan, dan pembersihan rutin, bertujuan mencegah kerusakan fatal.",
    s6:"<b> Software </b> <br> menyediakan solusi perangkat lunak berbasis teknologi informasi yang dirancang untuk meningkatkan efisiensi, keamanan, dan produktivitas bisnis. Menggabungkan inovasi, kinerja tinggi, dan kemudahan penggunaan, perangkat lunak kami memenuhi kebutuhan berbagai sektor industri.",
    why:"Kenapa Kami?",
    why1:"Membangun kemitraan yang solid dan berintegritas tinggi, dengan memberikan solusi yang tepat dalam menyelesaikan pekerjaan dan sehingga dapat meningkatkan produktivitas dengan strategi terbaik.",
    git:"Hubungi Kami",

    // card sec
     sf:"Perusahaan kami menyediakan solusi perangkat lunak berbasis teknologi informasi yang dirancang untuk meningkatkan efisiensi, keamanan, dan produktivitas bisnis. Dengan menggabungkan inovasi, kinerja tinggi, dan kemudahan penggunaan, perangkat lunak kami memenuhi kebutuhan berbagai sektor industri.",
     dcm:"Infrastruktur pemeliharaan pusat data mencakup semua sistem, perangkat, dan prosedur yang dirancang untuk menjaga ketersediaan, keandalan, dan keamanan operasional pusat data. Tujuannya adalah untuk memastikan bahwa semua layanan dan sistem TI yang disimpan atau dioperasikan di dalam pusat data beroperasi secara optimal dan tanpa gangguan.",
     hard:"Perangkat keras TI adalah komponen fisik dari sistem teknologi informasi yang berfungsi sebagai fondasi utama untuk menjalankan, menyimpan, memproses, dan mengelola data serta layanan digital. Perangkat keras ini bekerja sama dengan perangkat lunak untuk mendukung seluruh aktivitas operasional perusahaan, termasuk infrastruktur pengguna, server, dan jaringan.",
     ele:"Sistem kelistrikan dalam TI merupakan komponen fundamental yang menyediakan dan menjaga keandalan pasokan daya untuk semua perangkat teknologi informasi, termasuk server, perangkat jaringan, sistem penyimpanan data, dan fasilitas pendukung lainnya. Tanpa sistem kelistrikan yang stabil dan terlindungi, operasional TI sangat rentan terhadap gangguan, kegagalan perangkat keras, dan bahkan kehilangan data.",

     //  software page
    sf1:"Keamanan dan keandalan tinggi",
    sf2:"Dapat dikustomisasi dan diskalakan",
    sf3:"Meningkatkan efisiensi dan produktivitas",

    ow:"Pekerjaan Kami",
    key:"Fitur Utama",
    isf1:"<b> Software Project Baru</b> <br>Membuat proyek aplikasi baru untuk membantu meningkatkan efisiensi, keamanan, dan produktivitas bisnis. Menggabungkan inovasi dan kinerja tinggi.",
    isf2:"<b> Menambah fitur Baru</b><br>Kami dapat menyediakan fitur baru untuk proyek perangkat lunak Anda.",
    isf3:"<b> Pemeliharaan</b><br>Membantu Anda memelihara perangkat lunak Anda",
    
    // hardware page
    hd1:"<b>Proyek Perangkat Keras Baru</b> <br> Membuat proyek aplikasi baru untuk membantu meningkatkan efisiensi, keamanan, dan produktivitas bisnis. Menggabungkan inovasi dan kinerja tinggi.",
    hd2:"<b>Tambahkan Fitur Baru</b> <br> Kami dapat menyediakan fitur baru untuk proyek perangkat keras Anda.",
    hd3:"<b>Pemeliharaan</b> <br>Infrastruktur pemeliharaan mencakup semua sistem, perangkat, dan prosedur yang dirancang untuk menjaga ketersediaan, keandalan, dan keamanan operasional pusat data.",

    // electrical page
    ele1:"<b>Proyek kelistrikan baru</b> <br> Sistem kelistrikan baru yang dirancang untuk membantu meningkatkan efisiensi, keselamatan, dan produktivitas bisnis. Sistem ini menggabungkan inovasi dan kinerja tinggi.",
    ele2:"<b>Tambahkan sistem kelistrikan baru</b> <br> Kami dapat menyediakan fitur baru untuk sistem kelistrikan Anda yang dirancang.",
    ele3:"<b>Pemeliharaan</b> <br>Pemeliharaan infrastruktur listrik mencakup semua sistem, perangkat, dan prosedur yang dirancang untuk menjaga ketersediaan, keandalan, dan keamanan operasional pusat data.",
 
     // data page
    dc1:"<b>Proyek Pusat Data Baru</b> <br>Menciptakan pusat data aplikasi baru untuk membantu meningkatkan efisiensi, keamanan, dan produktivitas bisnis. Menggabungkan inovasi dan kinerja tinggi.",
    dc2:"<b>Tambahkan Fitur Baru</b> <br> Kami dapat menyediakan fitur baru untuk proyek pusat data Anda.",
    dc3:"<b>Pemeliharaan</b> <br> Infrastruktur pemeliharaan mencakup semua sistem, perangkat, dan prosedur yang dirancang untuk menjaga ketersediaan, keandalan, dan keamanan operasional pusat data.",

    

    ctc:"Hubungi tim kami untuk mempelajari bagaimana kami dapat membantu bisnis Anda berkembang..",
    int:"Tertarik dengan layanan kami??",


    // footer

    i1:"Menjadi perusahaan penyedia barang dan jasa profesional dan terkemuka di Indonesia.",
    i2:"© Copyright 2025. Di desain oleh Pt. E-nerkom",
  }
};

function setLang(lang) {
  localStorage.setItem("lang", lang); // save selected language
  applyLang(lang);
}

function applyLang(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    el.innerHTML = translations[lang][key];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang(currentLang); // load saved language on page load
});