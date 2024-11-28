//grid de jogos
const gameLibrary = [
    {
      id: 1,
      title: "Grand Theft Auto V",
      genre: "action",
      playtime: "45 Horas Jogadas",
      image: "/assets/grid/gtav_grid.jpg"
     },
    {
    id: 2,
    title: "CS:GO",
    genre: "fps",
    playtime: "155 Horas Jogadas",
    image: "/assets/grid/csgo_grid.jpg"
    },
    {
    id: 3,
    title: "Minecraft",
    genre: "aventura",
    playtime: "455 Horas Jogadas",
    image: "/assets/grid/minecraft_grid.jpg"
    },
    {
    id: 4,
    title: "The Witcher 3",
    genre: "aventura",
    playtime: "80 Horas Jogadas",
    image: "/assets/grid/TheWitcher_grid.jpg"
    },
    {
    id: 5,
    title: "Cyberpunk 2077",
    genre: "fps",
    playtime: "145 Horas Jogadas",
    image: "/assets/grid/Cyberpunk2077_grid.jpg"
    },
    {
    id: 6,
    title: "Hollow Knight",
    genre: "action",
    playtime: "65 Horas Jogadas",
    image: "/assets/grid/HollowKnight_grid.jpg"
    },
   
  ];
  
  function createGameCard(game) {
    return `
      <div class="game-card" data-genre="${game.genre}">
        <div class="game-image" style="background-image: url('${game.image}')"></div>
        <div class="game-info">
          <h3 class="game-title">${game.title}</h3>
          <div class="game-meta">
            <span>${game.playtime}</span>
          </div>
          <button class="play-btn" onclick="playGame(${game.id})">JOGAR</button>
        </div>
      </div>
    `;
  }
  
  function renderGames(games) {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = games.map(game => createGameCard(game)).join('');
  }
  
  function filterGames(genre) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  
    const filteredGames = genre === 'all' 
      ? gameLibrary 
      : gameLibrary.filter(game => game.genre === genre);
    
    renderGames(filteredGames);
  }
  
  function searchGames(query) {
    const filteredGames = gameLibrary.filter(game => 
      game.title.toLowerCase().includes(query.toLowerCase())
    );
    renderGames(filteredGames);
  }
  // pront a clicar para jogar

  function playGame(id) {
    const game = gameLibrary.find(g => g.id === id);
    alert(`Jogue Agora ${game.title}! BAIXE PARA JOGAR!`);
  }
  
  // ao iniciar a biblioteca 
  document.addEventListener('DOMContentLoaded', () => {
    renderGames(gameLibrary);
  });