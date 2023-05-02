const scriptURL = 'https://script.google.com/macros/s/AKfycbwO_d6euqzdISHmtWIdcCMZAhLqaNIrwQHrUr8qyw6ycid_S1641ZYUB-VWw6Om4zpbtQ/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      console.log('Success!', response)
      msg.innerHTML = "Thank you for your message"
      setTimeout(() => {
        msg.innerHTML = ""
      }, 5000);
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})