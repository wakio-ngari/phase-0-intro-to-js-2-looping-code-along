function countDown(begin){
for (let x = 10; x>= 0; x--){
    console.log(x);
}
}

function writeCards(names){
    let messages=[];
    for (let i =0;i<names.length; i++){
        messages [i]=`Thank you, ${names[i]}, for the wonderful surprise gift!`;
    }
return messages;
}
   const names=["Guadalupe","Ollie","Aki"];

   console.log(writeCards(names))
