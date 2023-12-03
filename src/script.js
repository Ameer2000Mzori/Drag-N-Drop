var fill = document.querySelector(".fill");
var empties = document.querySelectorAll(".empty");
if (fill) {
    fill.addEventListener("dragstart", dragStart);
    fill.addEventListener("dragend", dragEnd);
}
for (var _i = 0, empties_1 = empties; _i < empties_1.length; _i++) {
    var empty = empties_1[_i];
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}
function dragStart() {
    var _this = this;
    this.className += " hold";
    setTimeout(function () { return (_this.className = "invisible"); }, 0);
}
function dragEnd() {
    this.className = "fill";
}
function dragOver(e) {
    e.preventDefault();
}
function dragEnter() {
    this.className += " hovered";
}
function dragLeave() {
    this.className = "empty";
}
function dragDrop() {
    this.className = "empty";
    if (fill) {
        this.append(fill);
    }
}
