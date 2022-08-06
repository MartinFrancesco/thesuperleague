import "./Footer.css"
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="border-gradient border-gradient-purple">
            <SocialIcon url="https://twitter.com/eslcomms" fgColor="#A2A2A2" bgColor="transparent"/>
                <h4>
                    © 2021 EUROPEAN SUPER <br/>
                    LEAGUE COMPANY, S.L. | <br/>
                    Privacy Policy
                </h4>
            </div>
        </div>
    )
}
export default Footer;