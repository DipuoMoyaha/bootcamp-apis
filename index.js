import express from 'express';
import longestWord from './bootcamp/longestWord.js';
import shortestWord from './bootcamp/shortestWord.js';
import wordLengths from './bootcamp/wordLengths.js';
import enoughAirtime from './bootcamp/enoughAirtime.js'
import totalPhoneBill from './bootcamp/totalPhoneBill.js'
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

let smsprice= 0.65;
let callprice = 2.75;

app.get('/api/word_game', function (req, res) {
    const sentence = req.query.sentence;

    if (!sentence) {
        res.json({
            error: 'please send in a sentence to analyze'
        })
    };
    res.json({
        "longestWord": longestWord(sentence),
        "shortestWord": shortestWord(sentence),
        "sum": wordLengths(sentence),

    });
});

app.post('/api/phonebill/total', function(req, res){
    const bill =req.body.bill;
console.log(req.body)
    res.json({
"total":totalPhoneBill(bill),
    });
});


app.get('/api/phonebill/prices', function(req,res){
    const prices = req.body.prices

res.json({
    "call":callprice,
    "sms": smsprice
})

});

app.post('/api/phonebill/price', function(req,res){
const type = req.body.type;
const price = req.body.price;
if(type === 'sms') {
    smsprice = price
}
else if(type === 'call') {
    callprice = price
}
res.json ({
    type, price
})
});

app.post('/api/phonebill',(req,res)=>{
    const{bill,sms_price,call_price}=req.body
    callprice=Number(call_price)
    smsprice=Number(sms_price)
     let total = totalPhoneBill(bill, smsprice, callprice)
      res.json({
        total,
        callprice,
        smsprice
      })
})


app.post('/api/enough', function(req,res){
    const usage = req.body.usage;
    const available = req.body.available;

    res.json({
        "result": enoughAirtime(usage,available)
    })
})



let PORT = process.env.PORT || 6007

app.listen(PORT, function () {
    console.log('api is started on the port', PORT)
});

