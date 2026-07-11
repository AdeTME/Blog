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

    // --- 1. HANDLE "ALL" BUTTON LOGIC ---
    if (pick === "all") {
      // If "All" is clicked, deactivate every other tag button
      btns.forEach(b => {
        if (b.dataset.tag.toLowerCase().trim() !== "all") b.classList.remove('is-active');
      });
      btn.classList.add('is-active');
    } else {
      // If a regular tag is clicked, toggle it and turn off the "All" button
      btn.classList.toggle('is-active');
      const allBtn = [...btns].find(b => b.dataset.tag.toLowerCase().trim() === "all");
      if (allBtn) allBtn.classList.remove('is-active');
    }

    // --- 2. GATHER ALL ACTIVE TAGS ---
    const activeButtons = [...btns].filter(b => b.classList.contains('is-active'));
    const activeTags = activeButtons.map(b => b.dataset.tag.toLowerCase().trim());

    // Fallback: If the user unchecks everything, default back to "all" behavior
    if (activeTags.length === 0) {
      const allBtn = [...btns].find(b => b.dataset.tag.toLowerCase().trim() === "all");
      if (allBtn) allBtn.classList.add('is-active');
      activeTags.push("all");
    }

    // --- 3. FILTER THE CARDS ---
    const cards = document.querySelectorAll(".post-card");

    cards.forEach(card => {
      const answerTags = card.dataset.tags.toLowerCase().trim().split(/\s+/); // Splits by any spacing

      // Check if "all" is active, OR if the card matches AT LEAST ONE active tag
      const matchesFilter = activeTags.includes("all") || activeTags.some(tag => answerTags.includes(tag));

      if (matchesFilter) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });

    updateLastVisible();
  });
});