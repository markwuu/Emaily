import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
    const renderContent = () => {
        switch(props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Login With Google</a></li>
                );
            default:
                return (
                    <li><a href="/api/logout">Logout</a></li>
                );
        }
    }

    return (
        <nav>
            <div className="nav-wrapper">
            <a href="/" className="left brand-logo">Emaily</a>
            <ul className="right">
                <li>
                    {renderContent()}
                </li>
            </ul>
            </div>
        </nav>
    )
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
