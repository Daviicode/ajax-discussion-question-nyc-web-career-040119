const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

const pressMeButton = document.querySelector('#pressMeButton')
// console.log(pressMeButton)
pressMeButton.addEventListener( 'click', function () {

  // fetch jason data
  function fetchData(){
        var data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( function (data) {
            console.log(data.result)

            fullname.innerText =
            '${data.result[0]['name']['first']}'
            '${data.result[0]['name']['last']}'
          } )
        }


})

});
