document.addEventListener("DOMContentLoaded", function() {
    // console.log('document ready');
});

function getRepos (username) {
    var info = fetch(`https://api.github.com/users/${username}/repos`).then(repos => {
        debugger 
        console.log(repos.body);
    })
    console.log(info)
};

getRepos('saphknight')