
const btns = document.querySelectorAll("li button");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const pick = btn.dataset.tag.toLowerCase().trim();

        const cards = document.querySelectorAll(".post-card");

        cards.forEach(card => {
            const answer = card.dataset.tags.toLowerCase().trim();

            if (card.includes(answer)) {

            }

        });

    });
});

