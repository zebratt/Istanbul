import './style.scss';
import React from 'react';

const BackTop = ()=>{
    return (
        <div onClick={()=>{scrollTo(0,0)}} className="backtop">
            <span className="icon i-back" />
        </div>
    )
}

export default BackTop;