
// create a variable and initialize the count to zezo
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count in the HTML to reflect the new count 

let saveEl = document.getElementById("save-el");
//let countEl = document.getElementById("save-el");

let countEl = document.getElementById("countEl");

let count = 0;

console.log(countEl);

function increment(){
    count+=1;
    countEl.innerText = count;

}

function save(){
     let countStr = count + " - "
     saveEl.textContent += countStr
     countEl.textContent =0
     count=0
     console.log(count)
}


