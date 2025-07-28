const kvb = document.querySelector('.showButtonKVB')
const kvbBox = document.querySelector('.kvb')
const moreKVB = document.querySelector('.moreTextKVB')
const rafal = document.querySelector('.showButtonRafal')
const rafalBox = document.querySelector('.rafal')
const moreRafal = document.querySelector('.moreTextRafal')

kvb.addEventListener('click', () => {

    if (kvb.textContent === '+ show more') {
    kvbBox.style.maxHeight = 'fit-content';
    moreKVB.style.visibility = 'visible';
    kvb.textContent = '- show less'
    kvbBox.style.boxShadow = "0 0 20px rgb(207, 185, 233)";


    }
    else {
        kvbBox.style.maxHeight = '';
        kvb.textContent = '+ show more'
        moreKVB.style.visibility = 'hidden';
        kvbBox.style.boxShadow = "";

    };
});

kvbBox.addEventListener('click', () => {

    if (kvb.textContent === '+ show more') {
    kvbBox.style.maxHeight = 'fit-content';
    moreKVB.style.visibility = 'visible';
    kvb.textContent = '- show less'
    kvbBox.style.boxShadow = "0 0 20px rgb(207, 185, 233)";


    }
    else {
        kvbBox.style.maxHeight = '';
        kvb.textContent = '+ show more'
        moreKVB.style.visibility = 'hidden';
        kvbBox.style.boxShadow = "";

    };
});

rafal.addEventListener('click', () => {

    if (rafal.textContent === '+ show more') {
    rafalBox.style.maxHeight = 'fit-content';
    moreRafal.style.visibility = 'visible';
    rafal.textContent = '- show less'
    rafalBox.style.boxShadow = '0 0 20px rgb(255, 148, 112)';

    }
    else {
        rafalBox.style.maxHeight = '';
        rafal.textContent = '+ show more'
        moreRafal.style.visibility = 'hidden';
        rafalBox.style.boxShadow = "";

    };
});

rafalBox.addEventListener('click', () => {

    if (rafal.textContent === '+ show more') {
    rafalBox.style.maxHeight = 'fit-content';
    moreRafal.style.visibility = 'visible';
    rafal.textContent = '- show less'
    rafalBox.style.boxShadow = '0 0 20px rgb(255, 148, 112)';

    }
    else {
        rafalBox.style.maxHeight = '';
        rafal.textContent = '+ show more'
        moreRafal.style.visibility = 'hidden';
        rafalBox.style.boxShadow = "";

    };
});
