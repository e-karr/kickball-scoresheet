let inningContainerColumn = document.getElementById("inning-container-column");

let inningColumnContent = "";

for (let i = 0; i < 10; i++) {
    inningColumnContent += `<p>${i+1}</p>`;
}

inningContainerColumn.innerHTML = inningColumnContent;

let lineupOrder = document.getElementById("linup-order-container");
let genderColumn = document.getElementById('gender-col');

let lineupOrderContent = "";
let playerContent = "";
let genderContent = "";

for (let i = 0; i < 12; i++) {
    lineupOrderContent += `<p>${i+1}</p>`;

    genderContent += '<input type="text" class="gender" name="gender" placeholder=M/F/NB>'

    // playerContent += `<div class="player-container">
    //                     <input type="text" class="gender" name="gender">
    //                     <input type="text" class="player-name" name="player-name">
    //                     <input type="text" class="player2-name" name="player2-name">
    //                     <div class="of-de">
    //                         <input type="checkbox">
    //                         <input type="checkbox">
    //                         <input type="checkbox">
    //                         <input type="checkbox">
    //                     </div>
    //                 </div>`;
}

lineupOrder.innerHTML = lineupOrderContent;

genderColumn.innerHTML += genderContent;

let scoresheetContainer = document.getElementById('scoresheet-container');
let scoresheetDivs = "";

for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 10; j++) {
        scoresheetDivs += '<div class=inning></div>';
    }
}

scoresheetContainer.innerHTML = scoresheetDivs;
