import "./index.css";

export default function Box({ children, className, shadow }) {
    return (
        <div className={`box ${shadow ? "box--shadow" : ""} ${className} `}>
            {children}
        </div>
    );
} 
export function Item({ type, pricePerNight: price, currency, capacity }) {
    return (
        <Box className="room">
            <span className="room__title">{type}</span>
            <span className="room__info">Кількість гостей: {capacity}</span>
            <span className="room__price">
                {currency}
                {price}
            </span>
        </Box>
    );
}
    