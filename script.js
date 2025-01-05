
// Fungsi untuk menampilkan popup
function showPopup(image, title, specs, price, description) {
    const popup = document.getElementById('popup');
    const popupImage = popup.querySelector('.popup-image');
    const popupTitle = popup.querySelector('.popup-title');
    const popupSpecs = popup.querySelector('.popup-specs');
    const popupPrice = popup.querySelector('.popup-price');
    const popupDescription = popup.querySelector('.popup-description');

    // Isi data ke dalam popup
    popupImage.src = image;
    popupTitle.textContent = title;
    popupSpecs.textContent = specs;
    popupPrice.textContent = price;
    popupDescription.textContent = description;

    // Tampilkan popup
    popup.style.display = 'flex';
}

// Fungsi untuk menutup popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Event listener untuk kartu laptop
document.addEventListener('DOMContentLoaded', function () {
    const laptopCards = document.querySelectorAll('.laptop-cards .card');

    laptopCards.forEach(card => {
        card.addEventListener('click', function () {
            const image = card.querySelector('img').src;
            const title = card.querySelector('h3').textContent;
            const specs = card.querySelector('p').textContent;
            const price = card.querySelector('.price').textContent;
            const description = card.getAttribute('data-description');

            showPopup(image, title, specs, price, description);
        });
    });

    // Event listener untuk tombol close popup
    const closePopupButton = document.querySelector('.close-popup');
    closePopupButton.addEventListener('click', closePopup);

    // Tutup popup saat mengklik di luar popup
    window.addEventListener('click', function (event) {
        const popup = document.getElementById('popup');
        if (event.target === popup) {
            closePopup();
        }
    });
});



// Fungsi untuk mencari laptop
function searchLaptops() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const laptopCards = document.querySelectorAll('.laptop-cards .card');

    laptopCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const specs = card.querySelector('p').textContent.toLowerCase();

        // Cek apakah judul atau spesifikasi mengandung kata kunci pencarian
        if (title.includes(searchInput) || specs.includes(searchInput)) {
            card.style.display = 'block'; // Tampilkan kartu yang sesuai
        } else {
            card.style.display = 'none'; // Sembunyikan kartu yang tidak sesuai
        }
    });
}

// Event listener untuk tombol pencarian
document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', searchLaptops);

    // Event listener untuk input pencarian (bisa menggunakan Enter)
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            searchLaptops();
        }
    });
});


let currentImageIndex = 0;
let images = [];

function showPopup(image, title, specs, price, description, imageList) {
    const popup = document.getElementById('popup');
    const popupImage = popup.querySelector('.popup-image');
    const popupTitle = popup.querySelector('.popup-title');
    const popupSpecs = popup.querySelector('.popup-specs');
    const popupPrice = popup.querySelector('.popup-price');
    const popupDescription = popup.querySelector('.popup-description');

    // Isi data ke dalam popup
    popupImage.src = image;
    popupTitle.textContent = title;
    popupSpecs.textContent = specs;
    popupPrice.textContent = price;
    popupDescription.textContent = description;

    // Simpan daftar gambar dan reset index
    images = imageList;
    currentImageIndex = 0;

    // Tampilkan popup
    popup.style.display = 'flex';
}

// Fungsi untuk menampilkan gambar berikutnya
function showNextImage() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        updatePopupImage();
    }
}

// Fungsi untuk menampilkan gambar sebelumnya
function showPrevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updatePopupImage();
    }
}

// Fungsi untuk memperbarui gambar di popup
function updatePopupImage() {
    const popupImage = document.querySelector('.popup-image');
    popupImage.src = images[currentImageIndex];
}

// Event listener untuk kartu laptop
document.addEventListener('DOMContentLoaded', function () {
    const laptopCards = document.querySelectorAll('.laptop-cards .card');

    laptopCards.forEach(card => {
        card.addEventListener('click', function () {
            const image = card.querySelector('img').src;
            const title = card.querySelector('h3').textContent;
            const specs = card.querySelector('p').textContent;
            const price = card.querySelector('.price').textContent;
            const description = card.getAttribute('data-description');
            const imageList = JSON.parse(card.getAttribute('data-images')); // Ambil daftar gambar

            showPopup(image, title, specs, price, description, imageList);
        });
    });

    // Event listener untuk tombol close popup
    const closePopupButton = document.querySelector('.close-popup');
    closePopupButton.addEventListener('click', closePopup);

    // Event listener untuk tombol navigasi gambar
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    // Tutup popup saat mengklik di luar popup
    window.addEventListener('click', function (event) {
        const popup = document.getElementById('popup');
        if (event.target === popup) {
            closePopup();
        }
    });
});

// Fungsi untuk mengarahkan ke WhatsApp
function redirectToWhatsApp(productName) {
    const phoneNumber = "+6285961462361"; // Nomor WhatsApp (tanpa + atau 0)
    const message = `Saya ingin bertanya tentang produk ${productName} ini`; // Pesan otomatis
    const encodedMessage = encodeURIComponent(message); // Encode pesan untuk URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`; // Buat URL WhatsApp

    window.open(whatsappUrl, "_blank"); // Buka URL di tab baru
}

// Event listener untuk tombol "Beli Sekarang"
document.addEventListener('DOMContentLoaded', function () {
    const buyButton = document.querySelector('.popup-button');
    buyButton.addEventListener('click', function () {
        const productName = buyButton.getAttribute('data-product'); // Ambil nama produk
        redirectToWhatsApp(productName); // Redirect ke WhatsApp
    });
});

function showPopup(image, title, specs, price, description, imageList) {
    const popup = document.getElementById('popup');
    const popupImage = popup.querySelector('.popup-image');
    const popupTitle = popup.querySelector('.popup-title');
    const popupSpecs = popup.querySelector('.popup-specs');
    const popupPrice = popup.querySelector('.popup-price');
    const popupDescription = popup.querySelector('.popup-description');
    const buyButton = popup.querySelector('.popup-button');

    // Isi data ke dalam popup
    popupImage.src = image;
    popupTitle.textContent = title;
    popupSpecs.textContent = specs;
    popupPrice.textContent = price;
    popupDescription.textContent = description;
    buyButton.setAttribute('data-product', title); // Set nama produk untuk tombol "Beli Sekarang"

    // Simpan daftar gambar dan reset index
    images = imageList;
    currentImageIndex = 0;

    // Tampilkan popup
    popup.style.display = 'flex';
}

// Data barang
const laptops = [

];

// Fungsi untuk menampilkan barang
function tampilkanBarang() {
    const laptopCards = document.querySelector('.laptop-cards');
    laptopCards.innerHTML = ''; // Kosongkan konten sebelum menambahkan barang baru

    laptops.forEach(laptop => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-description', laptop.deskripsi);
        card.setAttribute('data-images', JSON.stringify(laptop.gambarTambahan));

        card.innerHTML = `
            <img src="${laptop.gambar}" alt="${laptop.nama}">
            <h3>${laptop.nama}</h3>
            <p>${laptop.spesifikasi}</p>
            <p class="price">${laptop.harga} <span class="status" data-status="${laptop.status}">${laptop.status}</span></p>
        `;

        laptopCards.appendChild(card);
    });
}

// Event listener untuk filter
document.addEventListener('DOMContentLoaded', function () {
    tampilkanBarang(); // Tampilkan barang saat halaman dimuat

    const filterBrand = document.getElementById('filter-brand');
    const filterHarga = document.getElementById('filter-harga');
    const laptopCards = document.querySelectorAll('.laptop-cards .card');

    // Fungsi untuk memfilter laptop
    function filterLaptops() {
        const selectedBrand = filterBrand.value.toLowerCase(); // Ambil nilai brand yang dipilih
        const selectedHarga = filterHarga.value; // Ambil nilai harga yang dipilih

        laptopCards.forEach(card => {
            const merk = card.querySelector('h3').textContent.toLowerCase(); // Ambil merek dari judul
            const harga = card.querySelector('.price').textContent; // Ambil harga
            const hargaNumerik = parseInt(harga.replace(/\D/g, '')); // Konversi harga ke angka

            // Cek apakah merek dan harga sesuai dengan filter
            const isMerkMatch = selectedBrand === 'all' || merk.includes(selectedBrand);
            const isHargaMatch = selectedHarga === 'all' || hargaNumerik < parseInt(selectedHarga) * 1000000;

            // Tampilkan atau sembunyikan kartu berdasarkan filter
            if (isMerkMatch && isHargaMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Event listener untuk filter brand dan harga
    filterBrand.addEventListener('change', filterLaptops);
    filterHarga.addEventListener('change', filterLaptops);
});

document.addEventListener('DOMContentLoaded', function () {
    const laptopCards = document.querySelectorAll('.laptop-cards .card');

    laptopCards.forEach(card => {
        card.addEventListener('click', function () {
            const image = card.querySelector('img').src;
            const title = card.querySelector('h3').textContent;
            const specs = card.querySelector('p').textContent;
            const price = card.querySelector('.price').textContent;
            const description = card.getAttribute('data-description');
            const imageList = JSON.parse(card.getAttribute('data-images'));

            showPopup(image, title, specs, price, description, imageList);
        });
    });
});

laptops.push({
    nama: "Laptop Acer Aspire 5",
    gambar: "images/laptop2.png",
    spesifikasi: "Intel Core i5, 8GB RAM, 512GB SSD",
    harga: "Rp 6.000.000",
    status: "Second", // Status baru
    deskripsi: "Laptop Acer Aspire 5 adalah laptop yang cocok untuk produktivitas sehari-hari.",
    gambarTambahan: ["images/laptop2.png", "images/laptop3.png", "images/laptop4.png"]
});

laptops.push({
    nama: "Laptop Asus VivoBook 14",
    gambar: "images/laptop2.png",
    spesifikasi: "AMD Ryzen 5, 8GB RAM, 512GB SSD",
    harga: "Rp 7.000.000",
    status: "Second",
    deskripsi: "Laptop Asus VivoBook 14 adalah laptop ringan dengan performa tinggi.",
    gambarTambahan: ["images/laptop2.png", "images/laptop3.png", "images/laptop4.png"]
});

laptops.push({
    nama: "Laptop Asus VivoBook 14",
    gambar: "images/laptop2.png",
    spesifikasi: "AMD Ryzen 5, 8GB RAM, 512GB SSD",
    harga: "Rp 7.000.000",
    status: "Second", // Status baru
    deskripsi: "Laptop Asus VivoBook 14 adalah laptop ringan dengan performa tinggi.",
    gambarTambahan: ["images/laptop2.png", "images/laptop3.png", "images/laptop4.png"]
});

laptops.push({
    nama: "Laptop Asus VivoBook 14",
    gambar: "images/laptop2.png",
    spesifikasi: "AMD Ryzen 5, 8GB RAM, 512GB SSD",
    harga: "Rp 7.000.000",
    status: "Second", // Status baru
    deskripsi: "Laptop Asus VivoBook 14 adalah laptop ringan dengan performa tinggi.",
    gambarTambahan: ["images/laptop2.png", "images/laptop3.png", "images/laptop4.png"]
});

laptops.push({
    nama: "Laptop Asus VivoBook 14",
    gambar: "images/laptop2.png",
    spesifikasi: "AMD Ryzen 5, 8GB RAM, 512GB SSD",
    harga: "Rp 7.000.000",
    status: "Second", // Status baru
    deskripsi: "Laptop Asus VivoBook 14 adalah laptop ringan dengan performa tinggi.",
    gambarTambahan: ["images/laptop2.png", "images/laptop3.png", "images/laptop4.png"]
});

laptops.push({
    nama: "Laptop Asus VivoBook 14",
    gambar: "images/laptop2.png",
    spesifikasi: "AMD Ryzen 5, 8GB RAM, 512GB SSD",
    harga: "Rp 7.000.000",
    status: "Second", // Status baru
    deskripsi: "Laptop Asus VivoBook 14 adalah laptop ringan dengan performa tinggi.",
    gambarTambahan: ["images/laptop2.png", "images/laptop3.png", "images/laptop4.png"]
});

laptops.push({
    nama: "Laptop Asus VivoBook 14",
    gambar: "images/laptop2.png",
    spesifikasi: "AMD Ryzen 5, 8GB RAM, 512GB SSD",
    harga: "Rp 7.000.000",
    status: "Second", // Status baru
    deskripsi: "Laptop Asus VivoBook 14 adalah laptop ringan dengan performa tinggi.",
    gambarTambahan: ["images/laptop2.png", "images/laptop3.png", "images/laptop4.png"]
});


let startX = 0;
let endX = 0;

// Fungsi untuk menangani swipe
function handleSwipe() {
    const distance = endX - startX;

    if (distance > 50) {
        // Geser ke kanan (gambar sebelumnya)
        showPrevImage();
    } else if (distance < -50) {
        // Geser ke kiri (gambar berikutnya)
        showNextImage();
    }
}

// Tambahkan event listener untuk swipe pada popup image
document.addEventListener('DOMContentLoaded', function () {
    const popupImage = document.querySelector('.popup-image');

    popupImage.addEventListener('touchstart', function (event) {
        startX = event.touches[0].clientX;
    });

    popupImage.addEventListener('touchmove', function (event) {
        endX = event.touches[0].clientX;
    });

    popupImage.addEventListener('touchend', function () {
        handleSwipe();
    });
});


