const Item = ({ name, quantity, category }) => {
    return (
        <li className="p-4 m-4 border rounded-lg bg-gray-900">
            <p className="text-lg text-gray-200 font-semibold">{name}</p>
            <p className="text-gray-200">Quantity: {quantity}</p>
            <p className="text-sm text-gray-500">Category: {category}</p>
        </li>
    );
};

export default Item;