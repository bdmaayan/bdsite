var images = ["img/black.jpg", "img/p1.jpg", "img/p2.jpg", "", "img/white.png", "img/king2.jpg", "img/king1.jpg"];
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
var amountoflb = 0;
var amountofb = 0;
function R() {
    location.reload();
}
function F() {
    var num = 0;
    var textimagetag = "";
    var text = "<table align='center' border='1' style='background-color:black;'>";
    var sh, am;
    for (sh = 0; sh < 8; sh++) {
        text = text+ "<tr align='center'>";
        for (am = 0; am < 8; am++) {
            textimagetag = "<img src='" + images[damka[sh][am]] + "' height=65 width=65 />";
            text = text + "<td id='" + num + "' onclick='M(this);'>" + textimagetag + "</td>";
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
            if (damka[currentRow][currentCol] != 2 && damka[currentRow][currentCol] != 5) {
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
            if ((currentRow + 1) - (1 + lastRow) === 1 && damka[currentRow][currentCol] == 0) {//הזזה
                if ((1 + currentCol) - (1 + lastCol) == 1 || (1 + currentCol) - (1 + lastCol) == -1) {
                    placeholder = damka[currentRow][currentCol];
                    damka[currentRow][currentCol] = damka[lastRow][lastCol];
                    damka[lastRow][lastCol] = placeholder;
                    document.getElementById(lastId).innerHTML = "<img src='" + images[0] + "' height=65 width=65 />";
                    document.getElementById(currentId).innerHTML = "<img src='" + images[damka[currentRow][currentCol]] + "' height=65 width=65 />";
                    turn = !turn;
                    document.getElementById("damka").innerHTML = "blue's turn";
                    winl(thiss);
                }
                else {
                    alert("illigal movement")
                }
            }
            else if ((currentRow + 1) - (1 + lastRow) === 2 && damka[currentRow][currentCol] == 0) {//אכילה
                if ((1 + currentCol) - (1 + lastCol) == 2 && damka[currentRow - 1][currentCol - 1] == 1 || damka[currentRow - 1][currentCol - 1] == 6) {
                    placeholder = damka[currentRow][currentCol];
                    damka[currentRow][currentCol] = damka[lastRow][lastCol];
                    damka[lastRow][lastCol] = placeholder;
                    document.getElementById(lastId).innerHTML = "<img src='" + images[0] + "' height=65 width=65 />";
                    document.getElementById(currentId).innerHTML = "<img src='" + images[damka[currentRow][currentCol]] + "' height=65 width=65 />";
                    turn = !turn;
                    document.getElementById("damka").innerHTML = "blue's turn";
                    damka[currentRow - 1][currentCol - 1] = 0;
                    var int = ((currentRow - 1) * 8) + (currentCol - 1);
                    document.getElementById(int).innerHTML = "<img src='" + images[0] + "' height=65 width=65 />";
                    winl(thiss);
                    amountofb++;
                    if (amountofb == 12) {
                        alert("light blue won!!!");
                        location.reload();
                    }
                }
                else if ((1 + currentCol) - (1 + lastCol) == -2 && damka[currentRow - 1][currentCol + 1] == 1 || damka[currentRow - 1][currentCol + 1] == 6) {
                    placeholder = damka[currentRow][currentCol];
                    damka[currentRow][currentCol] = damka[lastRow][lastCol];
                    damka[lastRow][lastCol] = placeholder;
                    document.getElementById(lastId).innerHTML = "<img src='" + images[0] + "' height=65 width=65 />";
                    document.getElementById(currentId).innerHTML = "<img src='" + images[damka[currentRow][currentCol]] + "' height=65 width=65 />";
                    turn = !turn;
                    document.getElementById("damka").innerHTML = "blue's turn";
                    damka[currentRow - 1][currentCol + 1] = 0;
                    var int = ((currentRow - 1) * 8) + (currentCol + 1);
                    document.getElementById(int).innerHTML = "<img src='" + images[0] + "' height=65 width=65 />";
                    winl(thiss);
                    amountofb++;
                    if (amountofb == 12) {
                        alert("light blue won!!!");
                        location.reload();
                    }
                }
            }
            else if ((currentRow + 1) - (1 + lastRow) === -1 && damka[currentRow][currentCol] == 0 && damka[lastRow][lastCol] == 5) {
                if ((1 + currentCol) - (1 + lastCol) == 1 || (1 + currentCol) - (1 + lastCol) == -1) {
                    placeholder = damka[currentRow][currentCol];
                    damka[currentRow][currentCol] = damka[lastRow][lastCol];
                    damka[lastRow][lastCol] = placeholder;

                    document.getElementById(lastId).innerHTML = "<img src='" + images[0] + "' height=65 width=65 />";
                    document.getElementById(currentId).innerHTML = "<img src='" + images[5] + "' height=65 width=65 />";
                    turn = !turn;
                    document.getElementById("damka").innerHTML = "blue's turn";
                    winl(thiss);
                }
                else {
                    alert("illigal movement")
                }
            }//הזזת מלך
            else if ((currentRow + 1) - (1 + lastRow) === -2 && damka[currentRow][currentCol] == 0 && damka[lastRow][lastCol] == 5) {//אכילה עם מלך
                if ((1 + currentCol) - (1 + lastCol) == 2 && damka[currentRow + 1][currentCol - 1] == 1 || damka[currentRow + 1][currentCol - 1] == 6) {
                    placeholder = damka[currentRow][currentCol];
                    damka[currentRow][currentCol] = damka[lastRow][lastCol];
                    damka[lastRow][lastCol] = placeholder;
                    document.getElementById(lastId).innerHTML = "<img src='" + images[0] + "' height=65 width=65 />";
                    document.getElementById(currentId).innerHTML = "<img src='" + images[5] + "' height=65 width=65 />";
                    turn = !turn;
                    document.getElementById("damka").innerHTML = "blue's turn";
                    damka[currentRow + 1][currentCol - 1] = 0;
                    var int = ((currentRow + 1) * 8) + (currentCol - 1);
                    document.getElementById(int).innerHTML = "<img src='" + images[0] + "' height=65 width=65 />";
                    winl(thiss);
                    amountofb++;
                    if (amountofb == 12) {
                        alert("light blue won!!!");
                        location.reload();
                    }
                }
                else if ((1 + currentCol) - (1 + lastCol) == -2 && damka[currentRow + 1][currentCol + 1] == 1 || damka[currentRow + 1][currentCol + 1] == 6) {
                    placeholder = damka[currentRow][currentCol];
                    damka[currentRow][currentCol] = damka[lastRow][lastCol];
                    damka[lastRow][lastCol] = placeholder;
                    document.getElementById(lastId).innerHTML = "<img src='" + images[0] + "' height=65 width=65 />";
                    document.getElementById(currentId).innerHTML = "<img src='" + images[5] + "' height=65 width=65 />";
                    turn = !turn;
                    document.getElementById("damka").innerHTML = "blue's turn";
                    damka[currentRow + 1][currentCol + 1] = 0;
                    var int = ((currentRow + 1) * 8) + (currentCol + 1);
                    document.getElementById(int).innerHTML = "<img src='" + images[0] + "' height=65 width=65 />";
                    winl(thiss);
                    amountofb++;
                    if (amountofb == 12) {
                        alert("light blue won!!!");
                        location.reload();
                    }
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
            if (damka[currentRow][currentCol] != 1 && damka[currentRow][currentCol] != 6) {
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
            if ((currentRow + 1) - (1 + lastRow) === -1 && damka[currentRow][currentCol] == 0) {//הזזה
                if ((1 + currentCol) - (1 + lastCol) == 1 || (1 + currentCol) - (1 + lastCol) == -1) {
                    placeholder = damka[currentRow][currentCol];
                    damka[currentRow][currentCol] = damka[lastRow][lastCol];
                    damka[lastRow][lastCol] = placeholder;
                    document.getElementById(lastId).innerHTML = "<img src='" + images[0] + "' height=65 width=65 />";
                    document.getElementById(currentId).innerHTML = "<img src='" + images[damka[currentRow][currentCol]] + "' height=65 width=65 />";
                    turn = !turn;
                    document.getElementById("damka").innerHTML = "lightblue's turn";
                    winb(thiss);
                }
                else {
                    alert("illigal movement")
                }
            }
            else if ((currentRow + 1) - (1 + lastRow) === -2 && damka[currentRow][currentCol] == 0) {//אכילה
                if ((1 + currentCol) - (1 + lastCol) == 2 && damka[currentRow + 1][currentCol - 1] == 2 || damka[currentRow + 1][currentCol - 1] == 5) {
                    placeholder = damka[currentRow][currentCol];
                    damka[currentRow][currentCol] = damka[lastRow][lastCol];
                    damka[lastRow][lastCol] = placeholder;
                    document.getElementById(lastId).innerHTML = "<img src='" + images[0] + "' height=65 width=65 />";
                    document.getElementById(currentId).innerHTML = "<img src='" + images[damka[currentRow][currentCol]] + "' height=65 width=65 />";
                    turn = !turn;
                    document.getElementById("damka").innerHTML = "lightblue's turn";
                    damka[currentRow + 1][currentCol - 1] = 0;
                    var int = ((currentRow + 1) * 8) + (currentCol - 1);
                    document.getElementById(int).innerHTML = "<img src='" + images[0] + "' height=65 width=65 />";
                    winb(thiss);
                    amountoflb++;
                    if (amountoflb == 12) {
                        alert("blue won!!!");
                        location.reload();
                    }
                }
                else if ((1 + currentCol) - (1 + lastCol) == -2 && damka[currentRow + 1][currentCol + 1] == 2 || damka[currentRow + 1][currentCol + 1] == 5) {
                    placeholder = damka[currentRow][currentCol];
                    damka[currentRow][currentCol] = damka[lastRow][lastCol];
                    damka[lastRow][lastCol] = placeholder;
                    document.getElementById(lastId).innerHTML = "<img src='" + images[0] + "' height=65 width=65 />";
                    document.getElementById(currentId).innerHTML = "<img src='" + images[damka[currentRow][currentCol]] + "' height=65 width=65 />";
                    turn = !turn;
                    document.getElementById("damka").innerHTML = "lightblue's turn";
                    damka[currentRow + 1][currentCol + 1] = 0;
                    var int = ((currentRow + 1) * 8) + (currentCol + 1);
                    document.getElementById(int).innerHTML = "<img src='" + images[0] + "' height=65 width=65 />";
                    winb(thiss);
                    amountoflb++;
                    if (amountoflb == 12) {
                        alert("blue won!!!");
                        location.reload();
                    }
                }
            }
            else if ((currentRow + 1) - (1 + lastRow) === 1 && damka[currentRow][currentCol] == 0 && damka[lastRow][lastCol]==6) {//הזזת מלך
                if ((1 + currentCol) - (1 + lastCol) == 1 || (1 + currentCol) - (1 + lastCol) == -1) {
                    placeholder = damka[currentRow][currentCol];
                    damka[currentRow][currentCol] = damka[lastRow][lastCol];
                    damka[lastRow][lastCol] = placeholder;
                    document.getElementById(lastId).innerHTML = "<img src='" + images[0] + "' height=65 width=65 />";
                    document.getElementById(currentId).innerHTML = "<img src='" + images[6] + "' height=65 width=65 />";
                    turn = !turn;
                    document.getElementById("damka").innerHTML = "lightblue's turn";
                    winb(thiss);
                }
                else {
                    alert("illigal movement")
                }
            }
            else if ((currentRow + 1) - (1 + lastRow) === 2 && damka[currentRow][currentCol] == 0 && damka[lastRow][lastCol]==6) {//אכילה עם מלך
                if ((1 + currentCol) - (1 + lastCol) == 2 && damka[currentRow - 1][currentCol - 1] == 2 || damka[currentRow - 1][currentCol + 1] == 5) {
                    placeholder = damka[currentRow][currentCol];
                    damka[currentRow][currentCol] = damka[lastRow][lastCol];
                    damka[lastRow][lastCol] = placeholder;
                    document.getElementById(lastId).innerHTML = "<img src='" + images[0] + "' height=65 width=65 />";
                    document.getElementById(currentId).innerHTML = "<img src='" + images[6] + "' height=65 width=65 />";
                    turn = !turn;
                    document.getElementById("damka").innerHTML = "lightblue's turn";
                    damka[currentRow - 1][currentCol - 1] = 0;
                    var int = ((currentRow - 1) * 8) + (currentCol - 1);
                    document.getElementById(int).innerHTML = "<img src='" + images[0] + "' height=65 width=65 />";
                    winb(thiss);
                    amountoflb++;
                    if (amountoflb == 12) {
                        alert("blue won!!!");
                        location.reload();
                    }
                }
                else if ((1 + currentCol) - (1 + lastCol) == -2 && damka[currentRow - 1][currentCol + 1] == 2 || damka[currentRow - 1][currentCol + 1] == 5) {
                    placeholder = damka[currentRow][currentCol];
                    damka[currentRow][currentCol] = damka[lastRow][lastCol];
                    damka[lastRow][lastCol] = placeholder;
                    document.getElementById(lastId).innerHTML = "<img src='" + images[0] + "' height=65 width=65 />";
                    document.getElementById(currentId).innerHTML = "<img src='" + images[6] + "' height=65 width=65 />";
                    turn = !turn;
                    document.getElementById("damka").innerHTML = "lightblue's turn";
                    damka[currentRow - 1][currentCol + 1] = 0;
                    var int = ((currentRow - 1) * 8) + (currentCol + 1);
                    document.getElementById(int).innerHTML = "<img src='" + images[0] + "' height=65 width=65 />";
                    winb(thiss);
                    amountoflb++;
                    if (amountoflb == 12) {
                        alert("blue won!!!");
                        location.reload();
                    }
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
        damka[Math.floor(thiss.id / 8)][thiss.id % 8] = 6;
        document.getElementById(thiss.id).innerHTML = "<img src='" + images[6] + "' height=65 width=65 />";
    }
}
function winl(thiss) {
    if (thiss.id > 55) {
        damka[Math.floor(thiss.id / 8)][thiss.id % 8] = 5;
        document.getElementById(thiss.id).innerHTML = "<img src='" + images[5] + "' height=65 width=65 />";
    }
}
