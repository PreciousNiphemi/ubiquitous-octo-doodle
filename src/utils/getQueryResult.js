export const getQueryResult = (queryID, result) => {
  switch (queryID) {
    case 0:
      return result[queryID]?.result;

    case 1:
      return result[queryID]?.result;
    case 2:
      return result[queryID]?.result;
    default:
      console.log('you are yet to run a query');
  }
};
