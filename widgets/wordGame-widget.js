document.addEventListener('alpine:init', () => {

    Alpine.data('wordGameWidget', function () {
  
        return {
        sentence:'',
        longWord: '',
        shortWord: '',
        wordLength: 0,
        checkSentence(){
            axios.get(`/api/word_game?sentence=${this.sentence}`)
            .then((result)=>{
                this.longWord=result.data.longestWord;
                this.shortWord=result.data.shortestWord;
                this.wordLength=result.data.sum;
            })
        }
        }
  
    });
  
  })