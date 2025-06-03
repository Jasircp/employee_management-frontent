export interface EmployeeById {
    id:number
}

export interface Address {
  houseNo: string;
  line1: string;
  line2: string;
  pincode: string;
}

export interface Department {
  id: number;
  name: string
}

export interface CreateEmployee {
    name: string;
    email: string;
    password: string;
    age: number;
    dateOfJoining: string;
    experience: number;
    departmentId: number;
    role: string;
    status: string;
    employeeId: string;
    department: Department
    address: Address
}