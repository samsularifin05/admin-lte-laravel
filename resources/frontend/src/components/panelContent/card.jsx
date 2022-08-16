import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-title">{props.title}</div>
            </div>
                <div className="card-body">{props.children}</div>
                {props.footer && (
                    <div className="card-footer">{props.footer}</div>
                )}
        </div>
    );
};

export default Card;
