
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let qr = document.querySelector(".qr");

function generateQrCode() {
  const text = inp.value;

  if (text.trim() != "") {
    qr.innerHTML = "";

    new QRCode(qr, {
      text: text,
      width: 128,
      height: 128,
    });
  } else {
    alert("Enter some text!");
  }
}

btn.addEventListener("click",generateQrCode);