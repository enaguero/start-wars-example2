import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export const PersonCard = props => {
    const [person, setPerson] = useState({})

    useEffect(()=> {
        fetch(props.url)
        .then(res => res.json())
        .then(data => setPerson(data))
        .catch(err => console.error(err))
    }, [])
    return (
        <div className="jumbotron">
            <h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

            <hr className="my-4" />

            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};
