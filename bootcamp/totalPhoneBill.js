export default function totalPhoneBill(callsMadeSmsSent){
 var all = callsMadeSmsSent.split(",");
 var bill= 0.00;
 var sms= 0.65;
var call=2.75;
 for (var i=0;i<all.length;i++){
  var perfect = all[i].trim();
  if (perfect == "call"){
    bill = bill + 2.75;
  } 
   else {
   bill = bill + 0.65;
   }
 }
return "R" + bill.toFixed(2);
    
}