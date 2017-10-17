import './style.scss';
import React, { Component } from 'react';
import propTypes from 'prop-types';

class Header extends Component {
    static propTypes = {
        title: propTypes.string,
        iconLeft: propTypes.object,
        iconRight: propTypes.object,
        iconBack: propTypes.bool
    };

    leftClickHandler() {
        const { iconLeft, iconBack } = this.props;

        if (iconLeft && iconLeft.handler) {
            return iconLeft.handler();
        }

        if (iconBack) {
            return history.go(-1);
        }
    }

    rightClickHandler() {
        const { iconRight } = this.props;

        if (iconRight && iconRight.handler) {
            iconRight.handler();
        }
    }

    render() {
        const { title, iconLeft, iconRight, iconBack } = this.props;
        const leftCtn = iconLeft
            ? <span className={`icon ${iconLeft.name}`} />
            : iconBack ? <span className="icon i-back" /> : null;
        const rightCtn = iconRight
            ? <span className={`icon ${iconRight.name}`} />
            : null;

        return (
            <div className="m-header">
                <div className="left" onClick={::this.leftClickHandler}>
                    {leftCtn}
                </div>
                <div className="middle">{title}</div>
                <div className="right" onClick={::this.rightClickHandler}>
                    {rightCtn}
                </div>
            </div>
        );
    }
}

export default Header;
