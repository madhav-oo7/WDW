console.log("This is js");
let collapseWidthExample = document.getElementById('news');
let car1 = document.getElementById('car1');
let car2 = document.getElementById('car2');
let car3 = document.getElementById('car3');

const xhr = new XMLHttpRequest();
let newsHTML = "";
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=549f52787fc940f692c75e50d670d2bb', true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        car1.innerHTML= ` <img src="${articles[1].urlToImage}" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${articles[1].title}</h5>
                        <p>${articles[1].description}</p>`;

                        car2.innerHTML= ` <img src="${articles[2].urlToImage}" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>${articles[2].title}</h5>
                            <p>${articles[2].description}</p>`;


                            car3.innerHTML= ` <img src="${articles[5].urlToImage}" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>${articles[5].title}</h5>
                                <p>${articles[5].description}</p>`;


        console.log(articles);
        for (news in articles) {
        
            let temp = articles[news];
            // if (temp.source.name == "The Times of India" || temp.source.name == "India Today" || temp.source.name == "ESPN Cric Info") {
                let ne = `<div class="card bg-light" style="width: 50rem; margin-left: 5rem; margin-top: 2rem">
            <img src="${temp.urlToImage}" class="card-img-top" alt="IMG" >
            <div class="card-body" id="card-body">
            <h5 class="card-title">${temp.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Source: ${temp.source.name}</h6>
            <a href="${temp.url}" target="_blank">Know more</a>
              </div>
              </div></div><br>`;
                newsHTML += ne;
            // }
            console.log(articles[news].source.name);
        }
        collapseWidthExample.innerHTML = newsHTML;
    }
    else {
        console.log("Error occured");
    }
}
xhr.send();