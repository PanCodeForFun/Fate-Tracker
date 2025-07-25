const form = document.getElementById('fateForm');
const status = document.getElementById('status');

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  fetch('YOUR_SCRIPT_URL_HERE', {
    method: 'POST',
    body: data
  })
  .then(response => response.text())
  .then(msg => {
    status.textContent = "Erfolgreich eingetragen!";
    form.reset();
  })
  .catch(error => {
    status.textContent = "Fehler beim Senden.";
    console.error(error);
  });
});
