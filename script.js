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
})





    /*
    const recherche = document.querySelector(".recherche");

    recherche.addEventListener("click", () => {
        recherche.style.width = 300 + "px";
        console.log("click réussi");
    });

    const cross = document.querySelector(".effacer-recherche");

    cross.addEventListener("click", () => {
        event.stopPropagation();
        recherche.style.width = 30 + "px";
    })
    */


    /*
    recherche.addEventListener("click", () => {
        recherche.classList.toggle("open");

        console.log("open bar recherche réussi")
    });
    */