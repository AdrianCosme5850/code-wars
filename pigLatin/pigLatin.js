function pigIt(str){
    let regex = /[a-zA-Z]/;
      let finalString = '';
      let splitString = str.split(' ');
      splitString.forEach(word => {
        if(regex.test(word[0])){
          let newWord = word.slice(1, word.length);
          newWord += word[0] + 'ay '
          finalString += newWord;
        } else{
          finalString += word + ' ';
        }
      })
      return finalString.trim();
    }