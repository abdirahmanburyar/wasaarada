export const fetchStaffs = staffs => ({ type: 'FETCH_STAFF', payload: staffs})
export const isAuthorized = ({ data }) => ({ type: 'UN-AUTHORIZED', payload: data })
export const searchName = (fullName) => ({ type: 'SEARCH_STAFF', payload: fullName })