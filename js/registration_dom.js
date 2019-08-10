var inputField = document.querySelector(".registrationBox")
var output = document.querySelector(".display")
var addButton = document.querySelector(".addButton")
var show = document.querySelector(".show")



var instanceOfFactory = MyFactoryFunction();




addButton.addEventListener('click', function () {
    var plate = inputField.value;
    var results = instanceOfFactory.add(plate)

    if (results === 'number added successfully') {
        var x = document.createElement("li")
        var z = document.createTextNode(plate)
        x.appendChild(z)

        output.appendChild(x);
    } else {
        var x = document.createElement("li")
        var z = document.createTextNode(results)
        x.appendChild(z)
        output.appendChild(x);
    }



});

show.addEventListener('click', function () {
    var checkRadioBtn = document.querySelector("input[name='radioBtn']:checked");

    console.log(instanceOfFactory.filterByTown(checkRadioBtn.value));
});