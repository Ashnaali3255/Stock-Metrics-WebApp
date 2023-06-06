// import { createAsyncThunk } from '@reduxjs/toolkit';

// const FETCH_COMPANIES_LIST_REQUEST = 'FETCH_COMPANIES_LIST_REQUEST';
// const FETCH_COMPANIES_LIST_SUCCESS = 'FETCH_COMPANIES_LIST_SUCCESS';
// const FETCH_COMPANIES_LIST_FAILURE = 'FETCH_COMPANIES_LIST_FAILURE';

// const fetchCompaniesList = createAsyncThunk(
//   'companies/fetchCompaniesList',
//   async () => {
//     const url = 'https://mattermarkraygorodskijv1.p.rapidapi.com/getCompaniesList';
//     const options = {
//       method: 'POST',
//       headers: {
//         'X-RapidAPI-Key': '032b57fca6mshe34316a66b67d92p1e8431jsn944052e12892',
//         'X-RapidAPI-Host': 'MattermarkraygorodskijV1.p.rapidapi.com',
//       },
//     };

//     try {
//       const response = await fetch(url, options);
//       const result = await response.text();
//       console.log(result);
//       return result;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   },
// );

// // Reducer function
// const companiesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_COMPANIES_LIST_REQUEST:
//       return {
//         ...state,
//       };
//     case FETCH_COMPANIES_LIST_SUCCESS:
//       return {
//         ...state,
//         companiesList: action.payload,
//         error: null,
//       };
//     case FETCH_COMPANIES_LIST_FAILURE:
//       return {
//         ...state,
//         companiesList: null,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export { fetchCompaniesList };
// export default companiesReducer;

import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_COMPANIES = 'companies/companies/GET_COMPANIES';
const GET_COMPANIEY_DETAILS = 'companies/companies/GET_COMPANIEY_DETAILS';

const url = 'https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=7463b68c7759d533ae3d84f1c5ef122b';

const initialState = { companyList: [], companyDetails: {} };

// reducer
const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        companyList: action.companies,
      };
    case GET_COMPANIEY_DETAILS:
      return {
        ...state,
        companyDetails: action.companies,
      };
    default:
      return state;
  }
};

// thunk
export const getCompanies = createAsyncThunk(
  GET_COMPANIES,
  async (args, { dispatch }) => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: GET_COMPANIES, companies: data });
  },
);

export const getCompanyDetails = createAsyncThunk(
  GET_COMPANIEY_DETAILS,
  async (args, { dispatch }) => {
    const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${args}?apikey=7463b68c7759d533ae3d84f1c5ef122b`);
    const data = await response.json();
    // console.log(`data: ${data}`);

    dispatch({ type: GET_COMPANIEY_DETAILS, companies: data[0] });
  },
);

export default companiesReducer;
