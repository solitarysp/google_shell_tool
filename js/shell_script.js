console.log("Run : https://raw.githubusercontent.com/solitarysp/google_shell_tool/main/js/shell_script.js")
setInterval(bypassStartShell, 2000);

async function bypassStartShell() {
  try {
    let button;
    const spans = document.getElementsByTagName("span");
    for (let i = 0; i < spans.length; i++) {
      if (spans[i].textContent.trim() == 'Start Cloud Shell') {
        button = spans[i];
      }
    }
    if (button) {
      document.getElementsByClassName('mat-checkbox-label')[0].click();
      await sleep(500)
      button.click();
    }
  } catch (e) {
    console.error(e)
  }
}

setInterval(bypassRecheckShell, 2000);

async function bypassRecheckShell() {
  try {
    let button;
    const spans = document.getElementsByTagName("span");
    for (let i = 0; i < spans.length; i++) {
      if (spans[i].textContent.trim() == 'Continue') {
        button = spans[i];
      }
    }
    if (button) {
      document.getElementsByClassName('mat-button-wrapper')[0].click();
    }
  } catch (e) {
  }
}

setInterval(reLoginGoogle, 2000);

async function reLoginGoogle() {
  try {
    if (document.location.href.indexOf('signin/confirmidentifier') > 0) {
        if(document.getElementById('headingText').textContent === 'Xác minh danh tính của bạn'){

          let button;
          const spans = document.getElementsByTagName("span");
          for (let i = 0; i < spans.length; i++) {
            if (spans[i].textContent.trim() == 'Tiếp theo') {
              button = spans[i];
            }
          }
          if (button) {
            button.click();
          }

        }
    }
  } catch (e) {
  }
  try {
    if (document.location.href.indexOf('signin/challenge/pwd') > 0) {
      const inputs = document.getElementsByTagName("input")
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].getAttribute('type') == 'password') {
          inputs[i].value = "Chicanem1234";

          const spans = document.getElementsByTagName("span");
          for (let i = 0; i < spans.length; i++) {
            if (spans[i].textContent.trim() == 'Tiếp theo') {
                spans[i].click();;
            }
          }
        }
      }
    }
  } catch (e) {
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}