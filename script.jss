// Image data array with "favorite" flag
const images = [
  { url: "https://picsum.photos/400/300?random=1", caption: "Sunset View", favorite: true },
  { url: "https://picsum.photos/400/300?random=2", caption: "Mountain Hike", favorite: false },
  { url: "https://picsum.photos/400/300?random=3", caption: "City Lights", favorite: true },
  { url: "https://picsum.photos/400/300?random=4", caption: "Calm Beach", favorite: false },
  { url: "https://picsum.photos/400/300?random=5", caption: "Forest Trail", favorite: true },
  { url: "https://picsum.photos/400/300?random=6", caption: "Desert Safari", favorite: false },
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
