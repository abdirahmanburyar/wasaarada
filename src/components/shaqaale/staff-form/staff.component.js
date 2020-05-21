import React, { Fragment } from 'react'
import './staff.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getStaff, isUnAuthorized } from '../../../redux/staff/staff.select'
import { Link } from 'react-router-dom'
const Staff = (props) => {
    const { staffs, match, unAuthorized } = props
    return (
        <div className="staff-box">
            <Fragment>
           <table className="table">
            <thead>
                <tr>
                <th scope="col">FullName</th>
                <th scope="col">Status</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                {   
                    staffs ? staffs.map(staf => {
                        return (
                                <tr className="staff-info" key={staf._id}>
                                    <td>{staf.fullName}</td>
                                    <td>Active</td>
                                    <td>
                                        <div className="handle-staff">
                                            <Link to={`${match.path}/${staf._id}`}><span><i className="fas fa-eye"></i></span></Link>
                                            <span><i className="fas fa-pencil-alt"></i></span>
                                        </div>
                                    </td>
                            </tr>
                        )
                    })
                    :
                    unAuthorized ? (
                        <tr>
                             <td colSpan='4' className="zero-staff">{unAuthorized.msg}</td>
                        </tr>
                    )
                    :
                    (   
                        <tr>
                            <td colSpan='4' className="zero-staff">No Staff yet Registered</td>
                        </tr>
                    )
                }
            </tbody>
            </table>
            </Fragment>
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    staffs: getStaff,
    unAuthorized: isUnAuthorized
  })

export default connect(mapStateToProps)(Staff)