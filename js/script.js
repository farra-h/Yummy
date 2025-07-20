var swiper = new Swiper(".swiper", {
    spaceBetween: 10,
    loop: true,
    speed: 6500,
    slidesPerView: "auto",
    freeMode: true,
    autoplay: {
        delay: 0,
    },
});

let btn = document.getElementById("btn");

window.onscroll = function(){
    if (scrollY >= 500) {
        btn.style.display = "block"
    } else {
        btn.style.display = "none"
    }
}

btn.onclick = function(){
    scrollTo({
        right: 0,
        top: 0,
        behavior: "smooth"
    })
}