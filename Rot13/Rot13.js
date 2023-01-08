function rot13(message){
  let finalString = ''
  for(let i = 0; i < message.length; i++){
    let charCode = message.charCodeAt(i);
    if(charCode > 64 && charCode < 91){
      charCode += 13;
      if(charCode > 90){
        charCode -= 26;
      }
    }
    if(charCode > 96 && charCode < 123){
      charCode += 13;
      if(charCode > 122){
        charCode -= 26;
      }
    }
    finalString += String.fromCharCode(charCode);
  }
  return finalString;
}