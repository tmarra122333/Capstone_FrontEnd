import { useState } from "react";
import {Link} from "react-router-dom"

function Gear(props) {
    // state to hold formData
    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        description: "",
    });

    // handleChange function for form
    const handleChange = (event) => {
        console.log(event.target);
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createGear(newForm);
        setNewForm({
            name: "",
            image: "",
            description: "",
        });
    };

    // loaded function
    const loaded = () => {
        return props.gear.map((gear) => (
            <div key={gear._id} className="gear">
                <Link to={`/gear/${gear._id}`}><h1>{gear.name}</h1></Link>
                <img src={gear.image} alt={gear.name} />
                <h3>{gear.title}</h3>
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
                    value={newForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.title}
                    name="title"
                    placeholder="A cool title"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Gear" />
            </form>
            {props.gear ? loaded() : loading()}
        </section>
    );
}

export default Gear;