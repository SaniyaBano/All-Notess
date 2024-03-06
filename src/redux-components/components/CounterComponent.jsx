import React from 'react';

const CounterComponent = (props) => {
    return (
        <>
            <div className="row">
                <h1 className="text-info">Counter Component</h1>
            </div>

            <div className="row">
                <div className="col">
                    <h2 className="text-primary">Count: {props.count}</h2>
                </div>
                <div className="col">
                    <button className="btn btn-primary btn-block" onClick={
                        (e) => {
                            props.inc(5)
                        }
                    }>+</button>
                </div>
                <div className="col">
                    <button className="btn btn-primary btn-block" onClick={
                        (e) => {
                            props.dec(5)
                        }
                    }>-</button>
                </div>
                <div className="col">
                    <button className="btn btn-primary btn-block" onClick={
                        (e) => {
                            props.mul(5)
                        }
                    }>*</button>
                </div>
            </div>
        </>
    );
};

export default CounterComponent;