const COLORS = {
  confirmed: "#ff0000",
  recovered: "#008000",
  deaths: "#373c43",
};

const CASE_STATUS = {
  confirmed: "confirmed",
  recovered: "recovered",
  deaths: "deaths",
};

let body = document.querySelector("body");

let countryList, allTimeChart, daysChart, recoverRateChart;

window.onload = async () => {
  console.log("ready");
};

loadData = async (country) => {
  await loadData("Global");
};

isGlobal = (country) => {
  return country === "Global";
};

loadSummary = async (country) => {
  let summaryData = await covidAPI.getSummary();

  let summary = summaryData.Global;

  if (!isGlobal(country)) {
    summary = summaryData.Countries.filter((e) => e.Slug === country)[0];
  }

  showConfirmedTotal(summary.TotalConfirmed);
  showRecoveredTotal(summary.showRecoveredTotal);
  showDeathsTotal(summary.showDeathsTotal);
};

numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

showConfirmedTotal = (total) => {
  document.querySelector("#confirmed-total").textContent =
    numberWithCommas(total);
};
showRecoveredTotal = (total) => {
  document.querySelector("#recovered-total").textContent =
    numberWithCommas(total);
};
showDeathsTotal = (total) => {
  document.querySelector("#death-total").textContent = numberWithCommas(total);
};
