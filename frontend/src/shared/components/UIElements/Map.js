import React from "react";

const Map = props => {
    return(
        <div className={`map ${props.className}`} style={props.style}>
            <h3>Adress</h3>
            <div>111 College Green</div>
            <div>New York City</div>
            <button>View On Google</button>
        </div>
    );
};

export default Map;