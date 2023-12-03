//selecting our elements
const fill: HTMLElement | null = document.querySelector(".fill");
const empties: NodeListOf<HTMLElement> = document.querySelectorAll(".empty");

// our functions
function dragStart(this: HTMLElement): void {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd(this: HTMLElement): void {
  this.className = "fill";
  console.log("drag end");
}

function dragOver(e: DragEvent): void {
  e.preventDefault();
}

function dragEnter(this: HTMLElement): void {
  this.className += " hovered";
}

function dragLeave(this: HTMLElement): void {
  this.className = "empty";
  console.log("drag leave");
}

function dragDrop(this: HTMLElement): void {
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
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}
