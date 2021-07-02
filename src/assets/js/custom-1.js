document.addEventListener("click", (evt) => {
    const el = document.getElementById("filter-result");
    let targetElement = evt.target; // clicked element

    do {
        if (targetElement == el) {
            return;
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;
    } while (targetElement);

    // This is a click outside.
    document.getElementById("filter-result").style.display = "none";
});