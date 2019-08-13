//On the click of the Play Again button
    //The board will be wiped clean
    //The value that keeps track of the current player will
    //reset to player1 which will then place an 'X' down
var currentPlayer = true;
var winner = '';
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
            placeMarkerInMatrix(clickedBox.path[0].id, true);
            currentPlayer = !currentPlayer;
            
        } else {
            //Place an Y since it is the second Player
            document.getElementById(clickedBox.path[0].id)
            .textContent = 'O';
            placeMarkerInMatrix(clickedBox.path[0].id, false);
            currentPlayer = !currentPlayer;
        }
    }
}






var moveCount = 0;
function placeMarkerInMatrix(clickedDivID, XorO) {
    console.log(clickedDivID, XorO);
    // ------- FIRST COLUMN -------------------
    if (clickedDivID === 'col1_box1') {
        boardMatrix[0][0].push(XorO);
        console.log(boardMatrix);
        checkForWinners(clickedDivID, XorO);
        moveCount++;
    }
    if (clickedDivID === 'col1_box2') {
        boardMatrix[1][0].push(XorO);
        console.log(boardMatrix);
        checkForWinners(clickedDivID, XorO);
        moveCount++;
    }
    if (clickedDivID === 'col1_box3') {
        boardMatrix[2][0].push(XorO);
        console.log(boardMatrix);
        checkForWinners(clickedDivID, XorO);
        moveCount++;
    }
    // ------- SECOND COLUMN -------------------
    if (clickedDivID === 'col2_box1') {
        boardMatrix[0][1].push(XorO);
        console.log(boardMatrix);
        checkForWinners(clickedDivID, XorO);
        moveCount++;
    }
    if (clickedDivID === 'col2_box2') {
        boardMatrix[1][1].push(XorO);
        console.log(boardMatrix);
        checkForWinners(clickedDivID, XorO);
        moveCount++;
    }
    if (clickedDivID === 'col2_box3') {
        boardMatrix[2][1].push(XorO);
        console.log(boardMatrix);
        checkForWinners(clickedDivID, XorO);
        moveCount++;
    }
    // ------- THIRD COLUMN -------------------
    if (clickedDivID === 'col3_box1') {
        boardMatrix[0][2].push(XorO);
        console.log(boardMatrix);
        checkForWinners(clickedDivID, XorO);
        moveCount++;
    }
    if (clickedDivID === 'col3_box2') {
        boardMatrix[1][2].push(XorO);
        console.log(boardMatrix);
        checkForWinners(clickedDivID, XorO);
        moveCount++;
    }
    if (clickedDivID === 'col3_box3') {
        boardMatrix[2][2].push(XorO);
        console.log(boardMatrix);
        checkForWinners(clickedDivID, XorO);
        moveCount++;
    }
    console.log(moveCount);
    if (moveCount === 9) {
        resetBoard();
    }
}

checkForWinners = (clickedDivID, XorO) => {
    // console.log('check winners');
    // if ((boardMatrix[0][0][0] === true && boardMatrix[0][1][0] === true && boardMatrix[0][2][0] === true) || (boardMatrix[0][0][0] === false && boardMatrix[0][1][0] === false && boardMatrix[0][2][0] === false)) {
    //     console.log('win');
// ---------------- ROW ONE WIN CONDITION --------------------
    if (boardMatrix[0][0][0] === true && 
        boardMatrix[0][1][0] === true &&
        boardMatrix[0][2][0] === true ||
        (boardMatrix[0][0][0] === false && 
        boardMatrix[0][1][0] === false &&
        boardMatrix[0][2][0] === false)) {
            if (currentPlayer === true) {
                winner = 'Player 1 Wins!!';
            } else {
                winner = 'Player 2 Wins!!';
            }
            setTimeout(() => {
                alert(winner)
                resetBoard();
            } , 5)
    }
// ---------------- ROW TWO WIN CONDITION --------------------
    if (boardMatrix[1][0][0] === true && 
        boardMatrix[1][1][0] === true &&
        boardMatrix[1][2][0] === true ||
        (boardMatrix[1][0][0] === false && 
        boardMatrix[1][1][0] === false &&
        boardMatrix[1][2][0] === false)) {
            if (currentPlayer === true) {
                winner = 'Player 1 Wins!!';
            } else {
                winner = 'Player 2 Wins!!';
            }
            setTimeout(() => {
                alert(winner)
                resetBoard();
            } , 5)
    }

// ---------------- ROW THREE WIN CONDITION --------------------
    if (boardMatrix[2][0][0] === true && 
        boardMatrix[2][1][0] === true &&
        boardMatrix[2][2][0] === true ||
        (boardMatrix[2][0][0] === false && 
        boardMatrix[2][1][0] === false &&
        boardMatrix[2][2][0] === false)) {
            if (currentPlayer === true) {
                winner = 'Player 1 Wins!!';
            } else {
                winner = 'Player 2 Wins!!';
            }
            setTimeout(() => {
                alert(winner)
                resetBoard();
            } , 5)
    }

// ---------------- COLUMN ONE WIN CONDITION --------------------
    if (boardMatrix[0][0][0] === true && 
        boardMatrix[1][0][0] === true &&
        boardMatrix[2][0][0] === true ||
        (boardMatrix[0][0][0] === false && 
        boardMatrix[1][0][0] === false &&
        boardMatrix[2][0][0] === false)) {
            if (currentPlayer === true) {
                winner = 'Player 1 Wins!!';
            } else {
                winner = 'Player 2 Wins!!';
            }
            setTimeout(() => {
                alert(winner)
                resetBoard();
            } , 5)
    }
    
// ---------------- COLUMN TWO WIN CONDITION --------------------
    if (boardMatrix[0][1][0] === true && 
        boardMatrix[1][1][0] === true &&
        boardMatrix[2][1][0] === true ||
        (boardMatrix[0][1][0] === false && 
        boardMatrix[1][1][0] === false &&
        boardMatrix[2][1][0] === false)) {
            if (currentPlayer === true) {
                winner = 'Player 1 Wins!!';
            } else {
                winner = 'Player 2 Wins!!';
            }
            setTimeout(() => {
                alert(winner)
                resetBoard();
            } , 5)
    }
// ---------------- COLUMN TWO WIN CONDITION --------------------
    if (boardMatrix[0][2][0] === true && 
        boardMatrix[1][2][0] === true &&
        boardMatrix[2][2][0] === true ||
        (boardMatrix[0][2][0] === false && 
        boardMatrix[1][2][0] === false &&
        boardMatrix[2][2][0] === false)) {
            if (currentPlayer === true) {
                winner = 'Player 1 Wins!!';
            } else {
                winner = 'Player 2 Wins!!';
            }
            setTimeout(() => {
                alert(winner)
                resetBoard();
            } , 5)
    }

    // ---------------- MAJOR DIAGONAL WIN CONDITION --------------------
    if (boardMatrix[0][0][0] === true && 
        boardMatrix[1][1][0] === true &&
        boardMatrix[2][2][0] === true ||
        (boardMatrix[0][0][0] === false && 
        boardMatrix[1][1][0] === false &&
        boardMatrix[2][2][0] === false)) {
            if (currentPlayer === true) {
                winner = 'Player 1 Wins!!';
            } else {
                winner = 'Player 2 Wins!!';
            }
            setTimeout(() => {
                alert(winner)
                resetBoard();
            } , 5)
    }
    // ---------------- MINOR DIAGONAL WIN CONDITION --------------------
    if (boardMatrix[0][2][0] === true && 
        boardMatrix[1][1][0] === true &&
        boardMatrix[2][0][0] === true ||
        (boardMatrix[0][2][0] === false && 
        boardMatrix[1][1][0] === false &&
        boardMatrix[2][0][0] === false)) {
            if (currentPlayer === true) {
                winner = 'Player 1 Wins!!';
            } else {
                winner = 'Player 2 Wins!!';
            }
            setTimeout(() => {
                alert(winner)
                console.log('hi');
                resetBoard();
            } , 5)
    
    }
    
}
var resetBoard = () => {
    currentPlayer = true;
    winner = '';
    moveCount = 0;
    boardMatrix = [
            [[],[],[]],
            [[],[],[]],
            [[],[],[]],
        ];
    console.log(boardMatrix);
    // console.log(document.getElementById('col1').children);
    var col1 = document.getElementById('col1').children
    var col2 = document.getElementById('col2').children
    var col3 = document.getElementById('col3').children
    
    for (var i = 0; i < col1.length; i++) {
        document.getElementById(col1[i].id).innerHTML = "";
    }

    for (var i = 0; i < col2.length; i++) {
        document.getElementById(col2[i].id).innerHTML = "";
    }
    for (var i = 0; i < col3.length; i++) {
        document.getElementById(col3[i].id).innerHTML = "";
    }
    
}
