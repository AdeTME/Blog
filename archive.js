const btns = document.querySelectorAll("li button");

function updateLastVisible() {
  const cards = document.querySelectorAll(".post-card");
  cards.forEach(c => c.classList.remove("no-border"));
  const visible = [...cards].filter(c => c.style.display !== "none");
  if (visible.length) visible[visible.length - 1].classList.add("no-border");
}

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const pick = btn.dataset.tag.toLowerCase().trim();

        const cards = document.querySelectorAll(".post-card");

        cards.forEach(card => {
            const answerTags = card.dataset.tags.toLowerCase().trim().split(" ");

            if (pick === "all" || answerTags.includes(pick)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });

        updateLastVisible();
    });
});