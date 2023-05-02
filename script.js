let inningContainerColumn = document.getElementById("inning-container-column");
let totalRunsContainer = document.getElementById('total-runs-container');

let inningColumnContent = "";
let totalRunsContent = "";

for (let i = 0; i < 10; i++) {
    inningColumnContent += `<p>${i+1}</p>`;
    totalRunsContent += `<div class="scorekeeping">
                            <input type="text" class="inning-score">
                            <input type="text" class="total-score">
                        </div>`;
}

inningContainerColumn.innerHTML = inningColumnContent;
totalRunsContainer.innerHTML = totalRunsContent;

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

    playerNameContent += `<div class=player-names-container>
                            <input type="text" class="player-name" name="player-name">
                            <input type="text" class="player2-name" name="player2-name">
                        </div>`;

    playerCheckContent += `<div class=player-check>
                                <input type=checkbox>
                            </div>
                            <div class=player-check>
                                <input type=checkbox>
                            </div>`;
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
        scoresheetDivs += `<div class=inning>
                                <div class="fouls">
                                    <div class="fouls-checkboxes">
                                        <input type="checkbox">
                                        <input type="checkbox">
                                        <input type="checkbox">
                                        <input type="checkbox">
                                    </div>
                                    <p>FOULS</p>
                                </div>
                                <div class="base-path"></div>
                                <div class="run">
                                    <p>1</p>
                                    <p>2</p>
                                    <p>3</p>
                                    <p>HR</p>
                                </div>
                                <div class="rki">
                                    <p>RKI</p>
                                    <div class="rki-checkboxes">
                                        <input type="checkbox">
                                        <input type="checkbox">
                                        <input type="checkbox">
                                        <input type="checkbox">
                                    </div>
                                </div>
                            </div>`;
    }
}

scoresheetContainer.innerHTML = scoresheetDivs;

let refInputIds = ['head-ref', 'head-ref-initial', 'head-ref-team', 'first-ref', 'first-ref-initial', 'first-ref-team', 'third-ref', 'third-ref-initial', 'third-ref-team', 'scorer', 'scorer-initial', 'scorer-team'];

let refContainer = document.getElementById('ref-container');

for (let i = 0; i < refInputIds.length; i++) {
    refContainer.innerHTML += `<input type=text id=${refInputIds[i]}>`;
}