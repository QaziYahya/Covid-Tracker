class Covid19 {
  // Get data from Covid API
  async getCountryStats(country) {
    // Fetch country
    const response = await fetch(
      `https://corona.lmao.ninja/v2/countries/${country}?yesterday=false&strict=true`
    );

    // Get data in Json format
    const responseData = response.json();

    // Return the data
    return responseData;
  }
}
