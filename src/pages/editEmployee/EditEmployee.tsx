import { Input } from "../../components/input/Input"
import { SelectInput } from "../../components/selectInput/SelectInput"
import "../createEmployee/CreateEmployee.css"
import"./EditEmployee.css"
import { Header } from "../../components/header/Header"
import { Button } from "../../components/button/Button"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { Address } from "../../components/address/Address"

export const EditEmployee = () => {
    const { id }  = useParams();
    const employees = [
        {
            id:1,
            employeeName:"John Doe",
            email:"123@gmail.com",
            age:30,
            joiningDate:"01/01/2025",
            experience:2,
            department:"HR",
            role:"Full Stack",
            status:"Probation",
            address:{
                houseNo:"No:C-9",
                line1:"T.V.K Industrial Estate",
                line2:"Kerala 600032",
                pincode:"12345"
            },
            employeeId:"KV100"
        },
        {
            id:2,
            employeeName:"Johny Doe",
             email:"123@gmail.com",
            age:30,
            joiningDate:"01/01/2025",
            experience:2,
            department:"Admin",
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
            department:"Development",
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
    const [values, setValues] = useState({
        employeeName:employee.employeeName,
        joiningDate:employee.joiningDate,
        experience:employee.experience,
        department:employee.department,
        role:employee.role,
        status:employee.status,
        houseNo:employee.address.houseNo,
        line1:employee.address.line1,
        line2:employee.address.line2,
    })

    const onChange = (field:string, value:string) => {
        setValues((prev) => ({
            ...prev,
            [field]:value
        }))
    }
    // const [name, setName] = useState(employee.employeeName);
    // const [joiningDate, setJoiningDate] = useState(employee.joiningDate);
    // const [experience, setExperience]  = useState(employee.experience);
    // const [department, setDepartment] = useState(employee.department);
    // const [role, setRole] = useState(employee.role);
    // const [status, setStatus] = useState(employee.status);
    // const [houseNo, setHouseNo] = useState(employee.address.houseNo);
    // const [line1, setLine1] = useState(employee.address.line1);
    // const [line2, setLine2] = useState(employee.address.line2);
    return (
        <>
        <main>
            <div className="create-employee">
                
                <Header title="Edit Employee"></Header>
                <div className="employee-form">
                    <form action="POST">
                        <div className="form-main">
                            <Input label="Employee Name" type="text" placeholder="Employee Name" name="employee_name"
                             value={values.employeeName} onChange={(e)=> onChange("employeeName", e.target.value)}></Input>
                            <Input label="Joining date" type="text" placeholder="Joining Date" name="joining_date"
                             value={values.joiningDate} onChange={(e)=> onChange("joiningDate", e.target.value)}></Input>
                            <Input label="Experience" type="number" placeholder="Experience in Years" name="experience"
                             value={values.experience} onChange={(e)=> onChange("experience", e.target.value)}></Input>
                            <SelectInput label="Department" id="department" name="department" selected={values.department}
                             values={["Choose Department","HR", "Admin", "Development"]}
                             onChange={(e)=>{onChange("department", e.target.value)}}></SelectInput>
                            <SelectInput label="Role" id="role" name="role" selected={values.role}
                             values={["Choose Role","Full Stack", "Backend", "UI", "UX"]}
                             onChange={(e)=>onChange("role", e.target.value)}></SelectInput>
                            <SelectInput label="Status" id="status" name="status" selected={values.status}
                             values={["Active","Inactive", "Probation"]}
                             onChange={(e)=>onChange("status", e.target.value)}></SelectInput>
                            
                        </div>
                        <div className="address-empID">
                        <Address />
                        <div className="employee-details-id">
                            <label>Employee ID</label>
                            <input type="text" disabled value={employee.employeeId}></input>
                        </div>
                        </div>
                        <div className="button-group">
                            <Button className="submit-button" description="Update"/>
                            <Button className="reset-button" description="Cancel"/>
                        </div>

                    </form>
                </div>
            </div>
        </main>
        </>
    )
}