// script.js
document.getElementById('search-bar').addEventListener('input', function(e) {
    var searchQuery = e.target.value.toLowerCase();
    var listItems = document.querySelectorAll('#data-list li');

    listItems.forEach(function(item) {
        var text = item.textContent.toLowerCase();
        if (text.includes(searchQuery)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});
