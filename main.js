
var whichWay = 'Encrypt',
    results = '',
    btn = $('span.btn'),
    // inputjq = $('#inputText'),
    // input = document.getElementById('inputText'),
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
  e.preventDefault();
  clearResults();
  results = document.getElementById('inputText').value + '  asdfsdf'
  wrapper.append('' +
    '<div class="results">' +
      '<h4>' + whichWay + 'ed text:</h4>' +
      '<p>' + results + '</p>' +
    '</div>')
});

