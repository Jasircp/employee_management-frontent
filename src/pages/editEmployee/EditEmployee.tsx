import { Input } from "../../components/input/Input"
import { SelectInput } from "../../components/selectInput/SelectInput"
import "../createEmployee/CreateEmployee.css"
import"./EditEmployee.css"
import { Header } from "../../components/header/Header"
import { Button } from "../../components/button/Button"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import { Address } from "../../components/address/Address"
import { useGetEmployeeByIdQuery,useUpdateEmployeeMutation } from "../../api-service/employees/employees.api"
import { useGetDepartmentListQuery } from "../../api-service/departments/departments.api"
import { useNavigate } from "react-router-dom"

export const EditEmployee = () => {
    const { id }  = useParams();
    const navigate = useNavigate();
    const { data:employee } = useGetEmployeeByIdQuery({id:Number(id)})
    console.log(employee);
    const { data:departments } = useGetDepartmentListQuery()
    const departmentOptions = departments?.map(dept => {return {value:dept.id,name:dept.name}})
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

    
    const handleCancel = ()=>{
        navigate('/employees')
    }
    
    const [values, setValues] = useState({
        id: 0,
        name: '',
        email:'',
        password:'',
        age:0,
        employeeId: '',
        dateOfJoining: new Date(),
        experience: 0,
        departmentId:0,
        role: '',
        status: '',
        address: {
            houseNo: '',
            line1: '',
            line2: '',
            pincode: ''
        },
        department: {
            id:0,
            name:''
        }
    });

   
    useEffect(() => {
        if(employee){
            setValues({
            id:employee.id,
            name:employee.name,
            email:employee.email,
            password:employee.password,
            age:employee.age,
            employeeId: employee.employeeId,
            dateOfJoining:employee.dateOfJoining,
            experience: employee.experience,
            departmentId:employee.department?.id,
            role:employee.role,
            status:employee.status,
            department :{
                id:employee.department.id,
                name:employee.department.name
            },
                address:{
                    houseNo:employee.address?.houseNo,
                    line1:employee.address?.line1,
                    line2:employee.address?.line2,
                    pincode:employee.address.pincode
                }
            })
        }
    },[employee])


    const onChange = (field:string, value:string) => {
        if(field == 'departmentId' || field == 'age' || field == 'experience'){
           setValues((prev) => ({
            ...prev,
            [field]:parseInt(value)
        }))
        }
        else{
            setValues((prev) => ({
            ...prev,
            [field]:value
        }))
        }
        
    }

    const handleAddressChange = (name: string, value:string) => {
        setValues((prev) =>
        prev
            ? {
                ...prev,
                address: {
                ...prev.address,
                [name]: value
                }
            }
            : prev
        );
    };

    const [edit] = useUpdateEmployeeMutation()
    const handeleUpdate = async() => {
        console.log("hello",values);
        await edit(values);
        navigate('/employees');

    }

     if(!employee)
        return <div className="employee-details-container">No Such Employee</div>
    return (
        <>
        <main>
            <div className="create-employee">
                
                <Header title="Edit Employee"></Header>
                <div className="employee-form">
                    <div >
                        <div className="form-main">
                            
                            <Input label="Employee Name" type="text" placeholder="Employee Name" name="employee_name"
                             value={values.name} onChange={(e)=> onChange("name", e.target.value)}></Input>
                             <Input label="Email" type="text" placeholder="Email" name="email"
                            value={values.email} onChange={(e)=> onChange("email",e.target.value)}></Input>
                            <Input label="Joining date" type="text" placeholder="Joining Date" name="joining_date"
                             value={values.dateOfJoining} onChange={(e)=> onChange("dateOfJoining", e.target.value)}></Input>
                            <Input label="Experience" type="number" placeholder="Experience in Years" name="experience"
                             value={values.experience} onChange={(e)=> onChange("experience", e.target.value)}></Input>
                             <Input label="Age" type="number" placeholder="age" name="age"
                             value={values.age} onChange={(e)=> onChange("age",e.target.value)}></Input>
                            <SelectInput label="Department" id="department" name="department" selected={values.department}
                             values={departmentOptions}
                             onChange={(e)=>{onChange("departmentId", e.target.value)}}></SelectInput>
                            <SelectInput label="Role" id="role" name="role" selected={values.role}
                             values={roleOptions}
                             onChange={(e)=>onChange("role", e.target.value)}></SelectInput>
                            <SelectInput label="Status" id="status" name="status" selected={values.status}
                             values={statusOptions}
                             onChange={(e)=>onChange("status", e.target.value)}></SelectInput>
                            
                        </div>
                        <div className="address-empID">
                        {/* <Address /> */}
                        <div className="form-address">
                            <label>Address</label>
                            <input type="text" placeholder="Flat No. / House No." name="house_number" 
                            value={values.address.houseNo} onChange={(e) => handleAddressChange("houseNo",e.target.value)}/>
                            <input type="text" placeholder="Address Line 1" name="addrees_line_1" 
                            value={values.address.line1} onChange={(e) => handleAddressChange("line1",e.target.value)}/>
                            <input type="text" placeholder="Address Line 2" name="addrees_line_2" 
                            value={values.address.line2} onChange={(e) => handleAddressChange("line2",e.target.value)}/>
                            <input type="text" placeholder="Pincode" name="adress_pincode" 
                            value={values.address.pincode} onChange={(e) => handleAddressChange("pincode",e.target.value)}/>
                            
                        </div>
                        <div className="employee-details-id">
                            <label>Employee ID</label>
                            <input type="text" disabled value={employee.employeeId}></input>
                        </div>
                        </div>
                        <div className="button-group">
                            <Button className="submit-button" description="Update"  onClick={handeleUpdate}/>
                            <Button className="reset-button" description="Cancel" type="reset" onClick={handleCancel}/>
                        </div>

                    </div>
                </div>
            </div>
        </main>
        </>
    )
}