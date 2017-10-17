import './style.scss';
import React, { Component } from 'react';
import { LOGIN } from 'utils/urls';
import { connect } from 'react-redux';
import actions from './action';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        };
    }

    onChangeHandler(eve) {
        switch (eve.target.className) {
            case 'username':
                this.setState({
                    username: eve.target.value
                });

                break;
            case 'password':
                this.setState({
                    password: eve.target.value
                });

                break;
        }
    }

    onSubmitHandler() {
        const { username, password } = this.state;
        const { updateLogin } = this.props;

        if (!username || !password) {
            return alert('用户名或密码不得为空！');
        }

        //TODO: for mock
        updateLogin(true);

        // axios
        //     .post(LOGIN, {
        //         username,
        //         password
        //     })
        //     .then(res => {
        //         if (res.status === 0) {
        //             updateLogin(true);
        //         } else {
        //             alert(res.message);
        //         }
        //     });
    }

    render() {
        const { loginStatus } = this.props;
        const { username, password } = this.state;

        if (loginStatus) {
            return <Redirect to={'/'} />;
        }

        return (
            <section className="g-page" id="Login">
                <div className="main">
                    <div className="input-box">
                        <div className="left">
                            <span className="icon i-mine" />
                        </div>
                        <div className="right">
                            <input
                                className="username"
                                type="text"
                                maxLength={16}
                                value={username}
                                onChange={::this.onChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="input-box">
                        <div className="left">
                            <span className="icon i-password" />
                        </div>
                        <div className="right">
                            <input
                                className="password"
                                type="password"
                                maxLength={16}
                                value={password}
                                onChange={::this.onChangeHandler}
                            />
                        </div>
                    </div>
                    <button className="button" onClick={::this.onSubmitHandler}>
                        登录
                    </button>
                    <div className="register">
                        <Link to="/register">立即注册</Link>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    const { login } = state;

    return { loginStatus: login.loginStatus };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
