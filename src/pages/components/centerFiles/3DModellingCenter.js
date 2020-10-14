import React from 'react';
import './3DModellingCenter.css';

const ModellingCenter = () => {
    return (<article className="vh-100 dt w-100">
        <div className="dtc v-mid tc white ph3 ph4-l">
            <div className="container h-50-l">
                <iframe src="https://ajil-3d-model-showcase.web.app" title="3D Modelling Showcase" className="responsive-iframe"></iframe>
            </div>
        </div>
    </article>)
}

export default ModellingCenter;