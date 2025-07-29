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
    box.style.boxShadow = "0 0 20px rgb(207, 185, 233)";
}

function showLess(place, box, more) {
    box.style.maxHeight = '';
    place.textContent = '+ show more'
    more.style.visibility = 'hidden';
    box.style.boxShadow = "";

}

kvb.addEventListener('click', () => {

    if (kvb.textContent === '+ show more') {
        showMore(kvb, kvbBox, moreKVB);
    }

    else {
        showLess();
    };
});

kvbBox.addEventListener('click', () => {

    if (kvb.textContent === '+ show more') {
        showMore(kvb, kvbBox, moreKVB);
    }
    else {
        showLess(kvb, kvbBox, moreKVB);
    };
});

rafal.addEventListener('click', () => {

    if (rafal.textContent === '+ show more') {
        showMore(rafal, rafalBox, moreRafal)
    }
    else {
        showLess(rafal, rafalBox, moreRafal)
    };
});

rafalBox.addEventListener('click', () => {

    if (rafal.textContent === '+ show more') {
        showMore(rafal, rafalBox, moreRafal)
    }
    else {
        showLess(rafal, rafalBox, moreRafal)
    };
});
