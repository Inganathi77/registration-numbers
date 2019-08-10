function MyFactoryFunction() {
  var listOfAllTowns = {}
  // var listOfAllRegistrationsInTheWorldMap = {};
  // var listOfAllRegistrationsInTheWorld = [];
  // let myObject = {
  //   cape: "CA",
  //   jozi: "GP"
  // }


  function addRegistration(plate) {
    var allUpperCase = plate.toUpperCase()
    if (listOfAllTowns[allUpperCase] === undefined) {
      listOfAllTowns[allUpperCase] = 0
    }







    if (checkRegistrationPlate(plate)) {
       if (!listOfAllRegistrationsInTheWorld.includes(plate.toUpperCase())) {

        //arraray .includes
         listOfAllRegistrationsInTheWorld.push(plate.toUpperCase());
         console.log('number added successfully')
         return 'number added successfully'
       } else {
         console.log('duplicate registration entered', )

         return 'duplicate registration entered'
       }
     } else {
       console.log('not a valid number plate')

      return `not a valid number plate`

     }



  }





  function checkRegistrationPlate(plate) {
    var listOfValidRegistrationLocations = ['CA', 'CY', 'CJ', 'CAW'];
    var registration = plate.toUpperCase();
    var result = false;
    for (let i = 0; i < listOfValidRegistrationLocations.length; i++) {
      const element = listOfValidRegistrationLocations[i];
      if (registration.startsWith(element)) {
        result = true;
      }
    }
    return result;

  }



  function filterRegistrations(town) {
    var filteredList = [];
    for (let i = 0; i < listOfAllRegistrationsInTheWorld.length; i++) {
      if (listOfAllRegistrationsInTheWorld[i].startsWith(town)) {
        filteredList.push(listOfAllRegistrationsInTheWorld[i]);
      }
    }
    console.log(filteredList.length);
    return filteredList;
  }


  return {

    check: checkRegistrationPlate,
    add: addRegistration,
    filterByTown: filterRegistrations
  }


}