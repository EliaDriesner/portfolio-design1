date = new Date();
let hour = date.getHours();
console.log(hour);
//get the date

if(hour == 18 || hour == 19 || hour == 20 || hour == 21 || hour == 22){
    document.querySelector("#message").innerHTML = "Guten Abend"; 
}
    else if(hour == 23 || hour == 24 || hour == 0 || hour == 1 || hour == 2 || hour == 3 || hour == 4){
        document.querySelector("#message").innerHTML = "Gute Nacht"; 
    }
        else if(hour == 5 || hour == 6 || hour == 7 || hour == 8 || hour == 9  || hour == 10){
            document.querySelector("#message").innerHTML = "Guten Morgen"; 
        }
    else if(hour == 11 || hour == 12 || hour == 13 ){
        document.querySelector("#message").innerHTML = "Guten Morgen"; 
    }
else if(hour == 14 || hour == 15 || hour == 16 || hour == 17){
    document.querySelector("#message").innerHTML = "Guten Nachmittag"; 
}
//set message