let showSearchAdvance = document.getElementById("show_search_advance");
let counter = 0
showSearchAdvance.onclick = function onSearchAdvance() {
    if (counter % 2 == 0) {
        document.getElementById("search_advance").style.display = "block";
        showSearchAdvance.innerText = "Bo Tim kiem nang cao";
    } else {
        document.getElementById("search_advance").style.display = "none";
        showSearchAdvance.innerText = "Tim kiem nang cao";
    }
    counter ++
}
