import './Book.css';

export default function Book({book}) {
    const {Id, name, price} = book;
    return (
        <div className='book'>
            <h3>ID: {Id}</h3>
            <p>Book: {name}</p>
            <p>Price: {price}</p>
        </div>
    )
}