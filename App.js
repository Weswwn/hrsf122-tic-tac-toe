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
    if (clickedDivID === 'col1_box1') {
        console.log('hi');
        boardMatrix[0][0].push(XorO);
    }

}