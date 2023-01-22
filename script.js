async function fetchData() {
    const res = await fetch ("https://api.covidactnow.org/v2/country/US.json?apiKey=f86424932eb44ac7bdbe0e2cdde14841");
    const record = await res.json();
    console.log(record);
    document.getElementById("country").innerHTML=record.data[0].country;
    document.getElementById("metrics.weeklyNewCasesPer100k").innerHTML=record.data[0].metrics.weeklyNewCasesPer100k;
    document.getElementById("actuals.deaths").innerHTML=record.data[0].actuals.deaths;
}
fetchData();


