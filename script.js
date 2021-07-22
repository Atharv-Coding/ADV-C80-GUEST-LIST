let guestList = [];

function submit() {
    let inputGuestName = document.getElementById("guestName").value;
    guestList.push(inputGuestName);
    document.getElementById("displayName").innerHTML = guestList;
    document.getElementById("guestName").value = "";
}

function showList() {
    a = "";
    for (let i = 0; i < guestList.length; i++) {
        a = a + guestList[i] + "<br>";
    }
    document.getElementById("showList").innerHTML = a;
}
function sortList() {
    guestList.sort()
    a = "";
    for (let i = 0; i < guestList.length; i++) {
        a = a + guestList[i] + "<br>";
    }
    document.getElementById("showList").innerHTML = a;
}
function search() {
    searchInput = document.getElementById("searchName").value;
    count = 0;
    for (let i = 0; i < guestList.length; i++) {
        if(searchInput == guestList[i]){
            count = count + 1;
        }
    }
    document.getElementById("displaysearchTimes").innerHTML = `Your Search appeared: ${count} times!`;
}
