class UI {
  constructor() {
    // This is where we insert the data
    this.countryStats = document.querySelector('#stats');
    // This is where we insert the counntry flag
    this.img = document.querySelector('.country-flag');
  }

  // Inset data into the document
  insertData(data) {
    this.img.setAttribute('src', `${data.countryInfo.flag}`);
    this.countryStats.className = 'country-stats';
    this.countryStats.innerHTML = `
      <h2 class="name">${data.country}</h2>
      <ul class="stats">
        <li class="stat stat-1">Total Cases: ${data.cases}</li>
        <li class="stat stat-2">Active Cases: ${data.active}</li>
        <li class="stat stat-3">Recovered: ${data.recovered}</li>
        <li class="stat stat-4">Critical: ${data.critical}</li>
        <li class="stat stat-5">Deaths: ${data.deaths}</li>
        <li class="stat stat-6">Total tests: ${data.tests}</li>
        <li class="stat stat-7">Total Cases today: ${data.todayCases}</li>
        <li class="stat stat-8">Total Deaths today: ${data.todayDeaths}</li>
        <li class="stat stat-9">Total Recoveries today: ${data.todayRecovered}</li>
      </ul>
    `;
  }

  // Show error when country is not found
  displayError() {
    // Select parent
    const parent = document.querySelector('.container');
    // Select element before which we will insert the error
    const searchBox = document.querySelector('.search-country');
    // Create h3 element
    const h3 = document.createElement('h3');
    // Give it a className of error
    h3.className = 'error';
    // Give it textContent
    h3.textContent = 'Country Not Found....';
    // Insert the error before textContent
    parent.insertBefore(h3, searchBox);
    // Remove the error after 2.5s
    setTimeout(() => {
      document.querySelector('.error').remove();
    }, 2500);
  }
}
