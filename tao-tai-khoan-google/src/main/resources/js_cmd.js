var eles = document.getElementsByClassName('MHH3bd');
var listEmail = [];
for (let i = 0; i < eles.length; i++) {
  listEmail.push(eles[i].textContent);
  console.log(eles[i].textContent)
}