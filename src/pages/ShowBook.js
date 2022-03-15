import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router'

function Show(props) {

    const { id } = useParams();
    const [book, setBook] = useState([]);
    const [editForm, setEditForm] = useState(book)

    const updateBook = async (book, id) => {
        // make put request to create people
        await fetch(props.URL + "book/" + id, {           //The id needs to be outside of the string or its all read as 1 link. 
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(book),
        })
        // update list of people
        getBookData()
    }

    const deleteBook = async id => {
        // make delete request to create people
        await fetch(props.URL + "book/" + id, {
            method: "delete",
        })
        // update list of people
        getBookData()
    }

    const removeBook = () => {
        deleteBook(book._id)
        props.history.push("/book")
    }

    // handleChange function for form
    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }
    // handlesubmit for form
    const handleSubmit = event => {
        event.preventDefault()
        updateBook(editForm, book._id)
        // redirect people back to index
        props.history.push("/")
    }



    const getBookData = async () => {
        const response = await fetch(props.URL + "book");
        const data = await response.json();
        const match = data.find(p => p._id === id);
        setBook(match);
    };
    useEffect(() => { getBookData() }, []);


    const loaded = () => {
        return (
            <div>
                <h1>Confirmation Booking!</h1>
                <h3>See you on {book.date}</h3>
                <h1>{book.name}</h1>
                <h3>{book.Email}</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={editForm.name}
                        name="name"
                        placeholder="name"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={editForm.date}
                        name="date"
                        placeholder="DD/MM/YEAR"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={editForm.Email}
                        name="Email"
                        placeholder="TomSmith@gmail.com"
                        onChange={handleChange}
                    />
                    <input type="submit" value="Update Person" />
                </form>
                <button id="delete" onClick={removeBook}>
                    DELETE
                </button>
               

            </div>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }
    return book ? loaded() : loading();

}
export default Show;