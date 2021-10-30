async function getRosterBusterData() {
  try {
    const response = await fetch("http://localhost:3040/dummy-records");

    // Return empty object if network error is present.
    if (!response.ok) return {};
    const data = await response.json();

    // Reducer -  to group the incoming data by date.
    const reducer = (totalValue, currentValue) => {
      let key = currentValue["Date"].toString();
      if (!totalValue[key]) {
        totalValue[key] = [];
      }
      totalValue[key].push(currentValue);
      return totalValue;
    };

    const formattedData = data.reduce(reducer, {});

    return formattedData;
  } catch (error) {
    return {};
  }
}

export { getRosterBusterData };
