const games = [
    {
        title: "Cerita Seru",
        description: "Kumpula kisah dan cerita seru, romantis dan lucu. cocok kamu yang suka menikmati ceita ringan dan menghibur!",
        link: "story/index.html",
        category: "interaktif"
      },
    {
        title: "Ajak Pacaran Anti Tolak",
        description: "Game lucu di mana ajakan pacaran kamu selalu diterima. Dijamin 100% diterima tanpa penolakan, cuma hiburan!",
        link: "love/ajak pacaran.html",
        category: "love"
      },
          {
        title: "Cocok-Cocokan Hati",
        description: "mMsukan nama kamu dan gebetan kamu, lalu lihat seberapa cocok kalian menurut hasil ramelan hati! cocok buat seru-seruan bareng temen atau gebetan, di jamin bikin dedekan",
        link: "love/cocokan hati.html",
        category: "love"
      },
      {
        title: "Block Puzzle",
        description: "Selamat datang di Block Puzzle, permainan menyenangkan yang akan mengasah otak dan refleks strategis Anda!",
        link: "Puzzle/Block Puzzle.html",
        category: "Puzzle"
      },
    {
      title: "klasik",
      description: "Kembali ke masa lalu dengan Snake Classic! Game ular legendaris dari HP jadul kini hadir di web dengan tampilan lucu dan kontrol sentuh yang mudah dimainkan.",
      link: "klasik/snake.html",
      category: "klasik"
    },
    
  ];
  
  const gameList = document.getElementById("gameList");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  
  function renderGames(filteredGames) {
    gameList.innerHTML = ""; // Bersihkan konten
    if (filteredGames.length === 0) {
      gameList.innerHTML = "<p style='text-align:center;'>Tidak ada game yang cocok.</p>";
      return;
    }
    filteredGames.forEach(game => {
      const card = document.createElement("div");
      card.className = "game-card";
      card.innerHTML = `
        <h2>${game.title}</h2>
        <p>${game.description}</p>
        <a href="${game.link}">Mainkan</a>
      `;
      gameList.appendChild(card);
    });
  }
  
  function filterGames() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
  
    const filtered = games.filter(game => {
      const matchesSearch =
        game.title.toLowerCase().includes(searchText) ||
        game.description.toLowerCase().includes(searchText);
      const matchesCategory =
        selectedCategory === "all" || game.category === selectedCategory;
  
      return matchesSearch && matchesCategory;
    });
  
    renderGames(filtered);
  }
  
  // Event listeners
  searchInput.addEventListener("input", filterGames);
  categoryFilter.addEventListener("change", filterGames);
  
  // Render awal
  renderGames(games);
  