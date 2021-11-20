console.log("Hello World !");
// const xhr = new XMLHttpRequest();

var count = 0;
var category_1 = "sports";    //newsapi.org
var category_2 = "sports";    //newsdata.org

let page_1 = 0;
let page_2 = 0;

let apikey_1 = "b855fac71bbc4551bed69a570a5fa394"; //newsapi.org
let apikey_2 = "pub_22169098b514149cc6bc547064dacfeffd22"; //newsdata.io

function Cricket() {
  category_2 = "cricket";
  getNews_2();
//   getNews_1();
}

function Football() {
  category_2 = "soccer";
  getNews_2();
//   getNews_1();
}

function Racing() {
  category_2 = "racing";
  getNews_2();
//   getNews_1();
}

function Home() {
  category_2 = "sports";
  getNews_1();
  // getNews_2();
}

function Baseball() {
  category_2 = "baseball";
  getNews_2();
//   getNews_1();
}

function Basketball() {
  category_2 = "basketball";
  getNews_2();
//   getNews_1();
}

function Volleyball() {
  category_2 = "volleyball";
  getNews_2();
//   getNews_1();
}

function Badminton() {
  category_2 = "badminton";
  getNews_2();
//   getNews_1();
}

function loadmore_1(){
  page_1++;
  getNews_1();
}

function loadmore_2(){
  page_2++;
  getNews_2();
}

function getNews_1() {        // newsapi.org
  const xhr = new XMLHttpRequest();

  let col1 = document.getElementById("col1");
  let col2 = document.getElementById("col2");
  let col3 = document.getElementById("col3");

  col1.innerHTML = "";
  col2.innerHTML = "";
  col3.innerHTML = "";

  xhr.open(
    "GET",
    `https://newsapi.org/v2/top-headlines?category=${category_1}&language=en&pageSize=65&apiKey=${apikey_1}&page=${page_1}`,
    true
  ); //newsapi.org

//   xhr.onprogress = function () {
//     let loading = document.getElementById("data");
//     loading.innerHTML = `<div class="spinner-border text-primary" role="status">
//         <span class="visually-hidden">Loading...</span>
//       </div>`;
//   };

  xhr.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let article = json.articles;

      newsHTML1 = "";
      newsHTML2 = "";
      newsHTML3 = "";

      for (news in article) {
        let temp = article[news];

        if(news <=17){

            let ne = `<br><div class="card bg-dark bg-gradient text-white">
            <div class="card-body" id="card-body bg-primary">
            <img class="card-img-top" src="${temp.urlToImage}" alt="Card image cap"><br>
            <h5 class="card-title text-warning pt-3">${temp.title}</h5>
            <h6>${temp.description}</h6><br>
            <a href="${temp.url}" target="_blank" style="margin-top: 1rem; text-decoration: none;" class="text-white-50"><p>View More...</p></a>
              </div></div>`;
              count++;
            newsHTML2 += ne;
        } else if(news>17 && news<=36 && temp.urlToImage){
          let ne = `<br><div class="card mb-3 bg-dark bg-gradient">
          <img src="${temp.urlToImage}" class="card-img-top" alt="Top-Headlines">
          <div class="card-body">
            <h5 class="card-title text-warning">${temp.title}</h5>
            <p class="card-text text-white">${temp.description}</p>
            <a href="${temp.url}" style="text-decoration: none;"><p class="card-text text-white-50">View More...</p></a>
          </div>
        </div>`;

          newsHTML3 += ne;
        } else{
          let ne = `<br><div class="card bg-dark bg-gradient">
          <div class="card-body">
            <h5 class="card-title text-warning">${temp.title}</h5>
            <p class="card-text text-white">${temp.description}</p>
            <a href="${temp.url}" style="text-decoration: none;" onclick="fullNews();"><p class="card-text text-white-50">View More...</p></a>
          </div>
        </div>`;

          newsHTML1 +=ne;
        }
      }
      newsHTML2 += `<br><div class="text-center"><button onclick="loadmore_1()" class="btn btn-primary">Load More</button></div>`;

      col1.innerHTML = newsHTML1
      col2.innerHTML = newsHTML2;
      col3.innerHTML = newsHTML3;

    } else {
      console.log("some error occured");
    }
  };

  xhr.send();
}

function getNews_2(){       //newsdata.io
  const xhr = new XMLHttpRequest();

    let col1 = document.getElementById("col1");
    let col2 = document.getElementById("col2");
    let col3 = document.getElementById("col3");

    col1.innerHTML = "";
    col2.innerHTML = "";
    col3.innerHTML = "";

    xhr.open(
      "GET",
      `https://newsdata.io/api/1/news?apikey=${apikey_2}&language=en&q=${category_2}&page=${page_2}`,
      true
    ); //newsdata.io

    // xhr.onprogress = function () {
    //   let loading = document.getElementById("data");
    //   loading.innerHTML = `<div class="spinner-border text-success" role="status">
    //       <span class="visually-hidden">Loading...</span>
    //     </div>`;
    // };

    xhr.onload = function () {
      if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let article = json.results;
  
        newsHTML1 = "";
        newsHTML2 = "";
  
        for (news in article) {
          let temp = article[news];

          let image = "";

          if(temp.image_url){
            image = `<img class="card-img-top" src="${temp.image_url}" alt="Card image cap"></img></br>`;
          }
  
          if (news<=10 && temp.description && count<=8) {
            let ne = `<div class="card bg-light" style="width: 50rem;">
            <div class="card-body" id="card-body">
            ${image}
            <a href="${temp.link}" target="_blank" style="margin-top: 1rem;"><h5 class="card-title">${temp.title}</h5></a>
            <h6>${temp.description}</h6>
              <br>
              </div></div>`;
            count++;
            newsHTML1 += ne;
          } else {
            let ne = `<div class="card mb-3" style="max-width: 540px;">
                      <div class="row g-0">
                        <div class="col-md-4">
                          ${image}
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">${temp.title}</h5>
                            <p class="card-text">${temp.description}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                      </div>
                    </div>`;
  
            newsHTML2 += ne;
          }
        }
        newsHTML2 += `<br><div class="text-center"><button onclick="loadmore_2()" class="btn btn-primary">Load More</button></div>`;
        col1.innerHTML = newsHTML1;
        col2.innerHTML = newsHTML2;
      } else {
        console.log("some error occured");
      }
    };

  xhr.send();
}

function fullNews(){

}
