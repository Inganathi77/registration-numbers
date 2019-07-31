var inputField = document.querySelector(".registrationBox")
// var output =  document.getElementById("greetingOutput")
var output = document.querySelector(".display")
var addButton = document.querySelector(".addButton")
var inputName = document.querySelector('#input')
var show = document.querySelector(".show")

if (localStorage['name'] !== undefined) {
    var nameStore = JSON.parse(localStorage['name'])
} else {
    nameStore = {}
}

var greetInstance = MyFactoryFunction(nameStore);
 counter()
show.innerHTML = RegistrationInstance.getCount();

registrationNumber.addEventListener('click', function () {
    var checkRadioBtn = document.querySelector("input[name='radioBtn']:checked");
    if (checkRadioBtn) {
        var regButton = checkRadioBtn.value;
    };

    var name = inputName.value;
  
    output.innerHTML = RegistrationInstance.registration(city, registrationNumber);
   show()
    localStorage['name'] = JSON.stringify(RegistrationInstance.getName())
   
});



function show() {
    show.innerHTML = RegistrationInstance.regShow();
}


resetButton.addEventListener('click', function () {
    location.reload(); 
    localStorage.clear()
    count.innerHTML = 0
    output.innerHTML = "";
    
});