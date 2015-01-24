
var method = 'Encrypted',
    results = '',
    btn = $('span.btn'),
    submit = $('input[type="submit"'),
    wrapper = $('.wrapper');

btn.on('click', function () {
  btn.removeClass('active');
  $(this).addClass('active');
});

submit.on('click', function () {
  wrapper.append('' +
    '<div class="results">' +
      '<h4>' + method + ' text:</h4>' +
      '<p>' + results + '</p>' +
    '</div>')
});

