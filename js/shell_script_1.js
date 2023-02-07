setInterval(bypassStartShell, 2000);

async function bypassStartShell() {
  console.log("tesst")
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}