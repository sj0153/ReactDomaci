import React, { Component } from 'react'
import './style/Pravila.css';

export default class Pravila extends Component {
    render() {
        return (
            <div>
                <div className="pravila_igre">
                    <p>
                        Svaki put kada pokrene novu igru, generiše se nova kombinacija
                        od 4 boje za koju je potrebno da pogodite koje su boje u pitanju i kojim su redosledom poređane.
                        Imate 6 pokušaja da pogodite kombinaciju.
                        Pogađate tako što pritisnete jedno od 6 dugmadi na desnoj strani ekrana.
                    </p>
                    <p>
                        Kućica pored reda prikazuje koliko ste blizu tačnom rešenju. Ako se kružić u njoj
                        oboji u crveno nako vašeg pokušaja to znači da ste pogodili jednu boju i postavili
                        je na pravo mesto u kombinaciji. Ako se oboji u žuto, pogodili ste boju, ali je na
                        pogrešnom mestu.
                    </p>
                    <p>
                        Kada pogodite kombinaciju ili Vam ponestane pokušaja rešenje će se prikazati u poslednjem
                        redu na ekranu.
                    </p>
                    <p>
                        Srećno!
                    </p>
                </div>

            </div >
        )
    }
}
