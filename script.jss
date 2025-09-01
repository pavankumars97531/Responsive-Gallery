// Image data array with "favorite" flag (using stable Picsum IDs)
const images = [
  { url: "https://picsum.photos/id/237/400/300", caption: "Cute Dog", favorite: true },
  { url: "https://picsum.photos/id/1015/400/300", caption: "Mountain Hike", favorite: false },
  { url: "https://picsum.photos/id/1011/400/300", caption: "City Skyline", favorite: true },
  { url: "https://picsum.photos/id/1025/400/300", caption: "Colorful Parrot", favorite: false },
  { url: "https://picsum.photos/id/1043/400/300", caption: "Forest Trail", favorite: true },
  { url: "https://picsum.photos/id/1069/400/300", caption: "Calm Beach", favorite: false },
];

// Selectors
const gallery = document.getElementById("gallery");
const toggleModeBtn = document.getElementById("toggle-mode");
const filterFavoritesBtn = document.getElementById("filter-favorites");

// State
let showFavorites = false;

// Function to render gallery
function renderGallery() {
  gallery.innerHTML = ""; // Clear old content

  images.forEach(img => {
    if (!showFavorites || img.favorite) {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${img.url}" alt="${img.caption}">
        <div class="caption">${img.caption}</div>
      `;
      gallery.appendChild(card);
    }
  });
}

// Initial render
renderGallery();

// Toggle Dark Mode
toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Filter Favorites
filterFavoritesBtn.addEventListener("click", () => {
  showFavorites = !showFavorites;
  filterFavoritesBtn.textContent = showFavorites ? "Show All" : "Show Favorites Only";
  renderGallery();
});
