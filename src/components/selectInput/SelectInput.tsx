import "./SelectInput.css"

export const SelectInput = (props: {label:string, id:string, name:string, selected?:string | number, values: {value:number | string, name:string}[], onChange?: (event:React.ChangeEvent<HTMLSelectElement>) => void}) => {
    return(
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <select name={props.name} id={props.id} value={props.selected} onChange={props.onChange}> 
                
                {props.values?.map((value) => (
                    <option value={value.value} key={value.value}>{value.name}</option>
                ))}
            </select>
        </div>
    )
}