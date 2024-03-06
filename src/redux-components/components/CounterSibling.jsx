import React from 'react';

const CounterSibling = (props) => {
    return (
        <>
            <div className="row">
                <h1 className="text-warning">Counter Sibling Component</h1>
            </div>

            <div className="row">
                <div className="col">
                    <h2 className="text-warning">Count: {props.count}</h2>
                </div>
            </div>
        </>
    );
};

export default CounterSibling;