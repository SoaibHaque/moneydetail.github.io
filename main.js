const Selector = ele => document.querySelector(ele);

let stringMake = (name, acc, mob, amt, examt) => `Customer: ${name}\nAcc No: ${acc}\nMob No: ${mob}\nAmt: ₹ ${amt}\nEx Amt: ₹ ${examt}`;

let whatsappSend = () => {
  let msg = encodeURI(stringMake(Selector("#person").value,Selector("#accountNo").value,Selector("#phoneNo").value,Selector("#amount").value,Selector("#extraAmt").value))
  let url = `http://api.whatsapp.com/send?phone=919971136716&text=${msg}`;
  window.open(url,"_blank");
}

Selector("#whatsappSend").onclick =()=>whatsappSend();