import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export const PersonCard = props => {
    const [person, setPerson] = useState({})

    useEffect(() => {
        fetch(props.data.url)
            .then(res => res.json())
            .then(data => setPerson(data.result))
            .catch(err => console.error(err))
    }, [])
    return (
        <div className="jumbotron">
            <h1 className="display-4">{person.properties?.name}</h1>

            <hr className="my-4" />
            <p>{person.description}</p>
            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};
