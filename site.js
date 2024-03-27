function nav() {
    let navLinks = document.getElementById("navLinks")

    function showMenu() {
        navLinks.style.right = "0"
    }

    function hideMenu() {
        navLinks.style.right = "-200px"
    }

    // Get the menu icon elements
    let menuIcon = document.getElementById("menuIcon")
    let closeIcon = document.getElementById("closeIcon")

    // Add event listeners to the menu icons
    menuIcon.addEventListener("click", showMenu)
    closeIcon.addEventListener("click", hideMenu)
}

