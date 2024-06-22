var form = document.getElementById("searchForm");

let imgElement = document.getElementById("avatar");
let accLink = document.getElementById("ghlink");
let userName = document.getElementById("ghlink");
let fullName = document.getElementById("fname");
let eMail = document.getElementById("email");
let webLinks = document.getElementById("link");
let bio = document.getElementById("bio");
let country = document.getElementById("location");
let followers = document.getElementById("followers");
let following = document.getElementById("following");
let repos = document.getElementById("repos");
let gists = document.getElementById("gist");

function writeInfo(data) {
    imgElement.src = data.avatar_url;
    accLink.href = data.html_url;
    userName.innerHTML = data.login;
    fullName.innerHTML = data.name;
    eMail.innerHTML = data.email;
    webLinks.innerHTML = data.blog;
    bio.innerHTML = data.bio;
    country.innerHTML = data.location;
    followers.innerHTML = data.followers;
    following.innerHTML = data.following;
    repos.innerHTML = data.public_repos;
    gists.innerHTML = data.public_gists;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var search = document.getElementById("search").value;

  var orgName = search.split(" ").join("");

  fetch("https://api.github.com/users/" + orgName)
    .then((result) => result.json())
    .then((data) => {
    //   console.log(data);
      data.status === "404"
        ? alert("User Not Found. Check username.")
        : writeInfo(data);
    });
});
