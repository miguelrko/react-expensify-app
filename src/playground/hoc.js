// Higher order component -  a component that renders another component.
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const witAdminWarning = (WrappedComponent) => {
   return (props) => (
    <div>
        {props.isAdmin && <p>This is private info. Please dont share!</p>}
        <WrappedComponent {...props} />
    </div>
   );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? 
            <p>Please login to see this section!</p> 
            :
            <WrappedComponent {...props} />}
        </div>
    );
};

const AdminInfo = witAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="there are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="there are the details" />, document.getElementById('app'));