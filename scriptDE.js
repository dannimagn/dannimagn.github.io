const kvb = document.querySelector('.showButtonKVB')
const kvbBox = document.querySelector('.kvb')
const moreKVB = document.querySelector('.moreTextKVB')
const rafal = document.querySelector('.showButtonRafal')
const rafalBox = document.querySelector('.rafal')
const moreRafal = document.querySelector('.moreTextRafal')

function showMore(place, box, more) {
    box.style.maxHeight = 'fit-content';
    more.style.visibility = 'visible';
    place.textContent = '- weniger anzeigen'
}

function showLess(place, box, more) {
    box.style.maxHeight = '';
    place.textContent = '+ mehr anzeigen'
    more.style.visibility = 'hidden';
    box.style.boxShadow = "";

}

kvb.addEventListener('click', () => {

    if (kvb.textContent === '+ mehr anzeigen') {
        showMore(kvb, kvbBox, moreKVB);
        kvbBox.style.boxShadow = "0 0 20px rgb(207, 185, 233)";
    }

    else {
        showLess(kvb, kvbBox, moreKVB);
        kvbBox.style.boxShadow = "";

    };
});

kvbBox.addEventListener('click', () => {

    if (kvb.textContent === '+ mehr anzeigen') {
        showMore(kvb, kvbBox, moreKVB);
        kvbBox.style.boxShadow = "0 0 20px rgb(207, 185, 233)";

    }
    else {
        showLess(kvb, kvbBox, moreKVB);
        kvbBox.style.boxShadow = "";

    };
});

rafal.addEventListener('click', () => {

    if (rafal.textContent === '+ mehr anzeigen') {
        showMore(rafal, rafalBox, moreRafal)
        rafalBox.style.boxShadow = "0 0 20px rgb(255, 148, 112)";
    }
    else {
        showLess(rafal, rafalBox, moreRafal)
        rafalBox.style.boxShadow = "";

    };
});

rafalBox.addEventListener('click', () => {

    if (rafal.textContent === '+ mehr anzeigen') {
        showMore(rafal, rafalBox, moreRafal)
        rafalBox.style.boxShadow = "0 0 20px rgb(255, 148, 112)";

    }
    else {
        showLess(rafal, rafalBox, moreRafal)
        rafalBox.style.boxShadow = "";

    };
});
