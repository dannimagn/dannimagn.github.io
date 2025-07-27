const kvb = document.querySelector('.showButtonKVB')
const kvbBox = document.querySelector('.kvb')
const moreKVB = document.querySelector('.moreTextKVB')
const rafal = document.querySelector('.showButtonRafal')
const rafalBox = document.querySelector('.rafal')
const moreRafal = document.querySelector('.moreTextRafal')
const emailButton = document.querySelector('.submitButton')

kvb.addEventListener('click', () => {

    if (kvb.textContent === '+ show more') {
    kvbBox.style.maxHeight = 'fit-content';
    moreKVB.style.visibility = 'visible';
    kvb.textContent = '- show less'

    }
    else {
        kvbBox.style.maxHeight = '';
        kvb.textContent = '+ show more'
        moreKVB.style.visibility = 'hidden';
    };
});

rafal.addEventListener('click', () => {

    if (rafal.textContent === '+ show more') {
    rafalBox.style.maxHeight = 'fit-content';
    moreRafal.style.visibility = 'visible';
    rafal.textContent = '- show less'

    }
    else {
        rafalBox.style.maxHeight = '';
        rafal.textContent = '+ show more'
        moreRafal.style.visibility = 'hidden';
    };
});
