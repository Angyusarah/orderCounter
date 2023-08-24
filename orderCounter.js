
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

console.log(countEl)

let count = 0;

//Making the order button responsive
function increment() {
  count += 1;
  countEl.textContent = count

}

//making the save button responsive
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
