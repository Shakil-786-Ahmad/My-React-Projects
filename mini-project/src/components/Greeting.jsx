import React from "react";

let greet = "";
// let time = new Date(2023, 10, 4, 20);
let time = new Date();
time = time.getHours();

if(time>=0 && time <12){
    greet = "Good Morning";
}
else if(time >= 12 && time <16){
    greet = "Good Afternoon";
}
else if(time >=16 && time <=19){
    greet="Good Evening";
}
else{
    greet = "Good night";
}

function Greeting(){
    return(
        <>
            {greet}
        </>
    )
}

export default Greeting;