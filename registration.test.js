describe('Registration' , function(){
    it('should return the registration area for the registration number entered CA = Cape Town' , function(){
         var instance = MyFactoryFunction();
        
         var regNumCA = "CA 123456";
          
        assert.equal(instance.getReg(regNumCA),"Cape Town");
      
    });
    it('should return the registration area for the registration number entered CY = Bellville' , function(){
        var instance = MyFactoryFunction();
        
        var regNumCY = "CY 123456";
         
       assert.equal(instance.getReg(regNumCY),"Bellville");
    });
    it('should return the registration area for the registration number entered CJ = Paarl' , function(){
        var instance = MyFactoryFunction();
        
        var regNumCJ = "CJ 123456";
         
       assert.equal(instance.getReg(regNumCJ),"Paarl");
    });
   
 

});