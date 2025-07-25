const form = document.getElementById('fateForm');
const status = document.getElementById('status');

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  fetch('https://script.google.com/macros/s/AKfycby7nNirww-2FHf1-EvM6ob6LaQoL2crMSRxIUlMiZRCpF7B07CQpNzhHRw41XfzPA7g/exec', {
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
