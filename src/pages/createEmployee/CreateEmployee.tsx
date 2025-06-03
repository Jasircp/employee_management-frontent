import { Input } from "../../components/input/Input"
import { SelectInput } from "../../components/selectInput/SelectInput"
import "./CreateEmployee.css"
import { Header } from "../../components/header/Header"
import { Button } from "../../components/button/Button"
import { useNavigate } from "react-router-dom"
import { useCreateEmployeeMutation } from "../../api-service/employees/employees.api"
import { useGetDepartmentListQuery } from "../../api-service/departments/departments.api"
import { useState } from "react"

export const CreateEmployee = () => {
  const navigate = useNavigate();
  const { data: departments } = useGetDepartmentListQuery();
  const [addEmp] = useCreateEmployeeMutation();

  const departmentOptions = departments?.map(dept => ({ value: dept.id, name: dept.name }));

  const [values, setValues] = useState({
    employeeId: "",
    name: "",
    email: "",
    password: "",
    age: 0,
    dateOfJoining: new Date().toISOString().split('T')[0], // ✅ formatted string
    experience: 0,
    departmentId: "",
    role: "",
    status: "",
    address: {
      houseNo: "",
      line1: "",
      line2: "",
      pincode: "",
    }
  });

  const roleOptions = [
    { value: "UI", name: "UI" },
    { value: "UX", name: "UX" },
    { value: "DEVELOPER", name: "DEVELOPER" },
    { value: "HR", name: "HR" }
  ];

  const statusOptions = [
    { value: "ACTIVE", name: "ACTIVE" },
    { value: "INACTIVE", name: "INACTIVE" },
    { value: "PROBATION", name: "PROBATION" }
  ];

  // ✅ General field change handler
  const onChange = (field: string, value: string) => {
    if (["age", "experience"].includes(field)) {
      setValues(prev => ({ ...prev, [field]: Number(value) }));
    } else if (field === "departmentId") {
      setValues(prev => ({ ...prev, departmentId: Number(value) }));
    } else {
      setValues(prev => ({ ...prev, [field]: value }));
    }
  };

  // ✅ Address field handler
  const onAddressChange = (field: string, value: string) => {
    setValues(prev => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value
      }
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const selectedDept = departments?.find(dept => dept.id === Number(values.departmentId));
    if (!selectedDept) {
      alert("Please select a department");
      return;
    }

    const payload = {
      ...values,
      departmentId: Number(values.departmentId),
      department: selectedDept
    };

    try {
      await addEmp(payload).unwrap();
      navigate('/employees');
    } catch (error) {
      console.error("Error creating employee:", error);
      alert("Failed to create employee. Check the form and try again.");
    }
  };

  return (
    <main>
      <div className="create-employee">
        <Header title="Create Employee" />
        <div className="employee-form">
          <form>
            <div className="form-main">
              <Input label="Employee Name" type="text" placeholder="Employee Name" name="employee_name"
                onChange={(e) => onChange("name", e.target.value)} />
              <Input label="Email" type="email" placeholder="Email" name="employee_email"
                onChange={(e) => onChange("email", e.target.value)} />
              <Input label="Password" type="text" placeholder="Password" name="employee_password"
                onChange={(e) => onChange("password", e.target.value)} />
              <Input label="Age" type="number" placeholder="Age" name="employee_age"
                onChange={(e) => onChange("age", e.target.value)} />
              <Input label="Joining date" type="date" placeholder ="Joining Date" name="joining_date"
                onChange={(e) => onChange("dateOfJoining", e.target.value)} />
              <Input label="Experience" type="number" placeholder="Experience in Years" name="experience"
                onChange={(e) => onChange("experience", e.target.value)} />

              <SelectInput label="Department" id="department" name="department" values={departmentOptions}
                onChange={(e) => onChange("departmentId", e.target.value)} />
              <SelectInput label="Role" id="role" name="role" values={roleOptions}
                onChange={(e) => onChange("role", e.target.value)} />
              <SelectInput label="Status" id="status" name="status" values={statusOptions}
                onChange={(e) => onChange("status", e.target.value)} />
            </div>

            <div className="address-empID">
              <div className="form-address">
                <label>Address</label>
                <input type="text" placeholder="Flat No. / House No." name="house_number"
                  onChange={(e) => onAddressChange("houseNo", e.target.value)} />
                <input type="text" placeholder="Address Line 1" name="addrees_line_1"
                  onChange={(e) => onAddressChange("line1", e.target.value)} />
                <input type="text" placeholder="Address Line 2" name="addrees_line_2"
                  onChange={(e) => onAddressChange("line2", e.target.value)} />
                <input type="text" placeholder="Pincode" name="adress_pincode"
                  onChange={(e) => onAddressChange("pincode", e.target.value)} />
              </div>

              <Input label="Employee ID" type="text" placeholder="Employee ID" name="employee_id"
                onChange={(e) => onChange("employeeId", e.target.value)} />
            </div>

            <div className="button-group">
              <Button className="submit-button" description="Create" onClick={handleSubmit} />
              <Button className="reset-button" description="Cancel" />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
