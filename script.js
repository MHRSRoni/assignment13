
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