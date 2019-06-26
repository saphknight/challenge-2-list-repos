document.addEventListener("DOMContentLoaded", function() {
    console.log('document ready');
});

function getRepos (username) {
    var info = fetch(`https://www.api.github.com/users/${username}/repos`)

    
};