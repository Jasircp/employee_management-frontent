import "./Button.css"

export const Button = (props: {description?: string, className:string, type?:any,disabled?:boolean, onClick?: (Event:any)=>void}) => {
    return <button className={`${props.className}`} disabled={props.disabled} onClick={props.onClick}>{props.description}</button>
}