
import React from 'react';

function LoadingPage() {
    return (
        <div className="text-center">
            <div className="jumbotron jumbotron-fluid align-self-center">
                <div className="container">
                    <div className="spinner-grow " role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                Loading .....!
            </div>
        </div>

    )
}

export default LoadingPage;

