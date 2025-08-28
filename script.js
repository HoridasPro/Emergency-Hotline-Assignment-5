// For Heart icon
const heartIcons = document.getElementsByClassName("heart_icon");
for (const heartIcon of heartIcons) {
  heartIcon.addEventListener("click", function () {
    const heratIconValues = document.getElementById("heart_icon_value");
    const parseIntValue = parseInt(heratIconValues.innerText);
    const countValue = parseIntValue + 1;
    heratIconValues.innerText = countValue;
  });
}
// For call button
const callButtons = document.getElementsByClassName("call_btn");
for (const callButton of callButtons) {
  callButton.addEventListener("click", function () {
    const emergencyNumberTitle =
      callButton.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
    const othersNumber =
      callButton.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
    const transactionContainer = document.getElementById(
      "transaction_container"
    );
    const createDiv = document.createElement("div");

    createDiv.innerHTML = ` <div
    class="flex items-center justify-between mt-5 bg-[#fafafa] p-2 rounded-lg"
    >
            <div>
            <h1 class="font-semibold text-[16px] text-[#111111]">
            ${emergencyNumberTitle}
            </h1>
            <p class="text-[#5C5C5C] font-normal text-[16px]">${othersNumber}</p>
            </div>
            <span class="text-[16px] font-normal">${new Date().toLocaleTimeString()}</span>
            </div>
            `;
    transactionContainer.appendChild(createDiv);

    const coinValue = parseInt(document.getElementById("coin_value").innerText);
      let coinValues=0
    if (coinValue >= 20) {
      coinValues = coinValue - 20;
      document.getElementById("coin_value").innerText = coinValues;
      alert(`${emergencyNumberTitle},${othersNumber}`);
      return true;
    } else {
      alert("You have no coin");
      return false;
    }
  });
}
