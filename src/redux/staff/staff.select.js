import { createSelector } from 'reselect'

const selectStaff = state => state.staff


export const getStaff = createSelector(
    [selectStaff],
    (staff) => staff.staff ? staff.staff : null
)


export const selectSpecificStaff  = urlParamsId => createSelector(
    [getStaff],
    staff => staff ? staff[urlParamsId] : null
)

export const isUnAuthorized = createSelector(
    [selectStaff],
    (staff) => staff.unAuthorized ? staff.unAuthorized : null
)

export const selectStaffWithSearchable = createSelector(
    [getStaff],
     staff => {
    return staff.filter(staf => staf.fullName.toLowerCase().includes('mohamed'));
  });
  