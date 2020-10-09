import React, { Component } from 'react';
import './Programming.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import data from './components/centerFiles/ProgrammingCenter';
import ProgrammingCards from './components/programmingCards/ProgrammingCards';

class Programming extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
            pendingText: data.help,
            textIndex: 0,
            command: "",
            nav: false,
            foot: false,
            cards: false,
            myRef: React.createRef()
        };
    }

    scrollToMyRef = () => window.scrollTo(0, this.state.myRef.current.offsetTop)

    updateText = () => {
        if (this.state.pendingText !== '') {
            let character = this.state.pendingText[this.state.textIndex];
            this.setState({ text: this.state.text + character, textIndex: this.state.textIndex + 1 });
            if (this.state.textIndex === this.state.pendingText.length) {
                this.setState({ textIndex: 0, pendingText: '' });
            }
        }
    }

    onCommandChange = (event) => {
        this.setState({ command: event.target.value });
    }

    onKeyDown = (event) => {
        if (event.key === "Enter") {
            this.checkCommands();
        }
    }

    checkCommands = () => {
        switch (this.state.command) {
            case "nav":
                this.setState({ text: "", pendingText: data.nav + !this.state.nav + data.tip, nav: !this.state.nav });
                break;
            case "help":
                this.setState({ text: "", pendingText: data.help });
                break;
            case "foot":
                this.setState({ text: "", pendingText: data.foot + !this.state.foot + data.tip, foot: !this.state.foot });
                break;
            case "cards":
                this.setState({ text: "", pendingText: data.cards + !this.state.cards + data.tip, cards: !this.state.cards });
                setTimeout(this.scrollToMyRef, 100);
                break;
            default:
                this.setState({ text: "", pendingText: data.invalidCode + data.tip });
        }
        this.setState({ command: "" });
    }

    render() {

        setTimeout(this.updateText, 0.5);
        return (<div style={{ backgroundColor: '#7d82b8' }}>
            {
                this.state.nav ? <Navbar /> : null
            }
            <article className="vh-100 dt w-100">
                <div className="dtc v-mid tc ph3 ph4-l">
                    <article className="br2 ba bg-black o-90 w-100 w-50-m w-75-l vh-50 vh-75-l center shadow-5">
                        <div className="pa2 ph3-ns pb3-ns">
                            <pre>
                                <p className="tl white">
                                    {this.state.text}
                                </p>
                            </pre>
                        </div>
                    </article>
                    <article className="br2 ba bg-black o-90 w-100 w-50-m w-75-l h-auto center shadow-5">
                        <div className="pa2 ph3-ns pb3-ns dt-ns dt--fixed-ns w-100">
                            <div className="dt dt--fixed">
                                <div className="dtc tc white">
                                    <p>{`console -->`}</p>
                                </div>
                                <div className="dtc tc white">
                                    <input type="text"
                                        className="w-100"
                                        onChange={this.onCommandChange}
                                        onKeyDown={this.onKeyDown}
                                        value={this.state.command} />
                                </div>
                                <div className="dtc tc white">
                                    <input className="f6 link dim br3 ph3 pv2 pv1-s mb2 dib white bg-navy"
                                        type="submit"
                                        value="Submit"
                                        onClick={this.checkCommands} />
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </article>
            <div ref={this.state.myRef}>
                {
                    this.state.cards ? <ProgrammingCards /> : null
                }
            </div>
            {
                this.state.foot ? <Footer /> : null
            }
        </div>);
    }
}

export default Programming;


