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

import { useState } from "react"
import { EMPLOYEE_ACTION_TYPES } from "../../store/employee/employee.types"

export const CreateEmployee = () => {
    const navigate = useNavigate();
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
    const dispatch = useAppDispatch();
    const onChange = (field:string, value:string) => {
        setValues((prev) => ({
            ...prev,
            [field]:value
        }))
    }
    const handleSubmit = (e:any) => {
        e.preventDefault()
        // dispatch({
        //     type:EMPLOYEE_ACTION_TYPES.ADD,
        //     payload:values
        // })
        const action = addEmployee(values);
        dispatch(action);
        navigate("/employees")
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

                            <SelectInput label="Department" id="department" name="department" values={["Choose Department","Department 1", "Department 2", "Department 3"]}
                            onChange={(e)=>onChange("department",e.target.value)}></SelectInput>
                            <SelectInput label="Role" id="role" name="role" values={["Choose Role","Role 1", "Role2", "Role 3"]}
                            onChange={(e)=>onChange("role",e.target.value)}></SelectInput>
                            <SelectInput label="Status" id="status" name="status" values={["Status","Active","Inactive", "Probation"]}
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