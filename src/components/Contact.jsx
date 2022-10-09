import List from './List'

import githubIcon from '../assets/icons/github.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'
import emailIcon from '../assets/icons/email.svg'

export default function Contact() {
    return (
        <div className="contact-section">
            <h3 className="contact__title">You can contact me through ..</h3>
            <div className="contact-list">
                <li className="contact-list-item">
                    <a
                        href="https:/www.github.com/manucabral/"
                        className="contact-item__link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="contact-item__img"
                            src={githubIcon}
                            alt="Github"
                        />
                        <p className="list-item__text">Github</p>
                    </a>
                </li>
                <li className="contact-list-item">
                    <a
                        href="https://www.linkedin.com/in/manuel-cabral/"
                        className="contact-item__link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="contact-item__img"
                            src={linkedinIcon}
                            alt="Linkedin"
                        />
                        <p className="contact-item__text">Linkedin</p>
                    </a>
                </li>
                <li className="contact-list-item">
                    <a
                        href="mailto:mandrescabral@gmail.com"
                        className="contact-item__link"
                    >
                        <img
                            className="contact-item__img"
                            src={emailIcon}
                            alt="Email"
                        />
                        <p className="contact-item__text">Email</p>
                    </a>
                </li>
            </div>
        </div>
    )
}
