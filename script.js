// For the Heart icon
const heartIcons = document.getElementsByClassName("heart_icon");
for (const heartIcon of heartIcons) {
  heartIcon.addEventListener("click", function () {
    const heartIconValues = document.getElementById("heart_icon_value");
    const parseIntValue = parseInt(heartIconValues.innerText);
    const countValue = parseIntValue + 1;
    heartIconValues.innerText = countValue;
  });
}
// For the call button
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
    // Create New Div
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

    // For the Reduced coin

    const coinValue = parseInt(document.getElementById("coin_value").innerText);
    let coinValues = 0;
    if (coinValue >= 20) {
      coinValues = coinValue - 20;
      document.getElementById("coin_value").innerText = coinValues;
      alert(`${emergencyNumberTitle} ${othersNumber}...`);
      return true;
    } else {
      createDiv.innerHTML = "";
      alert("You have no coins. At least,you need to call 20 coins");
      return false;
    }
  });
}
// For the clear button
document.getElementById("clear_button").addEventListener("click", function () {
  document.getElementById("transaction_container").innerHTML = "";
});
