
const btns = document.querySelectorAll("li button");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log(btn.dataset.tag);
    });
});
