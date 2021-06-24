import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


function Links() {
    const facebook = <FontAwesomeIcon icon={faFacebookF} />
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    const github = <FontAwesomeIcon icon={faGithub} />
    const linkedIn = <FontAwesomeIcon icon={faLinkedinIn} />

    return (
        
        <ul className="dropDown">
            <a href="https://twitter.com/EricHow311"><li>{twitter}<span>TWITTER</span> </li></a>
            <a href="https://github.com/RixTrixx"><li>{github}<span>GITHUB</span> </li></a>
            <a href="https://www.facebook.com/eric.howell.98"><li>{facebook}<span>FACEBOOK</span></li></a>
            <a href="https://www.linkedin.com/in/eric-howell-513656b9/"><li>{linkedIn}<span>LINKEDIN</span></li></a>
        </ul>
    )
}

export default Links;