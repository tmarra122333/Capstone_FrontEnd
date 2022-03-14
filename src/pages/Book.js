import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

function Book(props) {

  const [book, setBook] = useState([]);

    const getBookData = async () => {
        const response = await fetch(props.URL + "book");
        // console.log(response)
        const data = await response.json();
        // console.log(data)
        setBook(data);
    };

    const createBook = async (book) => {
        await fetch(props.URL + "book", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
        body: JSON.stringify(book),
        });
        getBookData();
    };


    

    useEffect(() => getBookData(), []);
    // state to hold formData
    const [newBook, setNewBook] = useState({
        name: "",
        date: "",
        Email: "",
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value });
    };

    // handle submit function for Create book
    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(newBook);
        setNewBook({
            name: "",
            date: "",
            Email: "",
        });
    };


    // loaded function
    const loaded = () => {
        return book.map((book) => (
            <div key={book._id} className="book">
                <Link to={`/book/${book._id}`}><h1>{book.name}</h1></Link>  
                <h3>{book.date} </h3>
                <h3>{book.Email}</h3>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newBook.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newBook.date}
                    name="date"
                    placeholder="MM/DD/YEAR"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newBook.Email}
                    name="Email"
                    placeholder="TomSmith@gmail.com"
                    onChange={handleChange}
                />
                <input type="submit" value="Book Studio" />
            </form>
            {book ? loaded() : loading()}
        </section>
    );
}

export default Book;