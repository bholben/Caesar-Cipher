
// View control is in this file.

var whichWay = 'Encrypt',
    btn = $('span.btn'),
    submit = $('input[type="submit"'),
    wrapper = $('.wrapper');


var clearResults = function () {
  $('.results').remove();
};


btn.on('click', function (e) {
  clearResults();
  // Highlight the clicked button.
  btn.removeClass('active');
  $(this).addClass('active');
  // Update the whichWay variable
  whichWay = e.target.textContent;
});


submit.on('click', function (e) {
  var str = document.getElementById('inputText').value;
  e.preventDefault();
  clearResults();
  wrapper.append('' +
    '<div class="results">' +
      '<h4>' + whichWay + 'ed text:</h4>' +
      '<p>' + rotString(str) + '</p>' +
    '</div>')
});

