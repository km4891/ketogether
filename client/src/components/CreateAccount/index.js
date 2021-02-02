import React from 'react';

class CreateAccount extends React.Component {
    render() {
        return (
            <div className="create-account">
                Create An Account
                <div className="dp">
                    <p>Display name: </p>
                </div>
                <div className="email">
                    <p>Email: </p>
                </div>
                <div className="pw">
                    <p>Password: </p>
                </div>
            </div>
        ) 
    };
};

export default CreateAccount;