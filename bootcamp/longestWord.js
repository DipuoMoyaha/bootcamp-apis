export default function longestWord(str){
    var words=str.split(" ");
      var longWord=""
      var long=0;
      
  
      for (var i=0; i<words.length; i++){
        var strng =words[i]
          if(strng.length>=long){
              long=strng.length;
            longWord=strng
          }
  
      }
  
   console.log(longWord)
      return longWord;
  }
  
  
 