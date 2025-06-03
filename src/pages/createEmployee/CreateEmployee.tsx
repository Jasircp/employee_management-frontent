import { Input } from "../../components/input/Input"
import { SelectInput } from "../../components/selectInput/SelectInput"
import "./CreateEmployee.css"
import { Header } from "../../components/header/Header"
import { Button } from "../../components/button/Button"
import { Address } from "../../components/address/Address"
import { useDispatch } from "react-redux"
import { useAppDispatch } from "../../store/store"
import { addEmployee } from "../../store/employee/employeeReducer"
import { useNavigate } from "react-router-dom"
import { useCreateEmployeeMutation } from "../../api-service/employees/employees.api"
import { useGetDepartmentListQuery } from "../../api-service/departments/departments.api"
import { useState } from "react"
import { EMPLOYEE_ACTION_TYPES } from "../../store/employee/employee.types"

export const CreateEmployee = () => {
    const navigate = useNavigate();
    const { data:departments } = useGetDepartmentListQuery()
    const [addEmp] = useCreateEmployeeMutation()


    const departmentOptions = departments?.map(dept => {return {value:dept.id,name:dept.name}})
    const [values, setValues] = useState({
            employeeId:"",
            name:"",
            email:"",
            password:"",
            age:0,

            dateOfJoining:new Date,
            experience:0,
            departmentId:"",
            role:"",
            status:"",
            address: {
                houseNo:"",
                line1:"",
                line2:"",
                pincode:"",
            }
        })
    const roleOptions = [
        {value:"UI", name:"UI"},
        {value:"UX", name:"UX"},
        {value:"DEVELOPER", name:"DEVELOPER"},
        {value:"HR", name:"HR"}
    ]

    const statusOptions = [
        {value:"ACTIVE", name:"ACTIVE"},
        {value:"INACTIVE", name:"INACTIVE"},
        {value:"PROBATION", name:"PROBATION"}
    ]
    const dispatch = useAppDispatch();
    const onChange = (field:string, value:string) => {
        setValues((prev) => ({
            ...prev,
            [field]:value
        }))
    }
    const handleSubmit = async(e:any) => {
        e.preventDefault()
        await addEmp(values).unwrap();
        //navigate('/employees')
    }
    return (
        <>
        <main>
            <div className="create-employee">
                
                <Header title="Create Employee"></Header>
                <div className="employee-form">
                    <form action="POST">
                        <div className="form-main">
                            <Input label="Employee Name" type="text" placeholder="Employee Name" name="employee_name"
                            onChange={(e)=> onChange("name", e.target.value)}></Input>
                            <Input label="Email" type="email" placeholder="Email" name="employee_email"
                            onChange={(e)=>onChange("email",e.target.value)}></Input>
                            <Input label="Password" type="text" placeholder="Password" name="employee_password"
                            onChange={(e)=>onChange("password",e.target.value)}></Input>
                            <Input label="Age" type="number" placeholder="Age" name="employee_age"
                            onChange={(e)=>onChange("age",e.target.value)}></Input>
                            <Input label="Joining date" type="text" placeholder="Joining Date" name="joining_date"
                            onChange={(e)=> onChange("dateOfJoining", e.target.value)}></Input>
                            <Input label="Experience" type="number" placeholder="Experience in Years" name="experience"
                            onChange={(e)=>onChange("experience",e.target.value)}></Input>

                            <SelectInput label="Department" id="department" name="department" values={departmentOptions}
                            onChange={(e)=>onChange("department",e.target.value)}></SelectInput>
                            <SelectInput label="Role" id="role" name="role" values={roleOptions}
                            onChange={(e)=>onChange("role",e.target.value)}></SelectInput>
                            <SelectInput label="Status" id="status" name="status" values={statusOptions}
                            onChange={(e)=>onChange("status",e.target.value)}></SelectInput>
                            
                        </div>
                        {/* <Address /> */}
                        <div className="address-empID">
                        <div className="form-address">
                            <label>Address</label>
                            <input type="text" placeholder="Flat No. / House No." name="house_number"
                            onChange={(e)=>onChange("houseNo",e.target.value)}/>
                            <input type="text" placeholder="Address Line 1" name="addrees_line_1"
                            onChange={(e)=>onChange("line1",e.target.value)}/>
                            <input type="text" placeholder="Address Line 2" name="addrees_line_2"
                            onChange={(e)=>onChange("line2",e.target.value)}/>
                            <input type="text" placeholder="Pincode" name="adress_pincode"
                            onChange={(e)=>onChange("pincode",e.target.value)}/>
                            
                        </div>
                        <Input label="Employee ID"  type="text" placeholder="Employee ID"  name="employee_id"
                        onChange={(e)=>onChange("employeeId",e.target.value)}/>
                        </div>
                        <div className="button-group">
                            <Button className="submit-button" description="Create" onClick={handleSubmit}/>
                            <Button className="reset-button" description="Cancel"/>
                        </div>

                    </form>
                </div>
            </div>
        </main>
        </>
    )
}