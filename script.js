let clickme = document.querySelector(".click");

clickme.addEventListener("mouseover",  () => {
    clickme.innerText = "click here";
    console.log("hello");
})