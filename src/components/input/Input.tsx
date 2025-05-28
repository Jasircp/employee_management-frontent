import "./Input.css"

export const Input = (props: {label?:string, type:string, placeholder:string, name:string}) => {
    return (
        <div className="form-group">
           {props.label && <label >{props.label}</label>}
            <input type={props.type} placeholder={props.placeholder} required name={props.name}/>
        </div>
    )
}