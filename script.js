
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} bg-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTriggerS = document.getElementById('liveAlertBtnS')
if (alertTriggerS) {
  alertTriggerS.addEventListener('click', () => {
    appendAlert('this is a success alert.', 'success')
  })
}
const alertTriggerW = document.getElementById('liveAlertBtnW')
if (alertTriggerW) {
  alertTriggerW.addEventListener('click', () => {
    appendAlert('this is a warning alert !', 'warning')
  })
}
const alertTriggerF = document.getElementById('liveAlertBtnF')
if (alertTriggerF) {
  alertTriggerF.addEventListener('click', () => {
    appendAlert('this is a failed alert !', 'danger')
  })
}



const themeToggle = document.getElementById('themeToggle');
const navbar = document.getElementById("navbar");

function toggleTheme() {
  if (themeToggle.checked) {
    document.body.setAttribute('data-bs-theme', 'dark'); // Set theme to dark
    navbar.classList.replace("bg-light", "bg-secondary")
  } else {
    document.body.removeAttribute('data-bs-theme'); // Set theme to default (light)
    navbar.classList.replace("bg-secondary", "bg-light")

  }
}

themeToggle.addEventListener('change', toggleTheme);