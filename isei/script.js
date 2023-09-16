// Data event lokal (gantilah dengan data event yang sesuai)
const events = [
    { nama: "Konser Musik A", lokasi: "Jakarta", genre: "Musik" },
    { nama: "Pameran Seni B", lokasi: "Surabaya", genre: "Seni" },
    { nama: "Turnamen Sepak Bola", lokasi: "Bandung", genre: "Olahraga" },
    { nama: "Event Lainnya", lokasi: "Yogyakarta", genre: "Lainnya" },
];

function searchEvent() {
    const keyword = document.getElementById("searchInput").value;
    const genre = document.getElementById("genreDropdown").value;
    const searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = '';

    // Filtering berdasarkan keyword dan genre
    const filteredEvents = events.filter(event =>
        (event.nama.toLowerCase().includes(keyword.toLowerCase()) || event.lokasi.toLowerCase().includes(keyword.toLowerCase())) &&
        (genre === '' || event.genre === genre)
    );

    if (filteredEvents.length > 0) {
        filteredEvents.forEach(event => {
            const eventDiv = document.createElement("div");
            eventDiv.innerHTML = `<p>Nama Event: ${event.nama}</p><p>Lokasi: ${event.lokasi}</p><p>Genre: ${event.genre}</p><button onclick="buyTicket('${event.nama}')">Beli Tiket</button>`;
            searchResults.appendChild(eventDiv);
        });
    } else {
        searchResults.innerHTML = "Event tidak ditemukan";
    }
}

function buyTicket(eventName) {
    // Mengisi formulir pembelian tiket dengan nama event yang dipilih
    document.getElementById("eventName").value = eventName;

    // Redirect ke halaman pembelian tiket (buy.html)
    window.location.href = "buy.html";
}
