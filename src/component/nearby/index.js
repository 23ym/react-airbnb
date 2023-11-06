import React from "react";
import Heading from "../heading";
import Box from "../box";

import "./index.css";

function Item({ name, link }) {
    return (
        <a href={link} className="nearby__name">{name}</a>
    );
}

export default function Nearby({ list }) {
    return (
        <Box shadow className="nearby">
            <div className="nearby__header">
                <Heading border>Пам'ятки поблизу</Heading>
            </div>
            <ul className="nearby__list">     
                {list.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </ul>
        </Box>
    );
}
