document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour afficher les détails
    window.showDetails = function(id) {
        document.getElementById(id).style.display = 'block';
    };

    // Fonction pour masquer les détails
    window.hideDetails = function(id) {
        document.getElementById(id).style.display = 'none';
    };

    // Fonction pour filtrer les articles
    document.querySelectorAll('.animal-filter').forEach(function(filterButton) {
        filterButton.addEventListener('click', function() {
            const filter = this.dataset.filter;
            document.querySelectorAll('.post-espece').forEach(function(post) {
                if (post.classList.contains(filter)) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });
});
