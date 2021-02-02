import React from 'react';
import props from 'prop-types';

class Header extends React.Component {
    render() {
        const tabs = ['Dashboard', 'Saved Recipes', 'Make a Post', 'Donate', 'Login', 'Logout', 'Create Account']
        return (
            <header className="">
                <h1>
                    <a href="/"> KETOgether </a>
                </h1>
                <ul className="">
                    {tabs.map(tab => (
                        <li className="" key={tab}>
                            <a
                                href={'#' + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)}
                                className={
                                    this.props.currentPage === tab ? '' : ''
                                }
                            >
                                {tab}
                            </a>
                        </li>
                    ))}
                </ul>
            </header>
        ) 
    };
};

export default Header;