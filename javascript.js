var quotes = [    
    "Semua kemajuan terjadi di luar zona nyaman",

    "Jangan terlena dengan sebuah mimpi, bangunlah dan terus bekerja",

    "Agar masa depanmu lebih baik,maka berusahalah mulai dari sekarang",

    "Kebahagiaan itu ada, jika kamu mau menjemputnya",

    "Teruslah percaya dan bekerja keraslah",

    "Kurang pandai mungkin bisa diperbaiki, tapi kejujuran tidak akan pernah mudah untuk ditanamkan",

    "Jangan menunggu diriku di sana, berjalanlah di sampingku bersama hingga sampai di sana",

    "Awal menjadi orang baik, adalah dengan berbuat baik",

    "Teruslah optimistis dan berpikir positif dalam hidupmu",

    "Waktu sangatlah berharga, janganlah pernah menyia-nyiakannya",

    "Seberat apapun yang dihadapi jangan pernah menjadi rapuh",

    "Teruslah meminta kepada Allah, dalam keadaan apa pun",

    "Jemputlah kebahagiaan agar tak lantas bersedih hati",

    "Jangan pernah berburuk sangka atas rencana tuhan di dunia",

    "Jadilah yang terbaik dari yang terbaik",

    "Mulailah segala sesuatu dengan senyuman, karena senyuman adalah awal dari kasih sayang",
 
    "Rindu menggantung, tangis serupa mendung, hati bersenandung, bidadari berkerudung",

    "Aku memilih kau untuk ku lebur dalam suara hujan yang parau… kadang rindu tak perlu sajak merdu.",

    "Derai hujan melarutkan segala rindu, menjadi ampas dalam sebuah cerita tentang aku dan kamu.",

    "Kotamu basah, rindu terpisah oleh waktu yang entah, hati luluh lantah, berlari mengejar rembulan yang bersinar indah.",

    "Kadang juga abu-abu. Tidak hitam, tidak pula putih. Penuh ragu selaksa awan mendung kelabu. Andai kau tau maksudku.",

    "Nanti akan aku ceritakan padamu, tentang penantian yang tak kenal akhir waktu, sebab cinta bukan soal kapan, tapi ketika Tuhan sudah menetapkan.",

    "Ketika pagi dinyalakan mentari, ada rindu sebab kau dihidupkan disini, tapi ribuan entah seringkali menutupi syukurmu setiap kali.",

    "Di antara senja dan bulan purnama, rindu tersesat dalam waktu yang kian menua.",

    "Aku cemburu pada waktu, setiap saat selalu kau cumbu, derai hujan perlahan melarutkan rindu, dalam air mataku.",

    "Rinduku ialah bumerangku, tumbuh subur di ladang angkuhmu.",

    "jangan lupa kita ini manusia, angkuh,sedih,bahagia,canda serta tawa milik kita bersama",
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
    }).add({
        targets: '.ml6',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
    })
    .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
    }).add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i + 1)
    }).add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });


// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
// of the mouse, set with a mousemove event listener below
var dots = [],
    mouse = {
        x: 0,
        y: 0
    };

// The Dot object used to scaffold the dots
var Dot = function () {
    this.x = 0;
    this.y = 0;
    this.node = (function () {
        var n = document.createElement("div");
        n.className = "trail";
        document.body.appendChild(n);
        return n;
    }());
};
// The Dot.prototype.draw() method sets the position of 
// the object's <div> node
Dot.prototype.draw = function () {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 12; i++) {
    var d = new Dot();
    dots.push(d);
}

// This is the screen redraw function
function draw() {
    // Make sure the mouse position is set everytime
    // draw() is called.
    var x = mouse.x,
        y = mouse.y;

    // This loop is where all the 90s magic happens
    dots.forEach(function (dot, index, dots) {
        var nextDot = dots[index + 1] || dots[0];

        dot.x = x;
        dot.y = y;
        dot.draw();
        x += (nextDot.x - dot.x) * .6;
        y += (nextDot.y - dot.y) * .6;

    });
}

addEventListener("mousemove", function (event) {
    //event.preventDefault();
    mouse.x = event.pageX;
    mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
// everytime the screen repaints via requestAnimationFrame().
function animate() {
    draw();
    requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();