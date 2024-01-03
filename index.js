var root = document.querySelector(":root");
var rootStyles = getComputedStyle(root);
var primaryColor = rootStyles.getPropertyValue("--primary-color")
console.log(primaryColor);
root.style.setProperty("--primary-color", "red");

root.style.setProperty("--secondary-color", "orange")