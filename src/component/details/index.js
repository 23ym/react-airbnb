import "./index.css";

import Box from "../box";
import ListItem from "../list-item";

import people from "./people.svg";
import bedroom from "./bedroom.svg";
import bed from "./bed.svg";
import bathroom from "./bathroom.svg";

export default function Details({ guests, bedrooms, beds, baths }) {
  return (
    <Box shadow className="details">
      <div className="details__header">
        <h3 className="details__title">Деталі властивості:</h3>
      </div>

      <List guests={guests} bedrooms={bedrooms} beds={beds} baths={baths} />
    </Box>
  );
}

function List({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="details__list">
      <ListItem imageSrc={people}>
        <span>{guests} гості</span>
      </ListItem>

      <ListItem imageSrc={bedroom}>
        <span>{bedrooms} спальня</span>
      </ListItem>

      <ListItem imageSrc={bed}>
        <span>{beds} ліжко</span>
      </ListItem>

      <ListItem imageSrc={bathroom}>
        <span>{baths} ванна кімната</span>
      </ListItem>
    </ul>
  );
}
