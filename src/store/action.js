import axiosInstance from '../axiosInstance';

export const GET_FOOD_START = 'GET_FOOD_START';
export const GET_FOOD_SUCCESS = 'GET_FOOD_SUCCESS';

export const NEWORDER = 'NEWORDER';

export const REMOVE = 'REMOVE';

export const removeEl = (index) =>{
    return {type: REMOVE, index};
}

export const getOrder = (dish) =>{
    return{type:NEWORDER, dish}
}

export const getfoodstart = () =>({type:GET_FOOD_START})
export const getfoodsuccess = (food) =>({type:GET_FOOD_SUCCESS, food})

export const getFood = () =>{
    return async dispatch =>{
        dispatch(getfoodstart());
        const responce = await axiosInstance.get('/foods.json');
        dispatch(getfoodsuccess(responce.data));
    }
}