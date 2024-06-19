const start= () => {
  document.querySelector('button').addEventListener('click', HandShake);
}

const HandShake= () => {
  let number= Number.parseInt(document.myForm.number.value);
  let shake= document.querySelector('.result');

  if (number>0 && number<65){
    let options= new Array("wink","double blink","close your eyes","jump");
    let result= [];
    let rem;
    let a=0;
    let reverse

    while(number>0){
      rem = number%2;
      if (rem === 1) {
        if (a === 4) { 
         reverse= true;
        } else {
          result.push(options[a]);
        }
      }
      a++;
      number = Math.floor(number/2);
    }
    
    
    if(reverse === true){
      result.reverse();
    }
    
    shake.textContent = "Handshake: " + result.join(" , ");
  }
  else{
    shake.textContent = "enter a number between 0 and 64";
  }
}
start();