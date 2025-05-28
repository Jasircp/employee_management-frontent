import "./Header.css"

export const Header = (props: {title:string}) => {
    return (
        <div className="title">
            <h2>{props.title}</h2>
        </div>
    )
}