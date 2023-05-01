import { EVENT_LIST_FAIL, EVENT_LIST_REQUEST, EVENT_LIST_SUCCESS} from "../constants/eventConstants";


export const eventListReducer = (state = {products: []}, 
    action) => {
    switch (action.type){
        case EVENT_LIST_REQUEST:
            return {loading: true, products: []}
        case EVENT_LIST_SUCCESS:
            return{loading: false, products: action.payload}
        case EVENT_LIST_FAIL:
            return{loading: false, error: action.payload}
        default:
            return state
    }
}