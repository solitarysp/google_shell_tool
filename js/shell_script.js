setInterval(bypassStartShell, 2000);

async function bypassStartShell() {
  try {
    document.getElementsByClassName('mat-checkbox-label')[0].click();
  } catch (e) {

  }
}

setInterval(bypassRecheckShell, 2000);

async function bypassRecheckShell() {
  try {
    document.getElementsByClassName('mat-button-wrapper')[0].click();
  } catch (e) {
  }
}



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}