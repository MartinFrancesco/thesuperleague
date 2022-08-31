import "./Albo.css"
import "../../footer/Footer"
import { SocialIcon } from 'react-social-icons';

import trio from '../../../asset/img/loghi/trio1.jpeg';
import guardiani from '../../../asset/img/loghi/guardiani1.jpeg';
import sl104 from '../../../asset/img/loghi/sl104.jpg';
import biccari from '../../../asset/img/loghi/biccari1.png';
import mantrona from '../../../asset/img/loghi/mantrona.png';
import pusherz from '../../../asset/img/loghi/pusherz.jpg'
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
                                    <img src={guardiani} alt="logo"/>
                                </div>
                                <div>
                                    <h2>I Guardiani del Condor</h2>
                                    <label style={{fontSize: "0.9rem"}}>Guardiani del Condor</label>
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
                                    <img src={trio} alt="logo"/>
                                </div>
                                <div>
                                    <h2>F.C. Triumvirato</h2>
                                    <label style={{fontSize: "0.9rem"}}>Crasso, Pompeo e Cesare</label>
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
                                    <img src={sl104} alt="logo"/>
                                </div>
                                <div>
                                    <h2>Shalke 104</h2>
                                    <label style={{fontSize: "0.9rem"}}>Palmi e Vala</label>
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
                                    <label style={{fontSize: "0.9rem"}}>Riko & Loco</label>
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
                                    <img src={pusherz} alt="logo"/>
                                </div>
                                <div>
                                    <h2>Ignoranz Pusherz</h2>
                                    <label style={{fontSize: "0.9rem"}}>Tommy Borsa</label>
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
                                    <h2>Binzago F.C.</h2>
                                    <label style={{fontSize: "0.9rem"}}>Massi Barby</label>
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
                                    <h2>U.S. Mantrona</h2>
                                    <label style={{fontSize: "0.9rem"}}>Romix</label>
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
                                    <label style={{fontSize: "0.9rem"}}>Bose</label>
                                </div>
                            </span>
                            <span>
                                <p>0.0</p>
                                <p>0</p>
                            </span>
                        </li>
                    </ul>

                    <div className="legenda">
                        <p><strong>* MP:</strong> fanta-media punti stagionale</p>
                        <p><strong>* TotP:</strong> totale punti stagionali</p>
                        
                        <div className="winners">
                            <h3 className="title-opener">Vincitori Stagione 2022-2023</h3>
                            <h4>Superleague Mantra Edition: --</h4>
                            <h4>Superleague FigA Cup: --</h4>
                        </div>
                    </div>
                </div> 
                {/* FOOTER */}
                <div className="footer">
                    <div className="border-gradient border-gradient-purple">
                    <SocialIcon url="https://twitter.com/eslcomms" fgColor="#A2A2A2" bgColor="transparent"/>
                        <h4>
                            © 2021 SUPER LEAGUE<br/>
                            MANTRA EDITION, S.L. | <br/>
                            Privacy Policy
                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Albo;