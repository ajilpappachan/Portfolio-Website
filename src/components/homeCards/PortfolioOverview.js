import React from 'react';
import './PortfolioOverview.css';

const PortfolioOverview = () => {
    return (<div>
        <article className="vh-100 dt w-100">
            <div className="dtc tc white ph3 ph4-l">
                <article className="br2 ba bg-black o-90 w-100 w-50-m w-75-l h-auto center shadow-5">
                    <div className="pa2 ph3-ns pb3-ns">
                        <div className="dt w-100 mt1">
                            <h1 className="f5 f4-ns mv0 tl white">Portfolio Overview</h1>
                        </div>
                        <p className="f6 mt2 tl white">
                            Please delve into this presentation I prepared as a summary of my capabilities and specialisations.</p>
                    </div>
                    <div className="container h-50">
                        <iframe
                            src="https://onedrive.live.com/embed?resid=7AC901B0DB2F5DD0%2113718&amp;authkey=%21AE2HBBtHISyY508&amp;em=2&amp;wdAr=1.7777777777777777"
                            className="responsive-iframe"
                            title="portfolioOverview">
                            This is an embedded <a target="_blank" rel="noopener noreferrer" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" rel="noopener noreferrer" href="https://office.com/webapps">Office</a>.
                        </iframe>
                    </div>
                </article>
            </div>
        </article>
    </div>);
}

export default PortfolioOverview;