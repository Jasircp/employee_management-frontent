import "./Button.css"

export const Button = (props: {description?: string, className:string, type?:any}) => {
    return <button className={`${props.className}`}>{props.description}</button>
}