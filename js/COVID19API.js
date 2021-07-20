const covidAPI = {
  getSummary: async () => {
    return await fetchRequest(covidAPIEndPoints.summary());
  },
};

const covidAPIBase = "https://covid19api.com/";
const covidAPIEndPoints = {
  summary: () => {
    return getAPIPath("summary");
  },
};

getAPIPath = (endPoint) => {
  return covidAPIBase + endPoint;
};
