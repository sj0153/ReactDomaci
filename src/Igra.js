import React, { Component } from 'react'
import Red from './Red'
import Dugme from './Dugme'
import './style/Igra.css'

export default class Igra extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boje: ["red", "yellow", "green", "gray", "blue", "pink"],
            zadatak: [1 + Math.round(Math.random() * 5),
            1 + Math.round(Math.random() * 5),
            1 + Math.round(Math.random() * 5),
            1 + Math.round(Math.random() * 5)],
            potezi: [],
            gotovo: false
        };

        this.clickFunction = this.clickFunction.bind(this);
    }


    clickFunction(color) {
        if (this.state.gotovo) {
            return;
        }
        let redPotez = Math.floor(this.state.potezi.length / 4);

        let poljeUReduPotez = this.state.potezi.length % 4;

        let potez = "";
        switch (color) {
            case "red":
                potez = 1;
                break;
            case "yellow":
                potez = 2;
                break;
            case "green":
                potez = 3;
                break;
            case "gray":
                potez = 4;
                break;
            case "blue":
                potez = 5;
                break;
            case "pink":
                potez = 6;
                break;
            default:
                potez = 0;
                break;
        }

        switch (redPotez) {
            case 0:
                this.refs.prvi_red.odigrajPotez(color, poljeUReduPotez);
                break;
            case 1:
                this.refs.drugi_red.odigrajPotez(color, poljeUReduPotez);
                break;
            case 2:
                this.refs.treci_red.odigrajPotez(color, poljeUReduPotez);
                break;
            case 3:
                this.refs.cetvrti_red.odigrajPotez(color, poljeUReduPotez);
                break;
            case 4:
                this.refs.peti_red.odigrajPotez(color, poljeUReduPotez);
                break;
            case 5:
                this.refs.sesti_red.odigrajPotez(color, poljeUReduPotez);
                break;
            default:
                break;
        }


        if (this.state.potezi.length === 0) {

            let noviPotezi = [potez]

            this.setState({ potezi: noviPotezi });
        } else {
            let noviPotezi = this.state.potezi

            noviPotezi[redPotez * 4 + poljeUReduPotez] = potez

            this.setState({ potezi: noviPotezi });

        }

        console.log(this.state)

        if (this.state.potezi.length % 4 === 0 && poljeUReduPotez !== 0) {
            this.proveriKraj();
        }

    }

    proveriKraj() {
        let i = this.state.potezi.length;
        let pokusaj = [this.state.potezi[i - 4],
        this.state.potezi[i - 3],
        this.state.potezi[i - 2],
        this.state.potezi[i - 1]];

        let skrozTacno = 0;
        let delimicnoTacno = 0;

        let zad = [...this.state.zadatak];
        let rezPolje = document.querySelectorAll(".rezultatPolje");
        if (JSON.stringify(pokusaj) === JSON.stringify(this.state.zadatak)) {
            skrozTacno = 4;
            delimicnoTacno = 0;
            this.zavrsiIgru();

        } else {
            let countsZ = {};

            for (let i = 0; i < zad.length; i++) {
                let num = zad[i];
                countsZ[num] = countsZ[num] !== undefined ? countsZ[num] + 1 : 1;
            }

            let countsP = {};

            for (let i = 0; i < pokusaj.length; i++) {
                let num = pokusaj[i];
                countsP[num] = countsP[num] !== undefined ? countsP[num] + 1 : 1;
            }

            for (let a = 1; a <= 6; a++) {
                if (countsZ[a] === undefined || countsP[a] === undefined) {
                    continue;
                }
                if (countsZ[a] >= countsP[a]) {
                    delimicnoTacno += countsP[a];
                } else {
                    delimicnoTacno += countsZ[a];
                }
            }

            for (let i = 0; i < 4; i++) {
                if (zad[i] === pokusaj[i]) {
                    skrozTacno++;
                    delimicnoTacno--;
                }
            }
        }

        let b = this.state.potezi.length - 4;
        while (skrozTacno > 0) {
            rezPolje[b].style.backgroundColor = "red";
            skrozTacno--;
            b++;
        }
        while (delimicnoTacno > 0) {
            rezPolje[b].style.backgroundColor = "yellow";
            delimicnoTacno--;
            b++;
        }

        if (this.state.potezi.length === 24) {
            this.zavrsiIgru();
        }


    }



    zavrsiIgru() {
        this.setState({ gotovo: true });
        this.showSolution();
    }

    showSolution() {
        for (let i = 0; i < 4; i++) {
            this.refs.resenje.odigrajPotez(this.state.boje[this.state.zadatak[i] - 1], i);
        }
    }

    render() {
        return (
            <div>
                <div className="igra" >

                    <div className="redovi">
                        <div className="red">
                            <Red ref="prvi_red" />
                            <div className="rezultatPokusaja">
                                <div className="rezultatPolje"></div>
                                <div className="rezultatPolje"></div>
                                <div className="rezultatPolje"></div>
                                <div className="rezultatPolje"></div>
                            </div>
                        </div>
                        <div className="red">
                            <Red ref="drugi_red" />
                            <div className="rezultatPokusaja">
                                <div className="rezultatPolje"></div>
                                <div className="rezultatPolje"></div>
                                <div className="rezultatPolje"></div>
                                <div className="rezultatPolje"></div>
                            </div>
                        </div>
                        <div className="red">
                            <Red ref="treci_red" />
                            <div className="rezultatPokusaja">
                                <div className="rezultatPolje"></div>
                                <div className="rezultatPolje"></div>
                                <div className="rezultatPolje"></div>
                                <div className="rezultatPolje"></div>
                            </div>
                        </div>
                        <div className="red">
                            <Red ref="cetvrti_red" />
                            <div className="rezultatPokusaja">
                                <div className="rezultatPolje"></div>
                                <div className="rezultatPolje"></div>
                                <div className="rezultatPolje"></div>
                                <div className="rezultatPolje"></div>
                            </div>
                        </div>
                        <div className="red">
                            <Red ref="peti_red" />
                            <div className="rezultatPokusaja">
                                <div className="rezultatPolje"></div>
                                <div className="rezultatPolje"></div>
                                <div className="rezultatPolje"></div>
                                <div className="rezultatPolje"></div>
                            </div>
                        </div>
                        <div className="red">
                            <Red ref="sesti_red" />
                            <div className="rezultatPokusaja">
                                <div className="rezultatPolje"></div>
                                <div className="rezultatPolje"></div>
                                <div className="rezultatPolje"></div>
                                <div className="rezultatPolje"></div>
                            </div>
                        </div>


                        <div id="resenje">
                            <Red ref="resenje" />
                        </div>
                    </div>
                        <div className="dugmad">
                            <Dugme color="red" clickFunction={this.clickFunction} />
                            <Dugme color="yellow" clickFunction={this.clickFunction} />
                            <Dugme color="green" clickFunction={this.clickFunction} />
                            <Dugme color="gray" clickFunction={this.clickFunction} />
                            <Dugme color="blue" clickFunction={this.clickFunction} />
                            <Dugme color="pink" clickFunction={this.clickFunction} />


                        </div>

                </div>
            </div>
        )
    }
}

