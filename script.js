const kvb = document.querySelector('.showButtonKVB')
const kvbBox = document.querySelector('.kvb')
const moreKVB = document.querySelector('.moreTextKVB')
const rafal = document.querySelector('.showButtonRafal')
const rafalBox = document.querySelector('.rafal')
const moreRafal = document.querySelector('.moreTextRafal')

function showMore(place, box, more) {
    box.style.maxHeight = 'fit-content';
    more.style.visibility = 'visible';
    place.textContent = '- show less'
}

function showLess(place, box, more) {
    box.style.maxHeight = '';
    place.textContent = '+ show more'
    more.style.visibility = 'hidden';
    box.style.boxShadow = "";

}

kvb.addEventListener('click', () => {

    if (kvb.textContent === '+ show more'|| "+ mehr anzeigen" ) {
        showMore(kvb, kvbBox, moreKVB);
        kvbBox.style.boxShadow = "0 0 20px rgb(207, 185, 233)";
    }

    else {
        showLess();
        kvbBox.style.boxShadow = "";

    };
});

kvbBox.addEventListener('click', () => {

    if (kvb.textContent === '+ show more') {
        showMore(kvb, kvbBox, moreKVB);
        kvbBox.style.boxShadow = "0 0 20px rgb(207, 185, 233)";

    }
    else {
        showLess(kvb, kvbBox, moreKVB);
        kvbBox.style.boxShadow = "";

    };
});

rafal.addEventListener('click', () => {

    if (rafal.textContent === '+ show more') {
        showMore(rafal, rafalBox, moreRafal)
        rafalBox.style.boxShadow = "0 0 20px rgb(255, 148, 112)";
    }
    else {
        showLess(rafal, rafalBox, moreRafal)
    };
});

rafalBox.addEventListener('click', () => {

    if (rafal.textContent === '+ show more') {
        showMore(rafal, rafalBox, moreRafal)
        rafalBox.style.boxShadow = "0 0 20px rgb(255, 148, 112)";

    }
    else {
        showLess(rafal, rafalBox, moreRafal)
        rafalBox.style.boxShadow = "";

    };
});
