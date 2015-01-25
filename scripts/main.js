
// View control is in this file.


(function () {

  var chosenSelect =  $('.chosen-select'),
      runButton =     $('input[value="Encode"], input[value="Decode"]'),
      resetButton =   $('input[value="Clear Text"]'),
      wrapper =       $('.wrapper');


  var buildDropDown = function () {
    // Populate the dropdown.
    var i, rotVal;
    for (i = 1; i < 26; i++) {
      rotVal = 'ROT' + i;
      chosenSelect.append('<option value="' + rotVal + '">' + rotVal + '</option>');
    }
    // Set default dropdown value and use Chosen jQuery plugin.
    chosenSelect.val('ROT13').chosen();
  };


  runButton.on('click', function (e) {
    var direction = e.target.value,
        offset = chosenSelect.val().slice(3),
        text = $('#inputText')[0].value;
    console.log(text);
    $('.results').remove();
    wrapper.append('' +
      '<div class="results">' +
        '<h4>' + direction + 'd text:</h4>' +
        '<p>' + rotEncryption.text(direction, offset, text) + '</p>' +
      '</div>')
  });


  resetButton.on('click', function () {
    console.log('Reset');
  });


  buildDropDown();

}());
