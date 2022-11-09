const Frame = ({ children, ...props }) => {
    return (
        <div className="frame-container">
            <div className="frame">
                { children }
            </div> 
            <div className="frame-description">
                <h3>{props.title}</h3>
                <p className="subtitle">{props.date} | based on {props.inspiration}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}

export default Frame