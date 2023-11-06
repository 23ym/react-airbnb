import React from "react";
import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item"; 

import "./index.css";

import poolImage from "./pool.svg";
import gymImage from "./gym.svg";
import breakfastImage from "./breakfast.svg";
import wifiImage from "./wifi.svg";
import parkingImage from "./parking.svg";
import petsImage from "./pets.svg";
import airportImage from "./airport.svg";
import conciergeImage from "./concierge.svg";
import serviceImage from "./service.svg";
import childImage from "./child.svg";

function Amenity({ imageSrc, name, hasAmenity }) {
    return hasAmenity ? (
        <ListItem imageSrc={imageSrc}>
            <span>{name}</span>
        </ListItem>
    ) : null;
}

export default function Amenities({ amenities }) {
    return (
        <Box shadow className="amenities">
            <div className="amenities__header">
                <Heading border>Зручності</Heading>
            </div>

            <ul className="amenities__list">
                <Amenity imageSrc={poolImage} name="Басейн" hasAmenity={amenities.hasPool} />
                <Amenity imageSrc={gymImage} name="Спортивний зал" hasAmenity={amenities.hasGym} />
                <Amenity imageSrc={breakfastImage} name="Безкоштовний сніданок" hasAmenity={amenities.hasFreeBreakfast} />
                <Amenity imageSrc={wifiImage} name="Безкоштовний Wi-Fi" hasAmenity={amenities.hasFreeWiFi} />
                <Amenity imageSrc={parkingImage} name="Безкоштовний вуличний паркінг" hasAmenity={amenities.hasParking} />
                <Amenity imageSrc={petsImage} name="Дозволено розміщення з домашніми тваринами" hasAmenity={amenities.hasPetsAllowed} />
                <Amenity imageSrc={airportImage} name="Трансфер до/з аеропорту" hasAmenity={amenities.hasAirportShuttle} />
                <Amenity imageSrc={conciergeImage} name="Консьєрж-сервіс" hasAmenity={amenities.hasConciergeService} />
                <Amenity imageSrc={serviceImage} name="Обслуговування номерів" hasAmenity={amenities.hasRoomService} />
                <Amenity imageSrc={childImage} name="Підходить для дітей" hasAmenity={amenities.hasChildFriendly} />
            </ul>
        </Box>
    );
}
