document.addEventListener("DOMContentLoaded", function () {

    if(window.location.pathname === "/" || window.location.pathname === "/index.html"){
        var homeButton = document.getElementById("home");
        if(homeButton){
            homeButton.classList.add("active");
        }
    }
})



document.addEventListener("DOMContentLoaded", function() {

        var navlinks = document.querySelectorAll('.list1');

        navlinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navlinks.forEach(function(link) {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            });
        });   
});


// Redirect To Search Bar

function redirectToSearchPage () {

    const searchQuery = document.getElementById("search-bar").ariaValueMax.trim();

    if(searchQuery) {
        window.location.href = `search.html?q=${encodeURIComponent(searchQuery)}`;
    }
}
