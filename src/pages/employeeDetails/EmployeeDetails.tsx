import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom"
import "./EmployeeDetails.css"
import { Header } from "../../components/header/Header";
import editIcon from "../../assets/images/pencil.png"
import { EmployeeData } from "../../components/employeeData/EmployeedData";
import { useEffect } from "react";

export const EmployeeDetails = () => {
    const { id }  = useParams();
    const navigate = useNavigate()
    const handleEdit = ()=> {
        navigate(`/employees/edit/${id}`);
    }
    const employees = [
        {
            id:1,
            employeeName:"John Doe",
            joiningDate:"01/01/2025",
            experience:2,
            role:"Full Stack",
            status:"Probation",
            address:{
                houseNo:"No:C-9",
                line1:"T.V.K Industrial Estate",
                line2:"Kerala 600032"
            },
            employeeId:"KV100"
        },
        {
            id:2,
            employeeName:"Johny Doe",
            joiningDate:"01/01/2025",
            experience:2,
            role:"Full Stack",
            status:"Inactive",
            address:{
                houseNo:"No:C-0",
                line1:"T.V.K Industrial Estate",
                line2:"Kochin 600032"
            },
            employeeId:"KV101"
        },
        {
            id:3,
            employeeName:"Joe",
            joiningDate:"01/01/2025",
            experience:5,
            role:"Full Stack",
            status:"Active",
            address:{
                houseNo:"No:C-103",
                line1:"Smart City Kakkanad",
                line2:"Kerala 600032"
            },
            employeeId:"KV102"
        }
    ]
    
    const employee = employees.find(emp => emp.id == (Number(id)))
    if(!employee)
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
                        <EmployeeData label="Employee Name" value={employee.employeeName}/>
                        <EmployeeData label="Joining Date" value={employee.joiningDate}/>
                        <EmployeeData label="Experience" value={employee.experience}/>
                        <EmployeeData label="Role" value={employee.role}/>
                        <div className="employee-details-status">
                            <label>Status</label>
                            <div className={`span ${employee.status.toLowerCase()}`}>{employee.status}</div>
                        </div>
                    </div>
                    <div className="employee-details-line"></div>
                    <div className="employee-details-row">
                        <div className="employee-details-address">
                            <label>Address</label>
                            <p>{employee.address.houseNo}</p>
                            <p>{employee.address.line1}</p>
                            <p>{employee.address.line2}</p>
                        </div>
                        <EmployeeData label="Employee ID" value={employee.employeeId}/>
                    </div>
                </div>
            </div>
    )
}