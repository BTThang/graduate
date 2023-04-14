
var to = 'My Friend!';
var gift_url = 'https://lh3.googleusercontent.com/pw/AJFCJaUAh_7mBL4K83GAZ_TpjSRGTDLcjBt_LXDpjmMyZC4t6DB6088KyIps6J8gXrmnTIUFgQS4mw_IqbsVH79TscOnYxIt4VY8NZBzryFxX6doplUpz_YNcS1KlP691BD5jYFO825V5oG64xxmjkokKRQw=w893-h893-s-no?authuser=0';
var gift_image_url = 'totnghiep.png';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {

    var _giftLink,
        _giftImg;

    if (gift_url) {
        _giftLink = document.createElement("a");
        _giftLink.href = gift_url;
        _giftLink.target = "_blank";
        presentImage.appendChild(_giftLink);
    }

    if (gift_image_url) {
        _giftImg = document.createElement("img");
        _giftImg.src = gift_image_url;
        if (_giftLink) {
            _giftLink.appendChild(_giftImg);
        } else {
            presentImage.appendChild(_giftImg);
        }
    }

    present.addEventListener("click", function (e) {
        present.classList.toggle("open");
        document.getElementById('card').classList.add('card-show');
        document.getElementById('playAudio').play();
    }, false);



    nametag.innerText = to;
}

init();

