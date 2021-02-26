import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            Dashboard
            <div className="fixed-actionbtn">
                <Link to="/surveys/new" className="btn-floating btn-large waves-effect waves-light red">
                    <i class="material-icons">add</i>
                </Link>
            </div>
        </div>
    )
};

export default Dashboard;
