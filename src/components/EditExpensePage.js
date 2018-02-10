import React from 'react';

const EditExpensePage = (props) => (
    <div>
       Editing the expense {props.match.params.id}
    </div>
);

export default EditExpensePage;