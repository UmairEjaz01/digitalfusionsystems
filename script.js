// Load capabilities dynamically
fetch('capabilities.json')
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('capabilitiesGrid');
    data.forEach(item => {
      const tile = document.createElement('div');
      tile.classList.add('capability-tile');
      tile.innerHTML = `
        <i class="${item.icon}"></i>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;
      grid.appendChild(tile);
    });
  })
  .catch(err => console.error("Error loading capabilities:", err));
