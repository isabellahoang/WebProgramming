
function displayCountryInfo (Country, Population) {
    document.getElementById("Country").innerHTML = "";
    let h2 = document.createElement("h2");
    let h2Population = document.createElement("h2");
    h2.innerText = Country + " - " + Population;
    document.getElementById("Country").appendChild(h2);
}
displayCountryInfo ("Germany","83.883.596")

function displayCases(Total, New, Active, Critical, Recovered) {
    document.getElementById("Cases").innerHTML = "";

    let h3 = document.createElement("h3");

    let h3Total = document.createElement("h3");
    h3Total.innerText = "Total: " + Total;

    let h3New = document.createElement("h3");
    h3New.innerText = "New: " + New;

    let h3Active = document.createElement("h3");
    h3Active.innerText = "Active: " + Active;

    let h3Critical = document.createElement("h3");
    h3critical.innerText = "Critical: " + Critical;

    let h3Recovered = document.createElement("h3");
    h3Recovered.innerText = "Recovered: " + Recovered;

    let div = document.createElement("div");
    div.appendChild(h3Total);
    div.appendChild(h3New);
    div.appendChild(h3Active);
    div.appendChild(h3Critical);
    div.appendChild(h3Recovered);

    document.getElementById("Cases").appendChild(h3);
}

function displayDeaths (TotalDeaths, NewDeaths) {
    document.getElementById("Deaths").innerHTML = "";

    let h3 = document.createElement("h3");

    let h3Total = document.createElement("h3");
    h3TotalDeaths.innerText = "Total: " + TotalDeaths;

    let h3New = document.createElement("h3");
    h3NewDeaths.innerText = "New: " + NewDeaths;

    let div = document.createElement("div");
    div.appendChild(h3TotalDeaths);
    div.appendChild(h3NewDeaths);

    document.getElementById("Deaths").appendChild(h3);
}

function search() {
    let searchInput = document.getElementById("searchInput").value;
    const url = `https://covid-193.p.rapidapi.com/statistics/current.json?q=${searchInput}&lang=en`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '53db84c469mshd800dfd2824be8fp1a8227jsned5728605e55',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

    fetch(url, options).then((res) => {
        return res.json();
    }).then((response) => {
        displayCountryInfo(response.country, response.population);
        displayCases(response.cases.total, response.cases.new, response.cases.active, response.cases.critical, response.cases.recovered);
        displayDeaths(response.deaths.new, response.deaths.total);
    });
}

