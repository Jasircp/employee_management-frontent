import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom"
import "./EmployeeDetails.css"
import { Header } from "../../components/header/Header";
import editIcon from "../../assets/images/pencil.png"
import { EmployeeData } from "../../components/employeeData/EmployeedData";
import { useEffect } from "react";
import { useGetEmployeeByIdQuery } from "../../api-service/employees/employees.api";

export const EmployeeDetails = () => {
    const { id } = useParams();
    const { data: employee } = useGetEmployeeByIdQuery({ id: Number(id) });
    const navigate = useNavigate()
    const handleEdit = () => {
        navigate(`/employees/edit/${id}`);
    }
    if (!employee)
        return <div className="employee-details-container">No Such Employee</div>

    return (
        <div className="employee-details-container">
            <div className='employee-details-title'>
                <h2>Employee Details</h2>
                <div onClick={handleEdit} className="edit-employee">
                    <div className="edit-icon"><img src={editIcon}></img></div>
                    <div className='edit-employee-text'>Edit Employee</div>
                </div>
            </div>
            <div className="employee-details-row-container">
                <div className="employee-details-row">
                    <EmployeeData label="Employee Name" value={employee.name} />
                    <EmployeeData label="Joining Date" value={employee.dateOfJoining} />
                    <EmployeeData label="Experience" value={employee.experience} />
                    <EmployeeData label="Role" value={employee.role} />
                    <div className="employee-details-status">
                        <label>Status</label>
                        <div className={`span ${employee.status.toLowerCase()}`}>{employee.status}</div>
                    </div>
                </div>
                <div className="employee-details-line"></div>
                <div className="employee-details-row">
                    <div className="employee-details-address">
                        <label>Address</label>
                        <p>{employee?.address.houseNo}</p>
                        <p>{employee?.address.line1}</p>
                        <p>{employee?.address.line2}</p>
                        <p>{employee?.address.pincode}</p>
                    </div>
                    <EmployeeData label="Employee ID" value={employee.employeeId} />
                </div>
            </div>
        </div>
    )
}