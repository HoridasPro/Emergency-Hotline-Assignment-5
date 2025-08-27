// For Heart icon
const heartIcons = document.getElementsByClassName("heart_icon");
for (const heartIcon of heartIcons) {
  heartIcon.addEventListener("click", function () {
    const heratIconValues =
      document.getElementById("heart_icon_value");
      const parseIntValue=parseInt(heratIconValues.innerText)
    const countValue = parseIntValue + 1;
    heratIconValues.innerText=countValue
    console.log(countValue);
  });
}
