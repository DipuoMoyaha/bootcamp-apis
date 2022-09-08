export default  function shortestWord(str){
    var words=str.split(' ');
    var shortWord=10;
  var short = ''
    for(var i=0;i<words.length;i++){
      let word = words[i];
        if (word.length <= shortWord){
           shortWord =word.length
          short = word
        }

        

    }
 console.log(short)
    return short;
}
