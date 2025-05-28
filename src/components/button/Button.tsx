import "./Button.css"

export const Button = (props: {description?: string, className:string, type?:any, onClick?: (Event:any)=>void}) => {
    return <button className={`${props.className}`} onClick={props.onClick}>{props.description}</button>
}