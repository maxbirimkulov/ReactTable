const CHANGE_CHECKED = 'CHANGE_CHECKED';
const ALL_CHANGE = 'ALL_CHANGE';
const ADD_COMPANY = 'ADD_COMPANY';

const initialState = {
    companies: [{
        companyName: 'CodiFy',
        logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEUtUaP///8iSqAnTaEqT6KEl8cZR6AjS6Df5PH19/seSJ8tUqTZ4O5bdbSlstS+x+DI0eV9kcNhebadrNLw8/jDzONSbrFZc7SPoMs/Yavk6fM0V6Znf7rt8PeWps7Q2Oqvu9oPQZ0APJtwh763wt45Xap0isBLarBDZK2xvNq7xN4AN5qBlcYu4WQxAAAGfUlEQVR4nO2Y6XLiOBSFjSRkLNvEEBZjs8QNhoTJ+z/f6F55BaeShpmeqqnz/Ui3hS3pSHeTPA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/NdIKZXqNynb9Cen8C8OpowOL/G6NFq2jVKL93iVa6Hat4hCm85bQjuMfUvVDxU+/2pUp0uLffR1r4+6//eBfqmb55Wbcn9YjEajIHtb1yMrc5lm1LY8+q5JrqKJJUo+0ljV0/ZP2YTJYqnCl0mXLN0c7N+pqcfx19Q6liK1Hx3922nkSWsyYlr1GyXTrRTP6VPhfjeqCU7vPLISadN4LVmijIPmrUmau1HFoW7b+iqMRj2mRUr/zEw9EP0+sSs6pdZbhf521Ko2L51+DtunJMp82ZtWtiU9et8dIVd9hTTRo/heoZHU986tkPJJWBCLLxSK02jZGGRP4Si43/DfwLg5BlFycLt21XY9507G8sCqXnSjcJctqlFn3DhN6PtdkqzlvUIhc/pmSb7niSO17fUXe6g2u1HQeKJTGATVomZPCNQfLGUmi6LQq6sVaCOLyskFs7VtE2/0O20YK0yKwpQztygxzdH8Wtnml1+FdFa42KiwQXmGZaWG4ggt4JLi1qBCQxa9r32WFa6FdcwLT2D8sJ26zVqGzvmkGX+EFOtmJPCdelWappPYROIU2pSihBrTVxFtoifnAU3cq/xsUbYBkXZO0wSDua8MG+yFfh1SqHxatijsKAzW9IrkHk76QYGKHeWgZPPMOdG6hF1416nc2P3cWfOpFVKj/iSJc39A4aYf21VJphvlmoPOmbdiSCF3M2pijVPI0/JjWuLiQYXyEvAK3+j2aKqXSrYmg5n3FXoFrcxJfK/QEzz1KTvkySWZIYW8U+1edRSKmF35QYVs/Im5TanhxBppPVU2U7u2PYU2tFvvDQcUlr50qO4YI3bsqm1wD12Y25WqUThaGSl9wyucGu8x9HXoa+VZn1isqj1kB7rdQ45FvF83CoNt7JhfaokiqaJvbSsDCtnzD+1kWOFsHcfblKw8yx+tawrqdHuXbMxHFdc9MuQd+aHqK3SJkBbhRiFFeGb0VhuWencJ5rUJlPcKjV2F4NKEL6cwqLPF7vhwKC0mFPXvSkSfYvwiJuuVgsZayluFmjZmPaCw4aNxHc2hNwkbu71TKDe0hX8l1ardZPzr5VEbtQojZ4G38FwXZ10Um6SOmn2Fpp7NlwrbAK/0oU6fXyg0VEKlBa2EK2N7Cndv4f0Uf6qQ5nm+L4n8FXe9iDL+962paRo/lBMyqwGFydKRpK1l6XZzhhXmEwrefm7NeRc2Cg+JhVctelSgi5PTgUhsxp0iNGFVPYXyQpPJ7yPNohS+oxMbvlPIBV0iFIdNXvAmlkpvFX0xxx/BDpeVA4HKnLNKXzDN27NFrZAT+EEOKNwMGNR3Cg1VGGPjiVnl83U+tAWUJ97tALtHM74qScdr5/NmGqJMo8AeGT/iKl12FSpJ36U/yfg/UCipZN2V2mjKQWz7nYzvaRrr14MKPcGnpHNRH2jzS+M99sQelnl77G8VKsE5MuAK7x9QyDXBgpz3hfI+ld8dhVIFzyhUIRvjPtTWc4xeT4ItxTJlCHc9QTTnw6V91uGRDxepe9M1W7f7PYXnwt1RCBtq+6cuKpVY4YoG0zm5ZPaolVbll+1het5ux0uyeFugqXz/2mXKxQtJmYzH+6vz0BMdhFQ8pxB/iLeb31S4fJ0yacildReb3znSvNHQJx7t9fGMaNNx0O/f5jFV3rRxau+d8UcnSuCcNBxj//cUtjvGRXdUJRnaTnsG75/xR5OHqzYefpt1O5vSxMvFNwqzGV/BdRWKxxRGnibnWzmjLai4WZSqr3CyeuYWw0YbmTaZ4WVFieeLPaxfmlyP1R2ji6lMahVSFTCosC5iBxRmklJEVOc7rpVejWkvj4Iolc8JJI35dro8HK7pRbhLo3w27lFSa/lp//d5nr+HnXTevLiyTefxeDZkT/JY9+Ee407XZzW3f5vKUa7t01bKbfXz5/HiPXmZyCjfGghd9ar6WfSoFoLp34M3r1Cr/Wr4+tZv+nDdd7q2B0/qtJXvnmTz+5+9dwcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8r/gbXRJk+iCQFUMAAAAASUVORK5CYII=',
        description: 'asdasdasd',
        employees: [
            {id: 1, checked: false, name: 'Ivan', surname: 'Ivanov', age: 25},
            {id: 2, checked: false, name: 'Maksim', surname: 'Maksimov', age: 27},
            {id: 3, checked: false, name: 'Vladimir', surname: 'Ivanov', age: 20},
            {id: 4, checked: false, name: 'Pavel', surname: 'Petrov', age: 19},
            {id: 5, checked: false, name: 'Vlad', surname: 'Petrov', age: 21},
        ],
        allCheck: false,
        id:1
        },
        {
            companyName: 'FACEBOOK',
            logo: 'data:image/png;base64,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',
            description: 'asdasdasd',
            employees: [
                {id: 1, checked: false, name: 'Ivan1', surname: 'Ivanov', age: 25},
                {id: 2, checked: false, name: 'Maksim1', surname: 'Maksimov', age: 27},
                {id: 3, checked: false, name: 'Vladimir1', surname: 'Ivanov', age: 20},
                {id: 4, checked: false, name: 'Pavel1', surname: 'Petrov', age: 19},
                {id: 5, checked: false, name: 'Vlad1', surname: 'Petrov', age: 21},
            ],
            allCheck: false,
            id:2
        }
        ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CHECKED : {
            return {
                ...state,
                companies: state.companies.map((item)=>{
                    if (item.id === action.companyId){
                        return {...item,  employees: item.employees.map((item) => {
                                if (item.id === action.id) {
                                    return {...item, checked: !item.checked}
                                } else {
                                    return item
                                }
                            }),  allCheck: item.employees.map(item => item.id === action.id ? {...item, checked: !item.checked} : item).filter(item => !item.checked).length === 0}
                    } else{
                        return item
                    }
                })
            }
        }
        case ALL_CHANGE : {
            return {
                ...state,
                companies: state.companies.map((item)=>{
                    if (item.id === action.companyId){
                        return {...item, allCheck: !item.allCheck, employees: item.employees.map(el => {
                                return {...el, checked: !item.allCheck}
                            })}
                    } else {
                        return  item
                    }
                })
            }
        }
        case ADD_COMPANY : {
            return {
                ...state,
                companies: [...state.companies, {
                    companyName: action.name,
                    logo: action.logo,
                    description: action.description,
                    employees: action.employees,
                    allCheck: false,
                    id: state.companies.length + 1
                }]
            }
        }
        default :
            return state
    }
}

export const changeChecked = (companyId, id) => {
    return (dispatch) => {
        return dispatch({type: CHANGE_CHECKED, companyId,  id})
    }
};

export const changeAll = (companyId) => {
    return (dispatch) => {
        return dispatch({type: ALL_CHANGE, companyId})
    }
};

export const addCompany = (name, logo, description, employees) => {
    return (dispatch) => {
        return dispatch({type: ADD_COMPANY, name, logo, description, employees})
    }
};