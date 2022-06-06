document.querySelector("#submit").addEventListener("click",myFunction)
function data(name,email,address,amount)
{
  this.name=name;
  this.email=email;
  this.address=address;
  this.wallet=Number(amount);
}

//var productArr=JSON.parse(localStorage.getItem("user"))||[];

function myFunction(){

  event.preventDefault();
 
   let name=form.name.value;
   let email=form.email.value;
   let address=form.address.value;
   let amount=form.amount.value;
 
   let p=new data(name,email,address,amount)
  localStorage.setItem("user",JSON.stringify(p))
  window.location.reload();
}
