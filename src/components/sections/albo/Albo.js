import "./Albo.css"
import "../../footer/Footer"
import { SocialIcon } from 'react-social-icons';

import trio from '../../../asset/img/loghi/trio1.jpeg';
import guardiani from '../../../asset/img/loghi/guardiani1.jpeg';
import nott from '../../../asset/img/loghi/forest1.png';
import biccari from '../../../asset/img/loghi/biccari1.png';
import mantrona from '../../../asset/img/loghi/mantrona.png';
import logo from '../../../asset/img/loghi/log.png';

const Albo = () => {
    return (
        <>
            <div className="albo">
                <div className="table">
                    <div className="title-opener">
                        <h2>FANTACALCIO 2022-2023</h2>
                    </div>
                    <ul>
                        <li className="table-header">
                            <span>
                                <h2>Club</h2>
                                <label>Allenatori</label>
                            </span>
                            <span>
                                <p>MP</p>
                                <p>TotP</p>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="table">
                    {/* CARD */}
                    <ul>
                        <li>
                            <span>
                                <div className="club-logo">
                                    <img src={trio} alt="logo"/>
                                </div>
                                <div>
                                    <h2>F.C. Triumvirato</h2>
                                    <label>Crasso, Pompeo e Cesare</label>
                                </div>
                            </span>
                            <span>
                                <p>0.0</p>
                                <p>0</p>
                            </span>
                        </li>

                        <li>
                            <span>
                                <div className="club-logo">
                                    <img src={guardiani} alt="logo"/>
                                </div>
                                <div>
                                    <h2>I Guardiani del Condor</h2>
                                    <label>Guardiani del Condor</label>
                                </div>
                            </span>
                            <span>
                                <p>0.0</p>
                                <p>0</p>
                            </span>
                        </li>

                        <li>
                            <span>
                                <div className="club-logo">
                                    <img src={nott} alt="logo"/>
                                </div>
                                <div>
                                    <h2>Mignottingham Forest</h2>
                                    <label>Marco P.</label>
                                </div>
                            </span>
                            <span>
                                <p>0.0</p>
                                <p>0</p>
                            </span>
                        </li>

                        <li>
                            <span>
                                <div className="club-logo">
                                    <img src={biccari} alt="logo"/>
                                </div>
                                <div>
                                    <h2>F.C. Biccari</h2>
                                    <label>Riccardo M.</label>
                                </div>
                            </span>
                            <span>
                                <p>0.0</p>
                                <p>0</p>
                            </span>
                        </li>

                        <li>
                            <span>
                                <div className="club-logo">
                                    <img src={logo} alt="logo"/>
                                </div>
                                <div>
                                    <h2>Ignoranz Pusherz</h2>
                                    <label>Tommaso B.</label>
                                </div>
                            </span>
                            <span>
                                <p>0.0</p>
                                <p>0</p>
                            </span>
                        </li>

                        <li>
                            <span>
                                <div className="club-logo">
                                    <img src={logo} alt="logo"/>
                                </div>
                                <div>
                                    <h2>Binzago River</h2>
                                    <label>Massimo B. & River</label>
                                </div>
                            </span>
                            <span>
                                <p>0.0</p>
                                <p>0</p>
                            </span>
                        </li>

                        <li>
                            <span>
                                <div className="club-logo">
                                    <img src={mantrona} alt="logo"/>
                                </div>
                                <div>
                                    <h2>U.S. La Mantrona</h2>
                                    <label>Simone R.</label>
                                </div>
                            </span>
                            <span>
                                <p>0.0</p>
                                <p>0</p>
                            </span>
                        </li>

                        <li>
                            <span>
                                <div className="club-logo">
                                    <img src={logo} alt="logo"/>
                                </div>
                                <div>
                                    <h2>Bose don't lie</h2>
                                    <label>Bosa</label>
                                </div>
                            </span>
                            <span>
                                <p>0.0</p>
                                <p>0</p>
                            </span>
                        </li>
                    </ul>
                </div> 
                {/* FOOTER */}
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
            </div>
        </>
    )
}
export default Albo;