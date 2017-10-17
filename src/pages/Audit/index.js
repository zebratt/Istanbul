import './style.scss';
import React from 'react';
import Header from 'components/Header';

const Audit = ()=>{
    return (
        <div className="g-page" id="Audit">
            <Header title={'用户审核'} iconBack />
            <div className="main">
                <div className="row title">
                    <div className="checkbox">
                        <input type="checkbox" />
                    </div>
                    <div className="id">学号</div>
                    <div className="nickname">昵称</div>
                </div>
                <div className="row">
                    <div className="checkbox">
                        <input type="checkbox" name="id" />
                    </div>
                    <div className="id">09311124</div>
                    <div className="nickname">末世</div>
                </div>
                <div className="row">
                    <div className="checkbox">
                        <input type="checkbox" name="id" />
                    </div>
                    <div className="id">09311124</div>
                    <div className="nickname">末世</div>
                </div>
                <div className="row">
                    <div className="checkbox">
                        <input type="checkbox" name="id" />
                    </div>
                    <div className="id">09311124</div>
                    <div className="nickname">末世</div>
                </div>
                <div className="row">
                    <div className="checkbox">
                        <input type="checkbox" name="id" />
                    </div>
                    <div className="id">09311124</div>
                    <div className="nickname">末世</div>
                </div>
                <div className="row">
                    <div className="checkbox">
                        <input type="checkbox" name="id" />
                    </div>
                    <div className="id">09311124</div>
                    <div className="nickname">末世</div>
                </div>
            </div>
            <div className="btns">
                <div className="confirm">通过</div>
                <div className="reject">拒绝</div>
            </div>
        </div>
    )
}

export default Audit;