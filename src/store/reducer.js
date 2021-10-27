import {GET_FOOD_START, GET_FOOD_SUCCESS, NEWORDER, REMOVE} from './action';

const initialState = {
    food:[],
    orders: [],
};


const reducer = (state = initialState, action ) =>{
    switch (action.type){
        case GET_FOOD_START:
            return {...state};
        case GET_FOOD_SUCCESS:
            let food = Object.keys(action.food).map(key => {
                return {
                  ...action.food[key],
                  id: key,
                }
              });
            return {...state, food:food};

        case NEWORDER: 
            let orders = [...state.orders]
            let check = true;
            for(let i = 0; i < state.orders.length; i++){
                if(action.dish.name === state.orders[i].name){
                    orders[i].count += 1;
                    orders[i].stoimost += orders[i].stoimost1;
                    check = false;
                }
             }
             if(check === true){
                return{...state, orders:[...state.orders, action.dish]}
             }else{
                return{...state, orders:orders}
             }

        case REMOVE:
            let i = action.index
            if(state.orders[i].count === 1){
                let remove = state.orders.splice(i, 1);
                remove = [...state.orders]
                return{ ...state, orders: remove }
            }else{
                state.orders[i].stoimost -= state.orders[i].stoimost1;
                let delet = state.orders[i];
                delet.count -= 1;
                return {...state, orders:[...state.orders]}
            }
            
            default:
                return state;
    }

}

export default reducer;