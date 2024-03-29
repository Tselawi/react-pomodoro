import React from "react";

export default function Button(props) {
    return (
        <button
            id={props.buttonId}
            className="Button"
            onClick={() => props.actionClick(props.type)}>
            {props.children}
        </button>
    );
}
