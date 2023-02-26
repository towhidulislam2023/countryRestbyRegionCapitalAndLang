console.log("ami asiu");
const loadDataForlang = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(rep => rep.json())
        .then(data => displayDataForlang(data))
}
const displayDataForlang = (data) => {
    //..........................................
    const newArr = [];
    //......................................
    const select = document.getElementById('selectLangContainer');
    for (const allData of data) {
        console.log(Object.values(allData.languages)[0]);
            const option = `<option value="${Object.keys(allData.languages)[0]}">${Object.values(allData.languages)[0]}</option>`
            select.innerHTML += (option);
    }
}
 
document.getElementById('selectLangContainer').addEventListener('change', function () {
    const lang = document.getElementById('selectLangContainer').value;
    // console.log(lang);
    const regloadForlang = () => {
        fetch(`https://restcountries.com/v3.1/lang/${lang}`)
            .then(rep => rep.json())
            .then(data => RegiondisplaylangData(data))
    }
    const RegiondisplaylangData = (data) => {
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
          <p>Currencie:  ${Object.values(regCountery.currencies)[0].name}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">See More</button>
          </div>
        </div>
        `
        divContainer.appendChild(div)
})
}
regloadForlang(lang)
})

 loadDataForlang()
