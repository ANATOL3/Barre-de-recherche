const recherche = document.querySelector(".recherche");

const effacer_recherche = document.querySelector(".effacer-recherche");

const input_reset = document.querySelector("input");


recherche.addEventListener("click", () => {
    recherche.classList.add("open");
});

effacer_recherche.addEventListener("click", (event) => {
    event.stopPropagation();
    recherche.classList.remove("open");
    input_reset.value = "";
});
