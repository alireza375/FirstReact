export default function Singer({singer}) {
    console.log(singer);
    return (
        <div>
            <h4>ID: {singer.id}</h4>
            <p>Singer: {singer.name}</p>
            <p>Age: {singer.age}</p>
            <p>Country: {singer.country}</p>
        </div>
    )
}