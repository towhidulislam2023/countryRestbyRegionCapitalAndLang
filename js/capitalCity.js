const loadDataForCapital = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(rep => rep.json())
        .then(data => displayDataForCapital(data))
}
const displayDataForCapital = (data) => {
    const select = document.getElementById('selectCapitalContainer');
    data.forEach(capital => {
        // console.log(capital.capital[0]);
        const option = `<option>${capital?.capital[0]}</option>`
        select.innerHTML += (option);
    });
    
}
document.getElementById('selectCapitalContainer').addEventListener('change', function () { 
    const capital = document.getElementById('selectCapitalContainer').value;
    // console.log(capital);
    const regloadDataforcapital = () => {
        fetch(`https://restcountries.com/v3.1/capital/${capital}`)
            .then(rep => rep.json())
        .then(data=>displayDataCapital(data))
    }
    const displayDataCapital = (data) => {
        const divContainer = document.getElementById('divContainer');
        divContainer.innerHTML = '';
        data.forEach(allCapital => {
            // console.log(Object.values(regCountery.currencies)[0].name);
            const div = document.createElement('div')
            div.classList = 'card w-96 bg-base-100 shadow-xl'
            div.innerHTML = `
            <figure><img src="${allCapital.flags.png}" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">Name: ${allCapital.name.common}</h2>
              <p>population:${allCapital.population}</p>
              <p>Language:  ${Object.values(allCapital.languages)[0]}</p>
              <p>Currencie:  ${Object.values(allCapital.currencies)[0].name}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">See More</button>
              </div>
            </div>
            `
            divContainer.appendChild(div)

        })
  }

    regloadDataforcapital(capital)
})


loadDataForCapital()