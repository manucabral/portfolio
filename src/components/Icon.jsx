export default function Icon({ title, size, redirect, path }) {
    return (
        <a href={redirect} className="list-icon">
            <div className="list-icon-right">
                <img className="list-icon__img" src={path} alt={title} />
            </div>
            <div className="list-icon-left">
                <p className="list-icon__title">{title}</p>
            </div>
        </a>
    )
}
