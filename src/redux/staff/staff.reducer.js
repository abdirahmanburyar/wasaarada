const INITIAL_STATE = {
    staff: null,
    unAuthorized: null,
    search: ''
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch(type){
        case 'FETCH_STAFF':
            return {
                ...state,
                staff: payload,
                unAuthorized: null
            }
        case 'UN-AUTHORIZED':
            return {
                ...state,
                staff: null,
                unAuthorized: payload
            }
        case 'SEARCH_STAFF':
            console.log(payload)
            return {
                ...state,
                search: payload
                
            }
        default: 
            return state
    }
}