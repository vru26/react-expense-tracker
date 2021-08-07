import './Card.css';
import React from 'react';

function Card(props) {
    const classes = 'card ' + props.className;
    // props.className contains a list of all the classes that are specified while using the component. Example: <Card className="someCssClass">...</Card> - someCssClass will be passed.
    return (
        <div className={classes}>{props.children}</div>
        // props.children contains all the JSX code that is nested in between the opening and closing Card component tags. Example: <Card>some stuff</Card> - somestuff will be passed.
    );
}

export default Card;