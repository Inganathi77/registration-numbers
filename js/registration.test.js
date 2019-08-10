describe('Registration Numbers Factory', function () {
    describe('The checkRegistrationPlate function',function(){
        it('should check if a registration is valid', function () {
            var instance = MyFactoryFunction();
            assert.equal(instance.check('CA 123 456'),true);
        });
        it('should check if a registration is valid', function () {
            var instance = MyFactoryFunction();
            assert.equal(instance.check('CY 123 456'),true);
        });
        it('should check if a registration is valid', function () {
            var instance = MyFactoryFunction();
            assert.equal(instance.check('CJ 123 456'),true);
        });
        it('should check if a registration is valid', function () {
            var instance = MyFactoryFunction();
            assert.equal(instance.check('CAW 123 456'),true);
        });
    });


    describe('The addRegistrationNumber', function(){
        it('should add a registration number to a list',function(){
            var instance = MyFactoryFunction();
            assert.equal(instance.add('CAW 123 456'),'number added successfully');
        });
        it('should add a registration number to a list',function(){
            var instance = MyFactoryFunction();
            instance.add('CAW 123 456')
            assert.equal(instance.add('CAW 123 456'),'duplicate registration entered');
        });
        it('should not allow you to add invalid reg',function(){
            var instance = MyFactoryFunction();
           
            assert.equal(instance.add('CD 123 456'),'not a valid number plate');
        });
    });


    describe('The filterByTown Function', function(){
        it('should filter through all reg numbers and return a list of regs for a town',function(){
            var instance = MyFactoryFunction();

            instance.add('CA 123 456')
            var filteredList = instance.filterByTown('CA');
            var testList = ['CA 123 456'];

            assert.deepEqual(filteredList, testList);
        });
        it('should filter through all reg numbers and return a list of regs for a town',function(){
            var instance = MyFactoryFunction();

            instance.add('CY 123 456')
            var filteredList = instance.filterByTown('CY');
            var testList = ['CY 123 456'];

            assert.deepEqual(filteredList, testList);
        });
        it('should filter through all reg numbers and return a list of regs for a town',function(){
            var instance = MyFactoryFunction();

            instance.add('CJ 123 456')
            var filteredList = instance.filterByTown('CJ');
            var testList = ['CJ 123 456'];

            assert.deepEqual(filteredList, testList);
        });
        it('should filter through all reg numbers and return a list of regs for a town',function(){
            var instance = MyFactoryFunction();

            instance.add('CAW 123 456')
            var filteredList = instance.filterByTown('CAW');
            var testList = ['CAW 123 456'];

            assert.deepEqual(filteredList, testList);
        });
    });
    
    
});