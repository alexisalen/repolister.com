'use strict'

window.onload = function() {

var repoarray = [];

var div_repos = document.querySelector("#repos");

fetch('https://github-trending-api.now.sh/repositories?language=javascript&since=weekly')
  .then(data => data.json())
  .then(trendlist => {
      console.log(trendlist);

      trendlist.map((repo,i) => {
        let elemento = document.createElement('p');

        elemento.innerHTML = i + '. ' + repo.name + " " + repo.author + " - " +  repo.url;

        div_repos.appendChild(elemento);

        document.querySelector(".loading").style.display = 'none';
      });
  });

};


  