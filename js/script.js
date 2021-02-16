document.querySelector(".search__btn").addEventListener("click", function () {
    const search = document.querySelector(".search__input");

    this.classList.toggle("animate");

    search.classList.toggle("active");
    search.focus();
    search.nodeValue("");
});

document.querySelector(".hamburger").addEventListener("click", () => {
    document
        .querySelector(".header__wrapper")
        .classList.toggle("header__wrapper-active");
});

// document
//     .querySelector(".select__wrapper")
//     .addEventListener("click", function () {
//         this.querySelector(".select").classList.toggle("open");
//     });

for (const dropdown of document.querySelectorAll(".select__wrapper")) {
    dropdown.addEventListener("click", function () {
        this.querySelector(".select").classList.toggle("open");
    });
}

for (const option of document.querySelectorAll(".select__option")) {
    option.addEventListener("click", function () {
        if (!this.classList.contains("selected")) {
            this.parentNode
                .querySelector(".select__option.selected")
                .classList.remove("selected");
            this.classList.add("selected");
            this.closest(".select").querySelector(
                ".select__trigger span"
            ).textContent = this.textContent;
        }
    });
}

// window.addEventListener("click", function (e) {
//     const select = document.querySelector(".select");
//     if (!select.contains(e.target)) {
//         select.classList.remove("open");
//     }
// });

window.addEventListener("click", function (e) {
    for (const select of document.querySelectorAll(".select")) {
        if (!select.contains(e.target)) {
            select.classList.remove("open");
        }
    }
});
