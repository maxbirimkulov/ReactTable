import axios from "axios";

const CHANGE_CHECKED = "CHANGE_CHECKED";
const ALL_CHANGE = "ALL_CHANGE";
const GET_COMPANIES= "GET_COMPANIES";
const DELETE= "DELETE";


const initialState = {
  companies: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CHECKED: {
      return {
        ...state,
        companies: state.companies.map((item) => {
          if (item.id === action.companyId) {
            return {
              ...item,
              employees: item.employees.map((item) => {
                if (item.id === action.id) {
                  return { ...item, checked: !item.checked };
                } else {
                  return item;
                }
              }),
              allCheck:
                item.employees
                  .map((item) =>
                    item.id === action.id
                      ? { ...item, checked: !item.checked }
                      : item
                  )
                  .filter((item) => !item.checked).length === 0,
            };
          } else {
            return item;
          }
        }),
      };
    }
    case ALL_CHANGE: {
      return {
        ...state,
        companies: state.companies.map((item) => {
          if (item.id === action.companyId) {
            return {
              ...item,
              allCheck: !item.allCheck,
              employees: item.employees.map((el) => {
                return { ...el, checked: !item.allCheck };
              }),
            };
          } else {
            return item;
          }
        }),
      };
    }
    case GET_COMPANIES:{
      return {
        ...state,
        companies: action.arr.map((item)=>{
          return {...item, employees: JSON.parse(item.employees)}
        })
      }
    }
    case DELETE:{
      return {
        ...state,
        companies: action.arr.map((item)=>{
          return {...item, employees: JSON.parse(item.employees)}
        })
      }
    }
    default:
      return state;
  }
};

export const changeChecked = (companyId, id) => {
  return (dispatch) => {
    return dispatch({ type: CHANGE_CHECKED, companyId, id });
  };
};

export const changeAll = (companyId) => {
  return (dispatch) => {
    return dispatch({ type: ALL_CHANGE, companyId });
  };
};

export const getCompanies = () => {
    return (dispatch) => {
      axios('http://localhost:8080/companies').then(({data})=>{
        return dispatch({type:GET_COMPANIES, arr: data})
      })
    }
};

export const deleteCompany = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:8080/delete/${id}`)
        .then(({data})=>  {
          return dispatch({type:DELETE, arr: data})
        })
  }

};