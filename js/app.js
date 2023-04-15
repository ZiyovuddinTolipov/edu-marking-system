
// https://studenttable.pythonanywhere.com/rating/
// let userName=document.getElementById('fname').value
// let gruh=document.getElementById('Gruh').value
// let email=document.getElementById('email').value
// let phoneNumber=document.getElementById('phoneNumber').value

const inputName = document.querySelector("#myForm");


inputName.addEventListener("submit", async function(e){
  
  let user = {
    name:e.target[0].value,
    Gruh:e.target[1].value,
    Email:e.target[2].value,
    telefonRaqami:e.target[3].value
  }
  console.log(e.target[0].value,"hi");
  e.preventDefault();
  let response = await fetch('https://studenttable.pythonanywhere.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user)
  });
  //let result = await response.json();
  // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("submit");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  console.log(response)
  e.preventDefault(none)
})


