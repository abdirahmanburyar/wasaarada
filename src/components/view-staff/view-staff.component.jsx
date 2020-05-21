import React from 'react'
import { connect } from 'react-redux'
import './view-staff.styless.scss'
import moment from 'moment'
const ViewStff = ({ match, shaqaale }) => {
    return (
        <div className="view-staff">
            <img src={`http://localhost:5000/images/${shaqaale.picture}`} alt="staff" />
            <div className="staff-info">
                <span>FullName</span>
                <span>{shaqaale.fullName}</span>
            </div>
            <div className="staff-info">
                <span>Job Title</span>
                <span>{shaqaale.jobTitle}</span>
            </div>
            <div className="staff-info">
                <span>Documents</span>
                <span>Not Available</span>
            </div>
            <div className="staff-info">
                <span>Email</span>
                <span>{shaqaale.email}</span>
            </div>
            <div className="staff-info">
                <span>Address</span>
                <span>{shaqaale.address}</span>
            </div>
            <div className="staff-info">
                <span>Registred at</span>
                <span>{moment(shaqaale.createdAt).format('LLLL')}</span>
            </div>
        </div>
    )
}

const mapStateToToProps = ({ staff: { staff } }, ownProps) => {
    return {
        shaqaale: staff.find(shaqle => shaqle._id === ownProps.match.params.staffId)
    }
}

export default connect(mapStateToToProps)(ViewStff)