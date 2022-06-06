export const getQueryResult = queryID => {
  switch (queryID) {
    case 1:
      console.log('result of query 1');
      break;
    case 2:
      console.log('result of query 2');
      break;
    case 3:
      console.log('result of query 3');
    default:
      console.log('you are yet to run a query');
  }
};
