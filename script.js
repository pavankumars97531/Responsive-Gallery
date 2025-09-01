// script.js

const images = [
  {
    url: "https://picsum.photos/id/1015/400/300",
    caption: "Mountain View",
    favorite: true
  },
  {
    url: "https://picsum.photos/id/1016/400/300",
    caption: "Forest Path",
    favorite: false
  },
  {
    url: "https://picsum.photos/id/1025/400/300",
    caption: "Majestic Eagle",
    favorite: true
  },
  {
    url: "https://picsum.photos/id/1020/400/300",
    caption: "Calm Lake",
    favorite: false
  }
];

const gallery = document.getElementById("gallery");
const toggleDarkBtn = document.getElementById("toggle-dark");
const showFavBtn = document.getElementById("show-fav");

function renderGallery(showFavorites = false) {
  // clear old content
  gallery.innerHTML = "";

  // filter if needed
  const filteredImages = showFavorites
    ? images.filter(img => img.favorite)
    : images;

  // loop through images and add them
  filteredImages.forEach(img => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");

    item.innerHTML = `
      <img src="${img.url}" alt="${img.caption}">
      <p>${img.caption}</p>
    `;

    gallery.appendChild(item);
  });
}

// dark mode toggle
toggleDarkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// show favorites toggle
let showingFavs = false;
showFavBtn.addEventListener("click", () => {
  showingFavs = !showingFavs;
  renderGallery(showingFavs);
});

// initial render
renderGallery();
