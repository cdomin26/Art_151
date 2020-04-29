var vinDiv = document.getElementById('vin');

//fetch('https://api.kanye.rest')
//.then(res => res.json())
//.then(quote => {
//    quotesDiv.innerHTML += `<p> ${quote.quote} </p>`
//});

var vinArray = ["3VWRK69M23M103574", "JTJHF10U610216055", "WDBRF61JX2F270853",
                "1GNSKJKC9FR500315", "JF1GPAC68E8278613"];

var vinImages = ["http://downloads.innova.com/polk-vehicle-images/JETTA7.jpg", "http://downloads.innova.com/polk-vehicle-images/RX3001.jpg",
"http://downloads.innova.com/polk-vehicle-images/C-CLASS7.jpg", "http://downloads.innova.com/polk-vehicle-images/USC50CHS101B021001.jpg",
"http://downloads.innova.com/polk-vehicle-images/USC40SUC042A018000.jpg"];


let randomNum = Math.floor(Math.random() * vinArray.length);

let randomVin = vinArray[randomNum];

let vinButton = document.getElementById('give-vin');

vinButton.addEventListener("click", evt => {
    vinDiv.innerHTML += `<p> ${randomVin} </p>`
});

let carButton = document.getElementById('give-cat');

carButton.addEventListener("click", evt => {

     let carDiv = document.getElementById('car-pic');

    // fetch('https://api.thecatapi.com/v1/images/search?')
    // .then(res => res.json())
    // .then(cats => {
    //     cats.forEach(cat => {
    //         catDiv.innerHTML = `<h3> Here is the cat wishing you a good day </h3> <img src="${cat.url}" alt="kitty" />`
    //     });
    // })

    fetch("http://api.carmd.com/v3.0/image?vin=2GCEK19T2X1102515", {
	"method": "GET",
	"headers": {
        "accept": "application/json",
        "accept-encoding": "gzip, deflate",
        "accept-language": "en-US,en;q-0.8",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36",
        "authorization": "Basic YTAxZDQyM2MtMDljNy00ZTRmLWEwNjMtZjA3MmYwNGQzZDc1",
        "partner-token": "a54d2a47e5b448b8b6241800c7478330"
	}
})
.then(res => {

    let pic = vinImages[randomNum];

    carDiv.innerHTML = `<img src= "${pic}" alt="pic"/>`

    var json = res.json()
    console.log(json)

    var yeet = JSON.parse(JSON.stringify(json))
    console.log(yeet.data)


})

})