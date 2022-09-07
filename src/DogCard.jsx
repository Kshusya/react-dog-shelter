import React from "react";

export default function DogCard(props) {
    let genderColor;
    switch (props.gender) {
        case "male":
            genderColor = "#3d58a1";
            break;
        case "female":
            genderColor = "#be5883";
            break;
        default:
            genderColor = "currentColor";
            break;
    }

    let capitalizedGender = props.gender.substr(0, 1).toUpperCase() + props.gender.substr(1);

    let age = new Date().getFullYear() - props.birthYear;

    return (
        <div className="col">
            <div className="card">
                <img src={props.image} />
                <h3>{props.name}</h3>
                <div className="info">
                    <span><span style={{color: genderColor}}>{capitalizedGender}</span>
                    {props.birthYear && `, ${age} years old`}</span>
                </div>
                <a className="btn" href={`/dog.html?id=${props.id}`}>Take home</a>
            </div>
        </div>
    );
}