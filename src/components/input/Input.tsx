import "./Input.css"

export const Input = (props: {label?:string, type:string, placeholder:string, name:string, value?:any, onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void}) => {
    return (
        <div className="form-group">
           {props.label && <label >{props.label}</label>}
            <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} required name={props.name} value={props.value}/>
        </div>
    )
}