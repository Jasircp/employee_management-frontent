import "./EmployeeList.css";
import deleteIcon from '../../assets/images/delete.png'
import editIcon from '../../assets/images/edit.png'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Button } from "../../components/button/Button";
import { Modal } from "../../components/modal/Modal";
import { useMemo, useState } from 'react'
import { useSelector } from "react-redux";
import { useAppSelector } from "../../store/store";
import type { Employee, EmployeeState } from "../../store/employee/employee.types";
import { useGetEmployeeListQuery,useDeleteEmployeeMutation } from "../../api-service/employees/employees.api";


export const EmployeeList = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const {data:employees} = useGetEmployeeListQuery({});
    const [deleteId] = useDeleteEmployeeMutation();
    const [idToDelete, setIdToDelete] = useState(0);

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

    const deleteEmployee = (id:number)=>{
        setModalIsOpen(true);
        setIdToDelete(id);
    }

    const confirmDelete = () => {
        deleteId({id:idToDelete});
        setModalIsOpen(false);
    }

    const handleClose = ()=>{
        setModalIsOpen(false)
    }
    
    // const employees:Employee[] = useAppSelector((state:any)=> state.employee.employees)

    const status = searchParams.get("status") || "all"
    const statusOptions = ["All", "Active", "Inactive", "Probation"]

    const handleStatusFilterChange = (status: string) => {
        const newSearchParams = new URLSearchParams(searchParams)
        if (status === "All" ) {
            newSearchParams.delete("status")

        } else {
            newSearchParams.set("status", status)
        }

        setSearchParams(newSearchParams)
    }

    // const filteredEmployees = useMemo(
    //     () => {
    //         if(status === "all") return employees
    //         else return employees?.filter((employee:any) => 
    //             // console.log(employee.status)
    //            employee.status.toLowerCase() === status
    //        )
    //     }, [status,employees]
    // )
    const filteredEmployees = employees?.filter((employee:any) => (
        employee.status.toLowerCase() === status || status === 'all')
    )

    return (
        <div className="employee-list-container">
            <div className='employee-list-title'>
                <h2>Employee List</h2>
                <div className='employee-list-title-input-group'>
                    <div className='employee-list-title-filter-group'>
                        <label>Filter By</label>
                        <select name='status' onChange={(event)=> handleStatusFilterChange(event.target.value)}>
                            {
                                statusOptions.map((status) => {
                                    return <option key={status} value={status.toLowerCase()}>{status}</option>
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
                filteredEmployees?.map((employee:any)=> {
                    return <div className='employee-list-element' key={employee.id} onClick={() => viewEmployee(employee.id)}>
                        <p>{employee.name}</p>
                        <p>{employee.employeeId}</p>
                        <p>{employee.dateOfJoining}</p>
                        <p>{employee.role}</p>
                        <div className={`span ${employee.status.toLowerCase()}`}>{employee.status}</div>
                        <p>{employee.experience} Years</p>
                        <div className='action-buttons'>
                            <img onClick={(e)=> {
                                e.stopPropagation()
                                deleteEmployee(employee.id)}} src={deleteIcon}/>
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
                        <p>Do you really want to delete this employee</p>
                    </div>
                    <div className='delete-confirmation-box-buttons '>
                        <Button className='button submit-button' description='Confirm' type='submit' onClick={confirmDelete}/>
                        <Button className='button reset-button' description='Cancel'  type='submit' onClick={handleClose}/>
                    </div>
                </div>
            </Modal>
        </div>
    )
}