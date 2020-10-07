import React, { Component } from 'react';
import './Programming.css';
import Navbar from './components/navbar/Navbar';
import data from './components/centerFiles/ProgrammingCenter';

class Programming extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
            pendingText: data.title,
            textIndex: 0
        };
    }

    updateText = () => {
        if (this.state.pendingText !== '') {
            let character = this.state.pendingText[this.state.textIndex];
            this.setState({ text: this.state.text + character, textIndex: this.state.textIndex + 1 });
            if (this.state.textIndex === this.state.pendingText.length) {
                this.setState({ pendingText: '' });
            }
        }
    }

    render() {
        setTimeout(this.updateText, 100);
        return (<div style={{ backgroundColor: '#7d82b8' }}>
            <Navbar/>
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
    <input type="text" className="w-100"/>
  </div>
  <div className="dtc tc white">
  <button className="f6 link dim br3 ph3 pv2 pv1-s mb2 dib white bg-navy" type="submit">Submit</button>
  </div>
</div>
                        </div>
                    </article>
                </div>
            </article>
        </div>);
    }
}

export default Programming;


