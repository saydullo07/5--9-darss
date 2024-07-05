let wraper = document.querySelector(".wraper");
let loader=document.querySelector('.loader')
function createCard(user) {
    return `
          <div class="card">
              <img src="${user.flag}">
              <h2>davlat   ${user.country}</h2>
              <h2>code ${user.code}</h2>
              <h2>id ${user.id}</h2>
          </div>
          `;
  }
document.addEventListener('DOMContentLoaded',function() {
      fetch("https://cars-pagination.onrender.com/all-countries", {
        method: "GET",
      })

            .then(function (resp) {
                 if (resp.status < 300) {
                 return resp.json();
                }
            })
        .then(function (data) {
            data.forEach((user) => {
              let card = createCard(user);
              wraper.innerHTML += card;
            });
        })
        .catch(function (err) {
          console.log(err);
        })
        
        .finally(function() {
            loader.style.display='none'
        })
})