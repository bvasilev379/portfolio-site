document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('show-message');
  var message = document.getElementById('message');

  if (!button || !message) {
    return;
  }

  button.addEventListener('click', function () {
    message.classList.toggle('hidden');
  });
});
