import "./EmployeeList.css";
import deleteIcon from '../../assets/images/delete.png'
import editIcon from '../../assets/images/edit.png'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Button } from "../../components/button/Button";
import { Modal } from "../../components/modal/Modal";
import { useMemo, useState } from 'react'
import { useSelector } from "react-redux";
import type { EmployeeState } from "../../store/employee/employee.types";

// const employees = [
//         {
//             id:1,
//             employeeName:"John Doe",
//             joiningDate:"01/01/2025",
//             experience:2,
//             role:"Full Stack",
//             status:"Probation",
//             address:{
//                 houseNo:"No:C-9",
//                 line1:"T.V.K Industrial Estate",
//                 line2:"Kerala 600032"
//             },
//             employeeId:"KV100"
//         },
//         {
//             id:2,
//             employeeName:"Johny Doe",
//             joiningDate:"01/01/2025",
//             experience:2,
//             role:"Full Stack",
//             status:"Inactive",
//             address:{
//                 houseNo:"No:C-0",
//                 line1:"T.V.K Industrial Estate",
//                 line2:"Kochin 600032"
//             },
//             employeeId:"KV101"
//         },
//         {
//             id:3,
//             employeeName:"Joe",
//             joiningDate:"01/01/2025",
//             experience:5,
//             role:"Full Stack",
//             status:"Active",
//             address:{
//                 houseNo:"No:C-103",
//                 line1:"Smart City Kakkanad",
//                 line2:"Kerala 600032"
//             },
//             employeeId:"KV102"
//         },
//         {
//             id:4,
//             employeeName:"Joe",
//             joiningDate:"01/01/2025",
//             experience:5,
//             role:"Full Stack",
//             status:"Active",
//             address:{
//                 houseNo:"No:C-103",
//                 line1:"Smart City Kakkanad",
//                 line2:"Kerala 600032"
//             },
//             employeeId:"KV102"
//         },
//         {
//             id:5,
//             employeeName:"Joe",
//             joiningDate:"01/01/2025",
//             experience:5,
//             role:"Full Stack",
//             status:"Inactive",
//             address:{
//                 houseNo:"No:C-103",
//                 line1:"Smart City Kakkanad",
//                 line2:"Kerala 600032"
//             },
//             employeeId:"KV102"
//         },
//     ]



export const EmployeeList = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();
    const handleCreate = ()=> {
        navigate("/employees/create");
    }

    const viewEmployee = (id:number)=>{
        navigate(`/employees/details/${id}`)
    }

    const editEmployee = (id:number)=>{
        navigate(`/employees/edit/${id}`)
    }

    const deleteEmployee = ()=>{
        setModalIsOpen(true);
    }

    const handleClose = ()=>{
        setModalIsOpen(false)
    }
    
    const employees = useSelector((state:EmployeeState)=> state.employees)
    const status = searchParams.get("status") || "all"
    const statusOptions = ["All", "Active", "Inactive", "Probation"]


    


    const handleStatusFilterChange = (status: string) => {
        const newSearchParams = new URLSearchParams(searchParams)
        if (status === "all" ) {
            newSearchParams.delete("status")

        } else {
            newSearchParams.set("status", status)
        }

        setSearchParams(newSearchParams)
    }

    const filteredEmployees = useMemo(
        () => {
            if(status === "all") return employees
            else return employees.filter((employee:any) => 
                // console.log(employee.status)
               employee.status.toLowerCase() === status
           )
        }, [status]
    )
    

    return (
        <div className="employee-list-container">
            <div className='employee-list-title'>
                <h2>Employee List</h2>
                <div className='employee-list-title-input-group'>
                    <div className='employee-list-title-filter-group'>
                        <label>Filter By</label>
                        <select name='status' onChange={(event)=> handleStatusFilterChange(event.target.value)}>
                            <option value="" disabled selected> Status </option>
                            {
                                statusOptions.map((status) => {
                                    return <option value={status.toLowerCase()}>{status}</option>
                                })
                            }
                        </select>
                    </div>
                    <div onClick={handleCreate} className='create-employee-button'>
                        <div className='plus-icon'>+</div>
                        <div className='create-employee-text'>Create Employee</div>
                    </div>
                </div>
            </div>
            <div className='employee-list-header'>
                <h3>Employee Name</h3>
                <h3>Employee Id</h3>
                <h3>Joining Date</h3>
                <h3>Role</h3>
                <h3>Status</h3>
                <h3>Experience</h3>
                <h3>Action</h3>
            </div>

            {
                filteredEmployees.map((employee:any)=> {
                    return <div className='employee-list-element' onClick={() => viewEmployee(employee.id)}>
                        <p>{employee.employeeName}</p>
                        <p>{employee.employeeId}</p>
                        <p>{employee.joiningDate}</p>
                        <p>{employee.role}</p>
                        <p><div className={`span ${employee.status.toLowerCase()}`}>{employee.status}</div></p>
                        <p>{employee.experience} Years</p>
                        <div className='action-buttons'>
                            <img onClick={(e)=> {
                                e.stopPropagation()
                                deleteEmployee()}} src={deleteIcon}/>
                            <img onClick={(e)=> {
                                e.stopPropagation()
                                editEmployee(employee.id)}} src={editIcon}/>
                        </div>
                    </div>
                })
            }

            <Modal isOpen = {modalIsOpen} onClose={handleClose}>
                <div className='delete-confirmation-box'>
                    
                    <div className='delete-confirmation-box-text '>
                        <h2>Are you sure?</h2>
                        <p>Do you really want to delete employee</p>
                    </div>
                    <div className='delete-confirmation-box-buttons '>
                        <Button className='button submit-button' description='Confirm' type='submit' />
                        <Button className='button reset-button' description='Cancel'  type='submit' onClick={handleClose}/>
                    </div>
                </div>
            </Modal>
        </div>
    )
}