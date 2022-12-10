import React, {useReducer, Fragment} from 'react';

const Clicker = () => {
    const [count, dispatch] = useReducer((count, action) => {
        switch (action.type) {
            case 'add':
                return count + action.value;
            case 'minus':
                return count - action.value;
            default:
                return 100;
        }
    }, 100);

    return (
        <Fragment>
            <h1>Clicker</h1>
            <hr />
            <h2 className={count < 100 ? 'text-danger' : 'text-dark'}>{count}</h2>
            <div className="py-2 bg-light">
                <button
                    className="btn btn-primary mx-1"
                    onClick={() => {
                        dispatch({type: 'add', value: 10});
                    }}
                >
                    add
                </button>
                <button
                    className="btn btn-primary mx-1"
                    onClick={() => {
                        dispatch({type: 'minus', value: 10});
                    }}
                >
                    minus
                </button>
            </div>
        </Fragment>
    );
};

export default Clicker;
