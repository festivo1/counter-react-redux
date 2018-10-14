import { INCREMENT, DECREMENT } from "../actions/actionsTypes";
const initialState = {
    count: 0
  };
const Reducers = (state = initialState, action) => {
    //console.log(state);
    switch (action.type) {
        case INCREMENT:{
                console.log(state.count);
                return  {
                    count:state.count+1
            }
        }

        case DECREMENT:
        {
        return {
            count:state.count-1
        };
        }
        default:
            return state;
    }
    

}
export default Reducers;
