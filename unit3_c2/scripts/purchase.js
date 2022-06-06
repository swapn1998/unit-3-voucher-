var user=JSON.parse(localStorage.getItem("user"))
    document.querySelector("#wallet_balance").innerText=user.wallet;

 pArr=JSON.parse(localStorage.getItem("purchase"))
 console.log(pArr)
 display(pArr)

 function display(data)
 {
   document.querySelector("#purchased_vouchers").innerHTML=null;
     data.forEach(function(el){

        let card= document.createElement("div");
        card.className="voucher"
  
        let img=document.createElement("img");
        img.src=el.image;
  
        let name=document.createElement("h3");
        name.innerText=el.name;

        let price=document.createElement("h3");
        price.innerText=Number(el.price)

        card.append(img,name,price);
        document.querySelector("#purchased_vouchers").append(card)
     })

 }