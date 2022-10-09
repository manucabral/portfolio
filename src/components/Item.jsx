import Icon from './Icon'
import moment from 'moment'

export default function Item({
    title,
    creationDate,
    lastDate,
    stars,
    topics,
    langs,
    description,
    source,
    homepage,
}) {
    return (
        <li className="list-item">
            <div className="item-header">
                <div className="item-header-left">
                    <h3 className="item__title">{title}</h3>
                    {langs && (
                        <div className="item-header-langs">
                            {langs.map((lang, index) => (
                                <Icon
                                    key={index}
                                    title={lang.name}
                                    path={lang.path}
                                />
                            ))}
                        </div>
                    )}
                    {topics && topics.length > 0 && (
                        <div className="item-header-topics">
                            {topics.map((topic) => (
                                <span className="item__topic" key={topic}>
                                    {topic}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                <div className="item-header-right">
                    <div className="iteam-header-dates">
                        <h5 className="item__date">
                            Created at{' '}
                            {moment(creationDate).format('MMMM Do YYYY')}
                        </h5>
                        <h5 className="item__date">
                            Last update {moment(lastDate).fromNow()}
                        </h5>
                    </div>
                    <div className="iteam-header-other">
                        <span className="item__stars">{stars} ⭐</span>
                    </div>
                </div>
            </div>
            <div className="item-content">
                <p className="item__description">{description}</p>
                <div className="item-content-links">
                    <a
                        className="item__link"
                        href={source}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Source code
                    </a>
                    {homepage && (
                        <a
                            className="item__link"
                            href={homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Homepage
                        </a>
                    )}
                </div>
            </div>
        </li>
    )
}
