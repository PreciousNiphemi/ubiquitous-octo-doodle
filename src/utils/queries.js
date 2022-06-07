// List of queries that will be run

export const queries = [
  {
    id: 0,
    text: 'SELECT first_name, last_name FROM biodata',
  },
  {
    id: 1,
    text: 'SELECT first_name, last_name FROM biodata \nWHERE age > 40 ',
  },
  {
    id: 2,
    text: 'SELECT first_name, last_name FROM biodata \nWHERE age > 40 \nORDER BY first_name',
  },
];

export const queryResult = [
  {
    id: 0,
    result: [
      {
        firstName: 'Warren',
        lastName: 'Morrow',
      },
      {
        firstName: 'Gwendolyn',
        lastName: 'Galloway',
      },
      {
        firstName: 'Astra',
        lastName: 'Wyatt',
      },
      {
        firstName: 'Jasmine',
        lastName: 'Wong',
      },
      {
        firstName: 'Brooke',
        lastName: 'Mcconnell',
      },
      {
        firstName: 'Christen',
        lastName: 'Haney',
      },
      {
        firstName: 'Tate',
        lastName: 'Vega',
      },
      {
        firstName: 'Amber',
        lastName: 'Brady',
      },
      {
        firstName: 'Philip',
        lastName: 'Whitfield',
      },
      {
        firstName: 'Kitra',
        lastName: 'Hammond',
      },
      {
        firstName: 'Charity',
        lastName: 'Mathews',
      },
    ],
  },
  {
    id: 1,
    result: [
      {
        firstName: 'Gwendolyn',
        lastName: 'Galloway',
      },
      {
        firstName: 'Astra',
        lastName: 'Wyatt',
      },
      {
        firstName: 'Jasmine',
        lastName: 'Wong',
      },
      {
        firstName: 'Brooke',
        lastName: 'Mcconnell',
      },

      {
        firstName: 'Tate',
        lastName: 'Vega',
      },
      {
        firstName: 'Amber',
        lastName: 'Brady',
      },

      {
        firstName: 'Charity',
        lastName: 'Mathews',
      },
    ],
  },
  {
    id: 2,
    result: [
      {
        firstName: 'Amber',
        lastName: 'Brady',
      },
      {
        firstName: 'Astra',
        lastName: 'Wyatt',
      },
      {
        firstName: 'Brooke',
        lastName: 'Mcconnell',
      },
      {
        firstName: 'Charity',
        lastName: 'Mathews',
      },
      {
        firstName: 'Gwendolyn',
        lastName: 'Galloway',
      },
      {
        firstName: 'Jasmine',
        lastName: 'Wong',
      },
      {
        firstName: 'Tate',
        lastName: 'Vega',
      },
    ],
  },
];
