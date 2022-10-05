// import repos from "./repos.js";
// import user from "./user.js";
// import orgs from "./orgs.js";


(function() {
    'use strict'
// ========================================================================================================
function generateHTML(data) {
    const repoSource = document.getElementById("repo-template").innerHTML;
    const repoTemplate = Handlebars.compile(repoSource);
    const repoHtml = repoTemplate({repos:data[0]});

    document.querySelector(".repository").insertAdjacentHTML("afterbegin", repoHtml);

// ========================================================================================================

    const userSource = document.getElementById("profile-template").innerHTML;
    const userTemplate = Handlebars.compile(userSource);
    // console.log('user', user);
    const userHtml = userTemplate({user:data[1]});

    document.querySelector(".user").insertAdjacentHTML("afterbegin", userHtml);

// ========================================================================================================

    const orgsSource = document.getElementById("orgs-template").innerHTML;
    const orgsTemplate = Handlebars.compile(orgsSource);
    const orgsHtml = orgsTemplate({orgs:data[2]});

    document.querySelector(".orgs").insertAdjacentHTML("afterbegin", orgsHtml);
}

Promise.all([
    fetch(`https://api.github.com/users/Bello2288/repos`),
    fetch(`https://api.github.com/users/Bello2288`),
    fetch(`https://api.github.com/users/Bello2288/orgs`),
])
.then(function(responses) {
    console.log('response', responses);
    return Promise.all(responses.map(function (response) {
        return response.json();
    }));
})
.then(function(json) {
    console.log('json', json);
    generateHTML(json);
})
.catch(function(error) {
    console.log('Error', error);
});

})();


// ==========================================================================================================
// ===============================         FETCH             ================================================
// ==========================================================================================================

// Promise.all([
//     fetch(`https://api.github.com/users/Bello2288/repos`),
//     fetch(`https://api.github.com/users/Bello2288`),
//     fetch(`https://api.github.com/users/Bello2288/orgs`),
// ])
// .then(function(responses) {
//     console.log('response', responses);
//     return Promise.all(responses.map(function (response) {
//         return response.json();
//     }));
// })
// .then(function(json) {
//     console.log(`json`, json);
//     generateHTML(json);
// })
// .catch(function(error) {
//     console.log(`Error`, error);
// });
