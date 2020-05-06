new Vue({
   el: '#databinding',
   data: {
     name:'',
     currencyfrom : [
       {name : "USD", desc:"US Dollar"},
       {name:"EUR", desc:"Euro"},
       {name:"PLN", desc:"Zloty"},
       
       ],
     convertfrom: "PLN",
     convertto:"USD",
     amount :""
   },
   computed :{
     finalamount:function() {
       var to = this.convertto;
       var from = this.convertfrom;
       var final;
       switch(from) {
         case "PLN":
           if (to == "USD") {
             final = this.amount * 0.24;
           }
           if (to == "EUR") {
             final = this.amount * 0.22;
           }
           if (to == "PLN") {
             final = this.amount;
           }
           
           break;
         case "USD":
           if (to == "PLN") {
             final = this.amount * 4.16;
           }
           if (to == "EUR") {
             final = this.amount * 0.91;
           }
           if (to == "USD") {
             final = this.amount;
           }
           
           break;
         case "EUR":
           if (to == "PLN") {
             final = this.amount * 4.55;
           }
           if (to == "USD") {
             final = this.amount * 1.09;
           }
           if (to == "EUR") {
             final = this.amount;
           }
           
           break;
          }
       return final;
     }
   }
 });