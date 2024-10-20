function toggleMenu() {
    const menuContainer = document.getElementById('menu-container');
    // Toggle the visibility of the menu container
    if (menuContainer.style.display === 'block') {
        menuContainer.style.display = 'none';
    } else {
        menuContainer.style.display = 'block';
    }
}
