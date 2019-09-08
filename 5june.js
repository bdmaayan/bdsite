var damka =
    [
        [4, 2, 4, 2, 4, 2, 4, 2],
        [2, 4, 2, 4, 2, 4, 2, 4],
        [4, 2, 4, 2, 4, 2, 4, 2],
        [0, 4, 0, 4, 0, 4, 0, 4],
        [4, 0, 4, 0, 4, 0, 4, 0],
        [1, 4, 1, 4, 1, 4, 1, 4],
        [4, 1, 4, 1, 4, 1, 4, 1],
        [1, 4, 1, 4, 1, 4, 1, 4],
    ];
function F() {
    var num = 0;
    var clr = "";
    var text = "<table align='center' border='1'>";
    var sh, am;
    for (sh = 0; sh < 8; sh++) {
        text = text+ "<tr align='center'>";
        for (am = 0; am < 8; am++) {
            clr = "rgb(" + damka[sh][am] * 85 + "," + damka[sh][am] * 125 + "," + damka[sh][am] * 255 + ")";
            text = text+"<td id='" + num + "' onclick='M(this);' height='65px' width='65px' style='background-color:" +
                clr + "; color:" + clr + ";'>" + "<font size='9'>" + "</font>" + "</td>";
            num++;
        }
        text = text+ "</tr>";
    }
    text = text+"</table>";
    document.getElementById("pp").innerHTML = text;
    document.getElementById("damka").innerHTML = "lightblue's turn";
}
var lastRow=8;
var lastCol = 8;
var lastId;
var lastthis;
var turn = true;
function M(thiss) {
    var placeholder;
    var currentId = thiss.id;
    var currentRow = Math.floor(currentId / 8);
    var currentCol = currentId % 8;
    if (turn) {//תור של 2
        if (lastRow == 8) {//לחיצה ראשונה
            if (damka[currentRow][currentCol] != 2) {
                alert("you must chose a square with a light peace on it");
            }
            else {
                lastCol = currentCol;
                lastRow = currentRow;
                lastId = currentId;
                lastthis = thiss;
            }
        }
        else {//לחיצה שניה
            if ((currentRow + 1) - (1 + lastRow) === 1 && damka[currentRow][currentCol] == 0) {
                if ((1 + currentCol) - (1 + lastCol) == 1 || (1 + currentCol) - (1 + lastCol) == -1) {
                    placeholder = damka[currentRow][currentCol];
                    damka[currentRow][currentCol] = damka[lastRow][lastCol];
                    damka[lastRow][lastCol] = placeholder;

                    lastthis.style.backgroundColor = "black";
                    thiss.style.backgroundColor = "rgb(170, 250, 255)";
                    turn = !turn;
                    document.getElementById("damka").innerHTML = "blue's turn";
                    winl(thiss);
                }
                else {
                    alert("illigal movement")
                }
            }
            else if ((currentRow + 1) - (1 + lastRow) === 2 && damka[currentRow][currentCol] == 0) {
                if ((1 + currentCol) - (1 + lastCol) == 2 && damka[currentRow - 1][currentCol - 1] == 1) {
                    placeholder = damka[currentRow][currentCol];
                    damka[currentRow][currentCol] = damka[lastRow][lastCol];
                    damka[lastRow][lastCol] = placeholder;
                    lastthis.style.backgroundColor = "black";
                    thiss.style.backgroundColor = "rgb(170, 250, 255)";
                    turn = !turn;
                    document.getElementById("damka").innerHTML = "blue's turn";
                    damka[currentRow - 1][currentCol - 1] = 0;
                    var int = ((currentRow - 1) * 8) + (currentCol - 1);
                    document.getElementById(int).style.backgroundColor = "black";
                    winl(thiss);
                }
                else if ((1 + currentCol) - (1 + lastCol) == -2 && damka[currentRow - 1][currentCol + 1] == 1) {
                    placeholder = damka[currentRow][currentCol];
                    damka[currentRow][currentCol] = damka[lastRow][lastCol];
                    damka[lastRow][lastCol] = placeholder;
                    lastthis.style.backgroundColor = "black";
                    thiss.style.backgroundColor = "rgb(170, 250, 255)";
                    turn = !turn;
                    document.getElementById("damka").innerHTML = "blue's turn";
                    damka[currentRow - 1][currentCol + 1] = 0;
                    var int = ((currentRow - 1) * 8) + (currentCol + 1);
                    document.getElementById(int).style.backgroundColor = "black";
                    winl(thiss);
                }
            }
            else {
                alert("illigal movement")
            }
            lastRow = 8;
            lastCol = 8;
        }
    }
    else {//תור של 1
        if (lastRow == 8) {//לחיצה ראשונה
            if (damka[currentRow][currentCol] != 1) {
                alert("you must chose a square with a dark peace on it");
            }
            else {
                lastCol = currentCol;
                lastRow = currentRow;
                lastId = currentId;
                lastthis = thiss;
            }
        }
        else {//לחיצה שניה
            if ((currentRow + 1) - (1 + lastRow) === -1 && damka[currentRow][currentCol] == 0) {
                if ((1 + currentCol) - (1 + lastCol) == 1 || (1 + currentCol) - (1 + lastCol) == -1) {
                    placeholder = damka[currentRow][currentCol];
                    damka[currentRow][currentCol] = damka[lastRow][lastCol];
                    damka[lastRow][lastCol] = placeholder;
                    lastthis.style.backgroundColor = "black";
                    thiss.style.backgroundColor = "rgb(85, 125, 255)";
                    turn = !turn;
                    document.getElementById("damka").innerHTML = "lightblue's turn";
                    winb(thiss);
                }
                else {
                    alert("illigal movement")
                }
            }
            else if ((currentRow + 1) - (1 + lastRow) === -2 && damka[currentRow][currentCol] == 0) {
                if ((1 + currentCol) - (1 + lastCol) == 2 && damka[currentRow + 1][currentCol - 1] ==2) {
                    placeholder = damka[currentRow][currentCol];
                    damka[currentRow][currentCol] = damka[lastRow][lastCol];
                    damka[lastRow][lastCol] = placeholder;
                    lastthis.style.backgroundColor = "black";
                    thiss.style.backgroundColor = "rgb(85, 125, 255)";
                    turn = !turn;
                    document.getElementById("damka").innerHTML = "lightblue's turn";
                    damka[currentRow + 1][currentCol - 1] = 0;
                    var int = ((currentRow + 1) * 8) + (currentCol - 1);
                    document.getElementById(int).style.backgroundColor = "black";
                    winb(thiss);
                }
                else if ((1 + currentCol) - (1 + lastCol) == -2 && damka[currentRow + 1][currentCol + 1] ==2) {
                    placeholder = damka[currentRow][currentCol];
                    damka[currentRow][currentCol] = damka[lastRow][lastCol];
                    damka[lastRow][lastCol] = placeholder;
                    lastthis.style.backgroundColor = "black";
                    thiss.style.backgroundColor = "rgb(85, 125, 255)";
                    turn = !turn;
                    document.getElementById("damka").innerHTML = "lightblue's turn";
                    damka[currentRow + 1][currentCol + 1] = 0;
                    var int = ((currentRow + 1) * 8) + (currentCol + 1);
                    document.getElementById(int).style.backgroundColor = "black";
                    winb(thiss);
                }
            }
            else
            {
                alert("illigal movement")
            }
            lastRow = 8;
            lastCol = 8;
        }
    }
}
function winb(thiss) {
    if (thiss.id < 8) {
        //document.getElementById("pp").innerHTML = "";
        //document.getElementById("damka").innerHTML = "blue won!!!";
        damka[Math.floor(thiss.id / 8)][thiss.id % 8] = 6;
        thiss.style.borderColor = "yellow";
        thiss.border = "4";

    }
}
function winl(thiss) {
    if (thiss.id > 55) {
        damka[Math.floor(thiss.id / 8)][thiss.id % 8] = 5;
        thiss.style.borderColor = "yellow";
        //thiss.border = "4";
        thiss.style.borderSize = "8px";
    }
}
