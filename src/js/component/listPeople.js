import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { PersonCard } from "./personCard";

import { Context } from "../store/appContext";

export const ListPeople = props => {
    const { store, actions } = useContext(Context);
    const { people } = store;

    const items = people.map((p, index) => <PersonCard key={index} data={p} resourceType={'people'} />)

    return (
        <div className="jumbotron">

            <hr className="my-4" />
            <ul>{items}</ul>
            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};
