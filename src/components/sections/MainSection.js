import "./MainSection.css"
import Footer from '../footer/Footer';
import  { BreakpointProvider, Breakpoint } from 'react-socks';

const MainSection = () => {
    return (
        <>
            <BreakpointProvider>
                <Breakpoint small down>
                    <div className="main-section">
                        <div className="opener">
                                <h2>I MIGLIORI CLUB</h2>
                                <h2>E FANTALLENATORI</h2>
                                <div className="title-opener">
                                    <h2>OGNI SETTIMANA.</h2>
                                </div>
                        </div>
                        <ul>
                            <li>
                                <div className="competition"></div>
                                <h2><span>FORMAT</span> DELLA COMPETIZIONE</h2>
                                <p>La Super League è una nuova competizione fantacalcistica tra 8 club fondatori. Lo stile della lega è quello definito Mantra. La Super League, riunendo i migliori club e i migliori fantallenatori al mondo, riuscirà ad offrire un’emozione e un coinvolgimento mai visti prima nel fantacalcio.</p>
                            </li>
                            <li>
                            <div className="club"></div>
                                <h2>I MIGLIORI <span>8 CLUB</span></h2>
                                <p>Durante il campionato, le 8 squadre si qualificheranno per un torneo prima a gironi e poi ad eliminazione diretta, giocando in casa ed in trasferta fino alla finale a gara secca della Super League FigA CUP, in un palpitante finale della stagione di quattro settimane.</p>
                            </li>
                            <li>
                            <div className="match"></div>
                                <h2><span>PARTITE</span> E TORNEO</h2>
                                <p>Le partite si giocheranno seguendo la stagione di calcio attuale della Lega Serie A Frecciarossa.</p>
                            </li>
                            <li>
                            <div className="fairplay"></div>
                                <h2>SOLIDARIETA E <span>SOSTENIBILITA</span></h2>
                                <p>I contributi di solidarietà cresceranno in linea con i ricavi della lega e si prevede che superino i 10 miliardi di euro durante il corso del periodo iniziale di impegno dei club. Questi contributi di solidarietà seguiranno un nuovo modello di regolare rendicontazione pubblica in piena trasparenza.
                                    In sostanza: più budget all'iscrizione delle squadre, più soldi ai vincitori.
                                </p>
                            </li>
                        </ul>
                    </div>
                    
                    <Footer />
                </Breakpoint>
                <Breakpoint medium up>
                    <div className="main-section-desktop">
                        <span>
                            <h5>STAGIONE 2022-2023</h5>
                            <h5>LA NUOVA ERA DEL FANTACALCIO</h5>
                        </span>
                        <h1 className="title-opener">ACCEDI DA MOBILE</h1>
                    </div>
                </Breakpoint>
            </BreakpointProvider>
        </>
    )
}
export default MainSection;