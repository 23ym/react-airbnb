import React from "react";
import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";

import "./index.css";

function Item({ id, guestName, rating, review }) {
    return (
        <Box className="reviews">
            <div className="reviews__header">
                <span className="reviews__guest">{guestName}</span>
                <span className="reviews__rating">Рейтинг: {rating}</span>
            </div>
            <span className="reviews__review">{review}</span>
        </Box>
    );
}

export default function Reviews({ list }) {
    return (
        <div className="reviews__block">
            <Heading>Відгуки клієнтів</Heading>

            <div className="reviews__list">
                {list.map(({ id, ...rest }) => (
                    <Fragment key={id}>
                      <Item {...rest} />
                    </Fragment>
                ))}
            </div>
        </div>
    );
}