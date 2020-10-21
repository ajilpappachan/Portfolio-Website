import React from 'react';
import './3DModellingCenter.css';

const ModellingCenter = () => {
    return (
        <article className="vh-100 dt w-100">
            <div className="dtc v-mid tc ph3 ph4-l">
                <article className="bg-white center mw7 ba b--black-10 mv4">
                    <div className="container h-50-l">
                        <iframe src="https://ajil-3d-model-showcase.web.app" title="3D Modelling Showcase" className="responsive-iframe"></iframe>
                    </div>
                    <div className="pa3">
                        <a className="lh-title link pointer" href="https://ajil-3d-model-showcase.web.app" target="_blank" rel="noopener noreferrer">3D Modelling Showcase</a>
                        <small className="gray db pv2">Use WASD Keys or Tap on the left, right, top, and bottom sides of the viewport to move around</small>
                    </div>
                </article>
            </div>
        </article>
    )
}

export default ModellingCenter;