import repos from "./repos.js";
import user from "./user.js";
import orgs from "./orgs.js";


// ========================================================================================================

const repoSource = document.getElementById("repo-template").innerHTML;
const repoTemplate = Handlebars.compile(repoSource);
const repoHtml = repoTemplate({repos});

document.querySelector(".repository").insertAdjacentHTML("afterbegin", repoHtml);

// ========================================================================================================

const userSource = document.getElementById("profile-template").innerHTML;
const userTemplate = Handlebars.compile(userSource);
console.log('user', user);
const userHtml = userTemplate(user);

document.querySelector(".user").insertAdjacentHTML("afterbegin", userHtml);

// ========================================================================================================

const orgsSource = document.getElementById("orgs-template").innerHTML;
const orgsTemplate = Handlebars.compile(orgsSource);
const orgsHtml = orgsTemplate({orgs});

document.querySelector(".orgs").insertAdjacentHTML("afterbegin", orgsHtml);



// ==========================================================================================================
// ===============================         FETCH             ================================================
// ==========================================================================================================

// Promise.all([
//     fetch(`https://api.github.com/users/Bello2288/repos`),
//     fetch(`https://api.github.com/users/Bello2288`),
//     fetch(`https://api.github.com/users/Bello2288/orgs`),
// ])
// .then(function(response) {
//     console.log('response', responses);
//     return Promise.all(responses.map(function (response) {
//         return resoonse.json();
//     }));
// })
// .then(function(json) {
//     console.log(`json`, json);
//     generateHTML(json);
// })
// .catch(function(error) {
//     console.log(`Error`, error);
// });