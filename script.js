const submitBtn = document.querySelector('.btn')
const myForm = document.querySelector('.myForm')
const info = document.querySelector('.info')
const details = document.querySelector('.detail')
const confirmed = document.querySelector('.case')
const recovered = document.querySelector('.recover')
const deaths = document.querySelector('.death')

//Event Listerner on the Submit Button
myForm.addEventListener('submit', function (e) {
    e.preventDefault()

    //Display the Information/details of Country
    info.classList.add('show');

    //Input the Country Name
    const country = document.querySelector('#country').value

    //Fetching dynamic data from Covid19 API
    fetch(`https://api.covid19api.com/total/country/${country}`)
        .then((res) => res.json())
        .then((res) => {
            //Recent Covid Data from Array
            let length = res.length
            let index = length - 1

            console.log(res)

            details.innerHTML = '';
            confirmed.innerHTML = '';
            recovered.innerHTML = '';
            deaths.innerHTML = '';

            //Displaying the COVID result for the Contry
            details.append(`Covid19 Details for ${country}:`)
            confirmed.append(`Total Positive Cases: ${res[index].Confirmed}`)
            recovered.append(`Total Recovered: ${res[index].Deaths}`)
            deaths.append(`Total Death: ${res[index].Recovered}`)
        })
})