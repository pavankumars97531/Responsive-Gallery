document.addEventListener('DOMContentLoaded', () => {
  const toggleDarkModeBtn = document.getElementById('toggleDarkMode');
  const showFavoritesBtn = document.getElementById('showFavorites');
  const gallery = document.getElementById('gallery');
  let favorites = [];

  // Dark Mode Toggle
  toggleDarkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Mark favorites by clicking on gallery items
  gallery.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;

    const title = item.dataset.title;
    const url = item.dataset.url;

    if (favorites.find(fav => fav.title === title)) {
      favorites = favorites.filter(fav => fav.title !== title);
      item.style.border = "none";
    } else {
      favorites.push({ title, url });
      item.style.border = "3px solid red";
    }
  });

  // Show Favorites
  showFavoritesBtn.addEventListener('click', () => {
    gallery.innerHTML = "";
    if (favorites.length === 0) {
      gallery.innerHTML = "<p>No favorites selected.</p>";
    } else {
      favorites.forEach(fav => {
        const div = document.createElement('div');
        div.classList.add('gallery-item');
        div.innerHTML = `
          <img src="${fav.url}" alt="${fav.title}">
          <p>${fav.title}</p>
        `;
        gallery.appendChild(div);
      });
    }
  });
});
