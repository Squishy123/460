//api key from news api u gotta register for it
let key = '7d7e6d4ffb664e51bdefc68cae294d7a';
//this is what we are sending to the server to get the data
//this url will give us the top headlines for USA
//notice how i supply my api key into the query
let url = `https://newsapi.org/v2/everything?q=esports&language=en&apiKey=7d7e6d4ffb664e51bdefc68cae294d7a`

//send the server the request and wait for the response
//get the JSON value of the response received
fetch(new Request(url))
    .then((response) => {
        return response.json();
    })
    //once we get the data lets add the info into the list
    .then((data) => {
        //lets display all the headlines of every article 
        data.articles.forEach((e) => {
            //add a li element with the title of the element into the list
            document.querySelector('#news').innerHTML += `<div class="row">
      <h3>${e.title}</h3>
      <h4>
        <span class="label label-default">${e.source.name}</span>
      </h4>
      <h4>
        <small class="text-muted">${e.publishedAt} •
          <a href="${e.url}"
            class="text-muted">Read More</a>
        </small>
      </h4>
    </div>`
        });

    })