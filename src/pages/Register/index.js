import './style.scss';
import React from 'react';
import Header from 'components/Header';

const Register = () => {
    return (
        <div className="g-page" id="Register">
            <Header title={'注册'} iconBack />
            <div className="main">
                <div className="row">
                    <div className="label">昵称：</div>
                    <div className="input">
                        <input type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="label">学号：</div>
                    <div className="input">
                        <input type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="label">密码：</div>
                    <div className="input">
                        <input type="password" />
                    </div>
                </div>
                <div className="row">
                    <div className="label">密码确认：</div>
                    <div className="input">
                        <input type="password" />
                    </div>
                </div>
            </div>
            <div className="button">提交</div>
        </div>
    );
};

export default Register;
