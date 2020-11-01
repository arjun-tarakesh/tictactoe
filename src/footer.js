import react from "react"
import {IconContext} from "react-icons";
import { DiGithubBadge } from "react-icons/di";

const Footer = () => {
    return(
        <a href="https://github.com/arjun-tarakesh" target="_blank" rel="noreferrer">
           <IconContext.Provider value={{ color: 'white', size: '50px' }} >
                <DiGithubBadge className="git" size={50}  />
            </IconContext.Provider>
        </a>
    )
}

export default Footer;