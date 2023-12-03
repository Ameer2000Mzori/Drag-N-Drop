//selecting our elements
var fill = document.querySelector(".fill");
var empties = document.querySelectorAll(".empty");
// our functions
function dragStart() {
    var _this = this;
    this.className += " hold";
    setTimeout(function () { return (_this.className = "invisible"); }, 0);
}
function dragEnd() {
    this.className = "fill";
    console.log("drag end");
}
function dragOver(e) {
    e.preventDefault();
}
function dragEnter() {
    this.className += " hovered";
}
function dragLeave() {
    this.className = "empty";
    console.log("drag leave");
}
function dragDrop() {
    this.className = "empty";
    if (fill) {
        this.append(fill);
    }
}
///////////////////////our event lisnters
// checking first if we have the elements
if (fill) {
    fill.addEventListener("dragstart", dragStart);
    fill.addEventListener("dragend", dragEnd);
}
// loop over each empty
for (var _i = 0, empties_1 = empties; _i < empties_1.length; _i++) {
    var empty = empties_1[_i];
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}
