const button = document.getElementById('convert-button')
const select = document.getElementById("currency-select")

const dolar = 5.36
const euro = 5.51
const bitcoin = 0.0000096

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')


    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === 'US$ Dolar Americano') {

        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)
    }

    if (select.value === '€ Euro') {

        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)
    }

    if(select.value === 'Bitcoin'){
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'BTC' }
    ).format(bitcoin * inputReais)

    }

}


changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.svg"
    }

    if (select.value === 'US$ Dolar Americano') {
        currencyName.innerHTML = "Dolar Americano"
        currencyImg.src = "./assets/eua.svg"
    }

    if(select.value === 'Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/btc.png"
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
