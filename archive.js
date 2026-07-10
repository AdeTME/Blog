
const btns = document.querySelectorAll("li button");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const pick = btn.dataset.tag.toLowerCase().trim();

        const cards = document.querySelectorAll(".post-card");

        cards.forEach(card => {
            const answer = card.dataset.tags.toLowerCase().trim();

            if(pick ==="all"){
                card.style.display = "block";

            } else if (answer.includes(pick)) {
                card.style.display ="block";

            }  else {
                card.style.display ="none";
            }
        

        });

    });
});

