async function search(){
    url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`
   let res= await fetch(url);
   let data= await res.json();
   console.log(data[0].vouchers)
   append(data[0].vouchers)
  }
    search()
  
    function append(data)
    {
      document.querySelector("#voucher_list").innerHTML=null;

      data.forEach(function(el){
        let card= document.createElement("div");
        card.className="voucher"
  
        let img=document.createElement("img");
        img.src=el.image;
  
        let name=document.createElement("h3");
        name.innerText=el.name;

        let price=document.createElement("h3");
        price.innerText=Number(el.price)
       
        let button=document.createElement("button")
        button.innerText="Buy";
        button.className="buy_voucher"
        button.addEventListener("click",function(){
          byFunc(el);
        });

        card.append(img,name,price,button);
        document.querySelector("#voucher_list").append(card)
      })
    }
  
    var user=JSON.parse(localStorage.getItem("user"))
    document.querySelector("#wallet_balance").innerText=user.wallet;
     
    let pArr=JSON.parse(localStorage.getItem("purchase"))||[];

    
     function byFunc(el){
      //console.log(el.price)
    
         if(user.wallet>=el.price)
         {    
               pArr.push(el)
              console.log(pArr)
          user.wallet=user.wallet-el.price;

          document.querySelector("#wallet_balance").innerText=user.wallet;

           alert("Hurray! purchase successful")

              

           localStorage.setItem("purchase",JSON.stringify(pArr))

           localStorage.setItem("user",JSON.stringify(user))
         }
         else
         {
           alert("Sorry! insufficient balance")
         }
     }