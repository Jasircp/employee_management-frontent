import "./SelectInput.css"

export const SelectInput = (props: {label:string, id:string, name:string, values: string[]}) => {
    return(
        <div className="form-group">
            <label>{props.label}</label>
            <select name={props.name} id={props.id}> 
                {props.values.map((value) => (
                    <option value={value} key={value}>{value}</option>
                ))}
            </select>
        </div>
    )
}