import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
    console.log('props', props);
    return (
        <nav>
            <div className="nav-wrapper">
            <a href="/" className="left brand-logo">Emaily</a>
            <ul className="right">
                <li>
                    <a href="/auth/google">Login With Google</a>
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
