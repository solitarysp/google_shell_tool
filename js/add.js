
fetch('https://raw.githubusercontent.com/solitarysp/google_shell_tool/main/js/shell_script.js')
.then((response) => response.text())
.then((data) => {
  let script = document.createElement('script');
  script.textContent  = data;
  document.body.appendChild(script);
});