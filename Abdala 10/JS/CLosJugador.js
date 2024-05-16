class Player {
    constructor(name, position, age, height, weight, nationality) {
        this.name = name;
        this.position = position;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.nationality = nationality;
    }
}

const players = [
    new Player("Lionel Messi", "A", 36, 1.70, 72, "Argentina"),
    new Player("Cristiano Ronaldo", "A", 39, 1.87, 83, "Portugal"),
    new Player("Neymar Jr.", "A", 32, 1.75, 68, "Brazil"),
    new Player("Sergio Ramos", "D", 38, 1.84, 82, "Spain"),
    new Player("Manuel Neuer", "G", 38, 1.93, 92, "Germany"),
    new Player("Virgil van Dijk", "D", 32, 1.93, 92, "Netherlands"),
    new Player("Kylian Mbappé", "A", 25, 1.78, 73, "France"),
];

function displayPlayers() {
    const table = document.createElement("table");
    const headerRow = table.insertRow();
    headerRow.innerHTML = "<th colspan='6'>All Players</th>";

    const headers = ["Name", "Position", "Age", "Height", "Weight", "Nationality"];
    const headerCells = headers.map(header => `<th>${header}</th>`).join("");
    const header = table.insertRow();
    header.innerHTML = headerCells;

    players.forEach(player => {
        const row = table.insertRow();
        row.innerHTML = `<td>${player.name}</td>
                         <td>${player.position}</td>
                         <td>${player.age}</td>
                         <td>${player.height}</td>
                         <td>${player.weight} kg</td>
                         <td>${player.nationality}</td>`;
    });

    document.body.appendChild(table);
}

function displayArgentinianPlayers() {
    const table = document.createElement("table");
    const headerRow = table.insertRow();
    headerRow.innerHTML = "<th colspan='2'>Argentinian Players</th>";

    const headers = ["Name", "Position"];
    const headerCells = headers.map(header => `<th>${header}</th>`).join("");
    const header = table.insertRow();
    header.innerHTML = headerCells;

    players.forEach(player => {
        if (player.nationality === "Argentina") {
            const row = table.insertRow();
            row.innerHTML = `<td>${player.name}</td>
                             <td>${player.position}</td>`;
        }
    });

    document.body.appendChild(table);
}

function displayPlayersByWeight() {
    const table = document.createElement("table");
    const headerRow = table.insertRow();
    headerRow.innerHTML = "<th colspan='2'>Players Weighing Between 75 and 80 kg</th>";

    const headers = ["Name", "Weight"];
    const headerCells = headers.map(header => `<th>${header}</th>`).join("");
    const header = table.insertRow();
    header.innerHTML = headerCells;

    players.forEach(player => {
        if (player.weight >= 75 && player.weight <= 80) {
            const row = table.insertRow();
            row.innerHTML = `<td>${player.name}</td>
                             <td>${player.weight} kg</td>`;
        }
    });

    document.body.appendChild(table);
}

function displayTallestPlayer() {
    const tallestHeight = Math.max(...players.map(player => player.height));
    const tallestPlayers = players.filter(player => player.height === tallestHeight);
    const names = tallestPlayers.map(player => player.name).join(", ");
    document.write(`The tallest player(s) is/are: ${names}`);
}

displayPlayers();
displayArgentinianPlayers();
displayPlayersByWeight();
displayTallestPlayer();
