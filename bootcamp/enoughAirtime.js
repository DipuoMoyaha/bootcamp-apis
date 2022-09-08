 export default function enoughAirtime(list,bal){
  var all = list.split(",");
  var sms = 0.75;
  var call = 1.88;
  var data = 12.00;
  var bill = 0.00;
  for (var i=0;i<all.length;i++){
   
    if (all[i] == "call"){
     bill += call;
    } 
     else if (all[i] == "sms"){
     bill += sms;
     }
     else {
     bill += data; 
   	} 
    //console.log(50 -bill)
   }
   if ((bal-bill)<0){
   return "R" +0.00.toFixed(2);
   }//console.log(50 -bill)
  return "R" + (bal - bill).toFixed(2);
  console.log(bill)
}