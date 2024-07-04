function switchMeasurement() {
  const formatBtn = document.querySelector(".format");

  if(formatBtn.textContent === "Metric") {
    const metricEle = document.getElementsByClassName("metric");
    Array.from(metricEle).forEach((element) => {
      element.style.display = "block";
    })
    const imperialEle = document.getElementsByClassName("imperial");
    Array.from(imperialEle).forEach((element) => {
      element.style.display = "none";
    })
    formatBtn.textContent = "Imperial";
  } else {
    const metricEle = document.getElementsByClassName("metric");
    Array.from(metricEle).forEach((element) => {
      element.style.display = "none";
    })
    const imperialEle = document.getElementsByClassName("imperial");
    Array.from(imperialEle).forEach((element) => {
      element.style.display = "block";
    })
    formatBtn.textContent = "Metric";
  }
}

export default switchMeasurement;