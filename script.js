document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll("nav > ul > li");
    const subMenu = document.querySelectorAll(".sub");

    listItems.forEach(item => {
        item.addEventListener("mouseenter", function() {
            subMenu.forEach(sub => {
                sub.style.display = "block";  
                sub.style.transition = "all 0.3s ease";  
            });
        });

        item.addEventListener("mouseleave", function() {
            subMenu.forEach(sub => {
                sub.style.display = "none";  
            });
        });
    });
});



