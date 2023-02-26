const loadData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(rep => rep.json())
    .then(data=>displayData(data))
}


//region
const displayData = (data) => {
    const uniqueRegions = [...new Set(data.map(country => country.region))];
    // console.log(uniqueRegions);
    const select = document.getElementById('selectContainer');
// console.log(data);
uniqueRegions.forEach(region => {
        const option = `<option>${region}</option>`
        select.innerHTML += (option);
        
    });
}
//region
document.getElementById('selectContainer').addEventListener('change', function () {
    const region = document.getElementById('selectContainer').value;
    const regloadData = () => {
        fetch(`https://restcountries.com/v3.1/region/${region}`)
            .then(rep => rep.json())
        .then(data=>RegiondisplayData(data))
    }

    const RegiondisplayData = (data) => {
        const divContainer = document.getElementById('divContainer');
        divContainer.innerHTML = '';
        data.forEach(regCountery => {
          
            // console.log(Object.values(regCountery.currencies)[0].name);
            const div = document.createElement('div')
            div.classList = 'card w-96 bg-base-100 shadow-xl'
            div.innerHTML = `
            <figure><img src="${regCountery.flags.png}" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">Name: ${regCountery.name.common}</h2>
              <p>population:${regCountery.population}</p>
              <p>Language:  ${Object.values(regCountery.languages)[0]}</p>
              <p>Currencie:  ${Object.values(regCountery.currencies)[0].name  }</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">See More</button>
              </div>
            </div>
            `
            divContainer.appendChild(div)

        })
   }
   regloadData(region)
})
loadData()