let inningContainerColumn = document.getElementById("inning-container-column");

let inningColumnContent = "";

for (let i = 0; i < 10; i++) {
    inningColumnContent += `<p>${i+1}</p>`;
}

inningContainerColumn.innerHTML = inningColumnContent;

let lineupOrder = document.getElementById("linup-order-container");
let lineupOrderContent = "";

for (let i = 0; i < 12; i++) {
    lineupOrderContent += `<p>${i+1}</p>`;
}

lineupOrder.innerHTML = lineupOrderContent;