let inningContainerColumn = document.getElementById("inning-container-column");

let inningColumnContent = "";

for (let i = 0; i < 10; i++) {
    inningColumnContent += `<p>${i+1}</p>`;
}

inningContainerColumn.innerHTML = inningColumnContent;