import { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import Gear from "../pages/gear"


function Main(props) {
    const [gear, setGear] = useState(null)

    const URL = "http://localhost:4000/gear/"

    const getGear = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setGear(data)
    }

    const createGear= async person => {
        // make post request to create gear
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(gear),
        })
        // update list of gear
        getGear()
    }

    const updateGear = async (equipment, id) => {
        // make put request to create gear
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(equipment),
        })
        // update list of gear
        getGear()
    }

    const deleteGear = async id => {
        // make delete request to create gear
        await fetch(URL + id, {
            method: "delete",
        })
        // update list of gear
        getGear()
    }

    useEffect(() => getGear(), [])

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Gear gear={gear} createGear={createGear} />
                </Route>
                <Route
                    path="/gear/:id"
                    render={rp => (
                        <Show
                            gear={gear}
                            updateGear={updateGear}
                            deleteGear={deleteGear}
                            {...rp}
                        />
                    )}
                />
            </Switch>
        </main>
    )
}

export default Main

//Layout of page will take place in Components
//css will do all styling