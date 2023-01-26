export const searchReducer=(state={},action)=>{
    switch(action.type){
        case "Search_Request":
            return{
                ...state,
                loading:true
            }
        case "Fetch_data":
            return{
                loading:false,
                user_details:action.payload
            } 
        case "Fetch_error":
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }

}