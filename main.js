const header= document.getElementById("header");
const bottom= document.getElementById('bottom');
const button= document.getElementById("btn");
const buttonBack= document.getElementById("bbtn");
const reset= document.getElementById("reset");


let i=0;

const objM= [{
        header1:"I can read your mind.", 
        header2:"I know you dont believe me!",
    },
    {
        header1:"Pick a number between '01-99'.", 
        header2:"Or don't, I'm just text",
    },
    {
        header1:"Add both digits together to get a new number.",
        header2:"Ex. 14 is 1 + 4 = 5",
    },
    {
        header1:"Subtract your new number from the original number.",
        header2:"Ex. 14 - 5 = 9",
    },
    {
        header1:"find your number vs. a symble!",
        header2:" ",
    },
    {
        header1:"your number was...",
        headeer2:" "
    }];

    function npg () {
        if(i<6) {
    header.innerHTML= objM[i].header1;
    bottom.innerHTML= objM[i].header2;
        }
    };

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

let smallArray = ["W","I","N","E","R"];
let largeArray = ["!","@","#","$","%","^","&","*","(",")","-","+","=","~","?",":",">","<"];

console.log(smallArray);
console.log(largeArray);


function magic() {
    let shuffled = shuffleArray(smallArray);
    console.log(shuffled);
    let alsoShuffled = shuffleArray(largeArray);
    console.log(alsoShuffled);
    let magicArray = [];
    for(let x=01; x<100; x++){
        let s = Math.floor(Math.random()*largeArray.length);

        if (x % 9 === 0) {
            magicArray.push(smallArray[1]+"&nbsp;&nbsp;&nbsp;="+x);
        }else if (x % 9 !== 0) {
            magicArray.push(largeArray[s]+"&nbsp;&nbsp;&nbsp;="+x);
        } 
    }
    objM[4].header2= magicArray.join('\r\n');
    objM[5].header2= smallArray[1];
    return magicArray; 
    
};

console.log(magic());


button.addEventListener('click', () => {
    i++;
    console.log(i);
    if(i>5){
        i=0;
        console.log(i);
        magic();
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
    magic();
    npg();
});

npg();