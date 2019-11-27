import Service from './../Service/MainService';
const ListReducer = (state = { userData:[]}, action) => {
    switch (action.type) {
        case 'GET_USER': 
         return{
                ...state,userData:action.payload
            }
        default:
         return{
             state
         }    
    }
}

export default ListReducer;


export const getUserList = ()=>{
    return dispatch=>{
        Service.get('').then(res=>{
            dispatch({
                type:'GET_USER',
                payload:res.data
            })
        })
    }
}