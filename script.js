const cartbtn = document.querySelector(".fa-square-xmark");
const cartshow = document.querySelector(".fa-cart-shopping");

cartshow.addEventListener("click", function() {
    document.querySelector(".cart").style.right = "0";
});

cartbtn.addEventListener("click", function() {
    document.querySelector(".cart").style.right = "-100%";
});
document.getElementById('numberInput').addEventListener('blur', function() {
    if (this.value === '' || parseInt(this.value) < 1) {
        this.value = 1;
    }
