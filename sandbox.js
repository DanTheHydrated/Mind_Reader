const header= document.getElementById("header");
const bottom= document.getElementById('bottom');
const button= document.getElementById("btn");
const buttonBack= document.getElementById("bbtn");
const reset= document.getElementById("reset");
let i=0;

const objM= [{
        header1:"I can read your mind", 
        header2:"I know you dont believe me!"
    },
    {
        header1:"Pick a number between '01-99'", 
        header2:"Or don't, I'm just text"
    },
    {
        header1:"Add both digits together to get a new number",
        header2:"Ex. 14 is 1 + 4 = 5"
    },
    {
        header1:"Subtract your new number from the original number",
        header2:"Ex. 14 - 5 = 9"
    },
    {
        SymbalsAll:"" ,
    }];

/*
documnet.getElementById("header").innerHTML = objM[0].header1;
document.getElementById("bottom").innerHTML = objM[0].header2;
*/

function npg () {
    if(i<4) {
header.innerHTML= objM[i].header1;
bottom.innerHTML= objM[i].header2;
  //  } else if(i=4) {
  //      header
    }
};



//Magic and magic workings

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};
//arrays to shuffle
let smallArray = ["s","a","m","e","a","r","y","p","l","u"];
let largeArray = ["1","2","3","4","5","6","7","8","9","10"];

console.log(smallArray);
console.log(largeArray);



function magic() {
    let shuffled = shuffleArray(smallArray);
    console.log(shuffled);
    let alsoShuffled = shuffleArray(largeArray);
    console.log(alsoShuffled);
    let empty = [];
    for(let x=01; x<100; x++){
        if (x % 9 === 0) {
            empty.push(smallArray[1]);
        }else if (x % 9 !== 0) {
            empty.push(largeArray[1]);
        } 
    }
    return empty;
};

console.log(magic());



//button functions 

button.addEventListener('click', () => {
    i++;
    console.log(i);
    if(i>5){
        i=0;
        console.log(i);
    }
    npg();
});

buttonBack.addEventListener('click', () => {   //this may not work 
    i--;
    console.log(i);
    if(i<0){
        i=0;
        console.log(i);
    }
    npg();
});

reset.addEventListener('click', () => { //put an easter egg here if you click reset too much
    if(i!==0){
        i=0;
        console.log(i);
    }
});

npg();



/*
let pg= 0;

function newPage(){
    if (pg=0) {
        header.innerHTML= objM[0].header1;
        bottom.innerHTML= objM[0].header2;
    }
    else if (pg=1) {
        header.innerHTML= objM[2].header1;
        bottom.innerHTML= objM[2].header2;
    }
}
*/
