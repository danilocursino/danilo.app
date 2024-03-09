import { useContext, useRef, useEffect } from 'react';
import { FaBehance, FaGithub, FaLinkedinIn, FaRedoAlt } from "react-icons/fa";

import { BubbleContext } from './App';
import * as utils from './Util'; 

export const BubbleCanvas = (props) => {
    const { colorObj, quantity } = useContext(BubbleContext);

    useEffect(() => {
        document.title = 'Danilo Cursino | ' + utils.multilanguage('dev') + ' | PHP - WordPress - JavaScript - React (' + utils.multilanguage('construction') + ')';
    }, []);

    return (
        <div style={{ backgroundColor: colorObj.colorFull }} className="bubbles">
            <div style={{ backgroundColor: colorObj.colorFull }} className={'bubbles-control ' + colorObj.colorBlack}>
                <div className={'bubbles-control-wrapper ' + colorObj.colorDark}>
                    <div className='bubbles-control-refresh' onClick={(() => window.location.reload())}>
                        <FaRedoAlt />
                    </div>
                    <div className='bubbles-control-content'>
                        <div className='bubbles-control-content-title'>
                            <span>{utils.multilanguage('dev')}</span>
                            <h1>Danilo Fonseca</h1>
                            <h2>PHP | WordPress | JavaScript | React</h2>
                        </div>
                        <ul className='bubbles-control-content-icons'>
                            <li>
                                <a title={utils.multilanguage('access') + ' Behance'} rel="noreferrer" target='_blank' href="https://www.behance.net/danilo_"><FaBehance /></a>
                            </li>
                            <li>
                                <a title={utils.multilanguage('access') + ' GitHub'} rel="noreferrer" target='_blank' href="https://github.com/danilocursino"><FaGithub /></a>
                            </li>
                            <li>
                                <a title={utils.multilanguage('access') + ' LinkedIn'} rel="noreferrer" target='_blank' href="https://linkedin.com/in/danilo-"><FaLinkedinIn /></a>
                            </li>
                        </ul>
                        <div className='bubbles-control-content-title'>
                            <a download title={utils.multilanguage('cv')} rel="noreferrer" target='_blank' href={utils.multilanguage('cvlink')}>
                                <button>{ utils.multilanguage('cv') }</button>
                            </a>
                            <span>{ utils.multilanguage('construction') }</span><br/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bubbles-items-wrapper'>
                <BubblesConstruct quantity={quantity} />
            </div>
        </div>
    );    
}

export const Bubble = (props) => {
    const { colorObj, winHeight, winWidth } = useContext(BubbleContext);
    let size = utils.randomNumber((winWidth * 0.10), (winWidth * 0.25));
    let opacity = (utils.randomNumber(2, 4) / 10);
    let brightness = utils.randomNumber(50, 90);
    let top = utils.randomNumber(0, (winHeight - size));
    let left = utils.randomNumber(0, (winWidth - size));

    return (
        <div
            id={'bubbles-item-' + (props.index + 1)}
            ref={useRef(null)}
            className={'bubbles-item bubbles-item-' + (props.index + 1) + ' ' + colorObj.colorBlack}
            style={{
                backgroundColor: colorObj.colorFull,
                opacity: opacity,
                filter: "brightness(" + brightness + "%)",
                zIndex: (props.index + 1),
                width: size,
                height: size,
                top: top,
                left: left
            }}
        ></div>
    )
}

export const BubblesConstruct = (props) => {
    const { quantity } = useContext(BubbleContext);
    const bubblesConstruct = [];

    for (let i = 0; i < (props.quantity ?? quantity ); i++) {
        bubblesConstruct.push(<Bubble index={i} key={i} />);
    }
    
    return (bubblesConstruct);
}