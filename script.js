async function fetchData() {
    const res=await fetch ("https://api.covidactnow.org/v2/country/US.json?apiKey=f86424932eb44ac7bdbe0e2cdde14841");
    const record=await res.json();
    document.getElementById("date").innerHTML=record.data[0].date;
    document.getElementById("country");
    document.getElementById("metrics.weeklyNewCasesPer100k");
    document.getElementById("actuals.deaths");
}
fetchData();
