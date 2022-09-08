export default function wordLengths(str){
    var words=str.split(' ');
    var WordLength=0;
  var short = ''
  var mywords = words.map(w => w.length)
    for(var i=0;i<mywords.length;i++){
    WordLength =WordLength + mywords[i]
      //let word = words[i];
        //if (word.length <= shortWord){
           //shortWord =word.length
          //short = word
        }
  console.log(short)
    return WordLength;
}