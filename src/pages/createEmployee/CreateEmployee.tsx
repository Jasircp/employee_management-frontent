import { Input } from "../../components/input/Input"
import { SelectInput } from "../../components/selectInput/SelectInput"
import "./CreateEmployee.css"
import { Header } from "../../components/header/Header"
import { Button } from "../../components/button/Button"
import { Address } from "../../components/address/Address"

export const CreateEmployee = () => {
    return (
        <>
        <main>
            <div className="create-employee">
                
                <Header title="Create Employee"></Header>
                <div className="employee-form">
                    <form action="POST">
                        <div className="form-main">
                            <Input label="Employee Name" type="text" placeholder="Employee Name" name="employee_name"></Input>
                            <Input label="Email" type="email" placeholder="Email" name="employee_email"></Input>
                            <Input label="Age" type="number" placeholder="Age" name="employee_age"></Input>
                            <Input label="Joining date" type="text" placeholder="Joining Date" name="joining_date"></Input>
                            <Input label="Experience" type="number" placeholder="Experience in Years" name="experience"></Input>

                            <SelectInput label="Department" id="department" name="department" values={["Choose Department","Department 1", "Department 2", "Department 3"]}></SelectInput>
                            <SelectInput label="Role" id="role" name="role" values={["Choose Role","Role 1", "Role2", "Role 3"]}></SelectInput>
                            <SelectInput label="Status" id="status" name="status" values={["Active","Inactive", "Probation"]}></SelectInput>
                            
                        </div>
                        <Address />
                        <div className="button-group">
                            <Button className="submit-button" description="Create"/>
                            <Button className="reset-button" description="Cancel"/>
                        </div>

                    </form>
                </div>
            </div>
        </main>
        </>
    )
}