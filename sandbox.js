const header= document.getElementById("header");
const bottom= document.getElementById('bottom');
const button= document.getElementById("btn");
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



button.addEventListener('click', () => {
    i++;
    console.log(i);
    if(i>5){
        i=0;
        console.log(i);
    }
    npg();
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
