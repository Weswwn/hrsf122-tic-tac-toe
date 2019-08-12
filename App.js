//On the click of the Play Again button
    //The board will be wiped clean
    //The value that keeps track of the current player will
    //reset to player1 which will then place an 'X' down
var currentPlayer = true;
var boardMatrix = [
             [[],[],[]],
             [[],[],[]],
             [[],[],[]],
            ];
//Event Listenter for Column 1, Box 1
var col1Box1= document.getElementById("col1_box1");
col1Box1.addEventListener('click', (col1Box1) => placeMarker(col1Box1));

//Event Listener for Column 1, Box 2
var col1Box2= document.getElementById("col1_box2");
col1Box2.addEventListener('click', (col1Box2) => placeMarker(col1Box2));

//Event Listener for Column 1, Box 3
var col1Box3= document.getElementById("col1_box3");
col1Box3.addEventListener('click', (col1Box3) => placeMarker(col1Box3));
//  ---------------------------------------------------------------------------

//Event Listenter for Column 1, Box 1
var col2Box1= document.getElementById("col2_box1");
col2Box1.addEventListener('click', (col2Box1) => placeMarker(col2Box1));

//Event Listener for Column 1, Box 2
var col2Box2= document.getElementById("col2_box2");
col2Box2.addEventListener('click', (col2Box2) => placeMarker(col2Box2));

//Event Listener for Column 1, Box 3
var col2Box3= document.getElementById("col2_box3");
col2Box3.addEventListener('click', (col2Box3) => placeMarker(col2Box3));
//  ---------------------------------------------------------------------------

//Event Listenter for Column 1, Box 1
var col3Box1= document.getElementById("col3_box1");
col3Box1.addEventListener('click', (col3Box1) => placeMarker(col3Box1));

//Event Listener for Column 1, Box 2
var col3Box2= document.getElementById("col3_box2");
col3Box2.addEventListener('click', (col3Box2) => placeMarker(col3Box2));

//Event Listener for Column 1, Box 3
var col3Box3= document.getElementById("col3_box3");
col3Box3.addEventListener('click', (col3Box3) => placeMarker(col3Box3));


function placeMarker(clickedBox) {
    //If there is already an item at this square then ignore the
    //click
    if (document.getElementById(clickedBox.path[0].id).innerHTML === '') {
        if (currentPlayer === true) {
            //Place an X since it is the first Player
            document.getElementById(clickedBox.path[0].id)
            .textContent = 'X';
            currentPlayer = !currentPlayer;
            placeMarkerInMatrix(clickedBox.path[0].id, true);
            
        } else {
            //Place an Y since it is the second Player
            document.getElementById(clickedBox.path[0].id)
            .textContent = 'O';
            currentPlayer = !currentPlayer;
            placeMarkerInMatrix(clickedBox.path[0].id, false);
        }
    }
}





// var boardMatrix = [
//     [[],[],[]],
//     [[],[],[]],
//     [[],[],[]],
//    ];

function placeMarkerInMatrix(clickedDivID, XorO) {
    console.log(clickedDivID, XorO);
    // ------- FIRST COLUMN -------------------
    if (clickedDivID === 'col1_box1') {
        boardMatrix[0][0].push(XorO);
        console.log(boardMatrix);
        checkForWinners(clickedDivID, XorO);
    }
    if (clickedDivID === 'col1_box2') {
        boardMatrix[1][0].push(XorO);
        console.log(boardMatrix);
        checkForWinners(clickedDivID, XorO);
    }
    if (clickedDivID === 'col1_box3') {
        boardMatrix[2][0].push(XorO);
        console.log(boardMatrix);
        checkForWinners(clickedDivID, XorO);
    }
    // ------- SECOND COLUMN -------------------
    if (clickedDivID === 'col2_box1') {
        boardMatrix[0][1].push(XorO);
        console.log(boardMatrix);
        checkForWinners(clickedDivID, XorO);
    }
    if (clickedDivID === 'col2_box2') {
        boardMatrix[1][1].push(XorO);
        console.log(boardMatrix);
        checkForWinners(clickedDivID, XorO);
    }
    if (clickedDivID === 'col2_box3') {
        boardMatrix[2][1].push(XorO);
        console.log(boardMatrix);
        checkForWinners(clickedDivID, XorO);
    }
    // ------- THIRD COLUMN -------------------
    if (clickedDivID === 'col3_box1') {
        boardMatrix[0][2].push(XorO);
        console.log(boardMatrix);
        checkForWinners(clickedDivID, XorO);
    }
    if (clickedDivID === 'col3_box2') {
        boardMatrix[1][2].push(XorO);
        console.log(boardMatrix);
        checkForWinners(clickedDivID, XorO);
    }
    if (clickedDivID === 'col3_box3') {
        boardMatrix[2][2].push(XorO);
        console.log(boardMatrix);
        checkForWinners(clickedDivID, XorO);
    }

}

checkForWinners = (clickedDivID, XorO) => {
    // console.log('check winners');
    // if ((boardMatrix[0][0][0] === true && boardMatrix[0][1][0] === true && boardMatrix[0][2][0] === true) || (boardMatrix[0][0][0] === false && boardMatrix[0][1][0] === false && boardMatrix[0][2][0] === false)) {
    //     console.log('win');
    
}