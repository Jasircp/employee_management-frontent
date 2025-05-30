import "./EmployeeData.css"

export const EmployeeData = (props:{label:string, value:any}) => {
    return(
        <div className="employee-data">
            <label>{props.label}</label>
            <p>{props.value}</p>
        </div>
    )
}