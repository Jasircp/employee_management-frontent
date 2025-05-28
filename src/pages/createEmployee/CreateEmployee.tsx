import { Input } from "../../components/input/Input"
import { SelectInput } from "../../components/selectInput/SelectInput"
import "./CreateEmployee.css"
import { Header } from "../../components/header/Header"
import { Button } from "../../components/button/Button"

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
                            <Input label="Joining date" type="text" placeholder="Joining Date" name="joining_date"></Input>
                            <Input label="Experience" type="number" placeholder="Experience in Years" name="experience"></Input>

                            <SelectInput label="Department" id="department" name="department" values={["Choose Department","Department 1", "Department 2", "Department 3"]}></SelectInput>
                            <SelectInput label="Role" id="role" name="role" values={["Choose Role","Role 1", "Role2", "Role 3"]}></SelectInput>
                            <SelectInput label="Status" id="status" name="status" values={["Active","Inactive", "Probation"]}></SelectInput>
                            
                        </div>
                        <div className="form-address">
                            <label>Address</label>
                            <input type="text" placeholder="Flat No. / House No." name="house_number"/>
                            <input type="text" placeholder="Address Line 1" name="addrees_line_1"/>
                            <input type="text" placeholder="Address Line 2" name="addrees_line_2"/>
                            
                        </div>
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