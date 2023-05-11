let allCards = document.querySelectorAll(".center__card");

allCards.forEach((item) => {
    item.addEventListener("click", (e) => {
        if (e.target.classList.contains('center__card-arrow-close-over')){
            item.classList.remove('center__card_active');
        } else if (e.target.classList.contains('center__card-arrow-open-over')){
            item.classList.add('center__card_active');
        }
    })
})