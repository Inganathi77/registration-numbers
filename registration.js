function MyFactoryFunction(){
    
    function getReg(reg){  
      var regAreaCode = reg.split(" ");

      if(regAreaCode[0] === "CA"){
          return "Cape Town"  
      }else if(regAreaCode[0] === "CY"){
          return "Bellville";
      }else if(regAreaCode[0] === "CJ"){
          return "Paarl";
      }
    }   
   
      return{
       getReg
         } 
    
}
    