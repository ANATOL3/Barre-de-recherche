const searchBar = document.querySelector(".search-bar")

const removeSearch = document.querySelector(".remove-search")

const resetInput = document.querySelector("input")


searchBar.addEventListener("click", () => {
    searchBar.classList.add("open")
})

removeSearch.addEventListener("click", (event) => {
    event.stopPropagation()
    searchBar.classList.remove("open")
    resetInput.value = ""
})