let inningContainerColumn = document.getElementById("inning-container-column");

let inningColumnContent = "";

for (let i = 0; i < 10; i++) {
    inningColumnContent += `<p>${i+1}</p>`;
}

inningContainerColumn.innerHTML = inningColumnContent;

let lineupOrder = document.getElementById("linup-order-container");
let genderColumn = document.getElementById('gender-col');
let playerNameColumn = document.getElementById('player-name-col');
let offenseColumn = document.getElementById('offense-col');
let defenseColumn = document.getElementById('defense-col');

let lineupOrderContent = "";
let playerContent = "";
let genderContent = "";
let playerNameContent = "";
let playerCheckContent = "";

for (let i = 0; i < 12; i++) {
    lineupOrderContent += `<p>${i+1}</p>`;

    genderContent += '<input type="text" class="gender" name="gender">';

    playerNameContent += `<input type="text" class="player-name" name="player-name">
                        <input type="text" class="player2-name" name="player2-name">`;

    playerCheckContent += `<div class=player-check>
                                <input type=checkbox>
                            </div>
                            <div class=player-check>
                                <input type=checkbox>
                            </div>`;

    
    //                     <div class="of-de">
    //                         <input type="checkbox">
    //                         <input type="checkbox">
    //                         <input type="checkbox">
    //                         <input type="checkbox">
    //                     </div>
    //                 </div>`;
}

lineupOrder.innerHTML += lineupOrderContent;
genderColumn.innerHTML += genderContent;
playerNameColumn.innerHTML += playerNameContent;
offenseColumn.innerHTML += playerCheckContent;
defenseColumn.innerHTML += playerCheckContent;

let scoresheetContainer = document.getElementById('scoresheet-container');
let scoresheetDivs = "";

for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 10; j++) {
        scoresheetDivs += '<div class=inning></div>';
    }
}

scoresheetContainer.innerHTML = scoresheetDivs;

let refInputIds = ['head-ref', 'head-ref-initial', 'head-ref-team', 'first-ref', 'first-ref-initial', 'first-ref-team', 'third-ref', 'third-ref-initial', 'third-ref-team', 'scorer', 'scorer-initial', 'scorer-team'];

let refContainer = document.getElementById('ref-container');

for (let i = 0; i < refInputIds.length; i++) {
    refContainer.innerHTML += `<input type=text id=${refInputIds[i]}>`;
}