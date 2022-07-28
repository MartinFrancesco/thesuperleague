import "./MainSection.css"
import Footer from '../footer/Footer';

const MainSection = () => {
    return (
        <>
            <div className="opener">
                <div>
                    <h2>I CLUB MIGLIORI.</h2>
                    <h2>I GIOCATORI MIGLIORI.</h2>
                    <h2>OGNI GIORNATA.</h2>
                </div>
            </div>
            <div className="main-section">
                <ul>
                    <li>
                        <div className="competition"></div>
                        <h3><span>FORMAT</span> DELLA COMPETIZIONE.</h3>
                        <p>La Super League è una nuova competizione fantacalcistica tra 8 club fondatori. Lo stile della lega è quello definito Mantra. La Super League, riunendo i migliori club e i migliori giocatori al mondo, riuscirà ad offrire un’emozione e un coinvolgimento mai visti prima nel fantacalcio.</p>
                    </li>
                    <li>
                    <div className="club"></div>
                        <h3>I MIGLIORI <span>8 CLUB</span>.</h3>
                        <p>Durante il campionato, le 8 squadre si qualificheranno per un torneo prima a gironi e poi ad eliminazione diretta, giocando in casa ed in trasferta fino alla finale a gara secca della Super League FigA CUP, in un palpitante finale della stagione di quattro settimane.</p>
                    </li>
                    <li>
                    <div className="match"></div>
                        <h3><span>PARTITE</span> E TORNEO</h3>
                        <p>Le partite si giocheranno seguendo la stagione di calcio attuale della Serie A Frecciarossa.</p>
                    </li>
                    <li>
                    <div className="fairplay"></div>
                        <h3>SOLIDARIETA E <span>SOSTENIBILITA</span>.</h3>
                        <p>I contributi di solidarietà cresceranno in linea con i ricavi della lega e si prevede che superino i 10 miliardi di euro durante il corso del periodo iniziale di impegno dei club. Questi contributi di solidarietà seguiranno un nuovo modello di regolare rendicontazione pubblica in piena trasparenza. </p>
                    </li>
                </ul>
            </div>
            
            <Footer />
        </>
    )
}
export default MainSection;