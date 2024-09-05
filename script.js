document.addEventListener('DOMContentLoaded', () => {
new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 2000,
}).mount();
});


const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const marker = L.marker([46.4825, 30.7233]).addTo(map);
marker.bindPopup("<b>Hello!</b><br>This is a marker in Odessa.").openPopup();

