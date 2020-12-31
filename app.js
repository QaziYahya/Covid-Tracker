// New Covid Object
const covid = new Covid19();

// New UI Object
const ui = new UI();

// Event listener on Submit button
document.querySelector('.btn').addEventListener('click', getCountryData);

// Get Country Data
function getCountryData() {
  // Get user entered country
  const country = document.querySelector('.search-country').value;
  // Get user entered country data
  if (country != '') {
    covid.getCountryStats(country).then((data) => {
      if (data.message === "Country not found or doesn't have any cases") {
        // If country is not found then show error
        ui.displayError();
      } else {
        // Show country Stats
        ui.insertData(data);
      }
    });
  }
}
