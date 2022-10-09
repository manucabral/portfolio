export default function Separator({ id, title, subtitle, Content }) {
    return (
        <section className="separator-section">
            <div id={id} className="reference" />
            <div className="separator-header">
                {title && <h2 className="separator__title">{title}</h2>}
                {subtitle && (
                    <h3 className="separator__subtitle">{subtitle}</h3>
                )}
            </div>
            <div className="separator-content">
                {Content ? <Content /> : null}
            </div>
        </section>
    )
}
