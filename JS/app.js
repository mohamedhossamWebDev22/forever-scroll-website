window.onscroll = function (){wait()};

let website = document.getElementById('website')

function wait() {
    setTimeout(function(){create()}, 1452)
}
function create() {
    var classes = ['new', 'new2'];
    var txt = ['Foreverrrrrr', 'INfinty', 'scroll', 'endless', '∞ ∞ ∞ ∞']

    website.innerHTML += `<div class="${classes[Math.floor(Math.random() * classes.length)]}">
            <div class="height">
                ${txt[Math.floor(Math.random() * txt.length)]}
            </div>            
        </div>`;
}