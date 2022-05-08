import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState('');
    const [ageValue, setAgeValue] = React.useState('');
    const [textArea, setTextArea] = React.useState('');
    const [checked, toggleChecked] = React.useState(false);

    function handleSubmit(e) {
        console.log({nameValue}, {ageValue}, {textArea});
        e.preventDefault();
    }

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
        >
            <legend>Gegevens:</legend>
            <label htmlFor="name">Naam: </label>
            <br/>
            <input
                type="text"
                id="name"
                name="name"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
            />
            <br/>
            <label htmlFor="age">Leeftijd: </label>
            <br/>
            <input
                type="number"
                id="age"
                name="age"
                placeholder="0"
                value={ageValue}
                onChange={(e) => setAgeValue(e.target.value)}
            />
            <br/>
            <legend>Jouw review</legend>
            <br/>
            <label htmlFor="opinion">Opmerkingen: </label>
            <br/>
            <textarea
                rows="4"
                cols="50"
                id="opinion"
                name="opinion"
                placeholder="Wat vond je van het recept?"
                value={textArea}
                onChange={(e) => setTextArea(e.target.value)}
            />
            <br/>
            <label htmlFor="newsletter">
                <input
                    type="checkbox"
                    id="newsletter"
                    checked={checked}
                    onChange={() => toggleChecked(!checked)}
                />
                Ik schrijf me in voor de nieuwsbrief
            </label>
            <br/>
            <button
                type="submit"
            >Versturen</button>
        </form>
    );
}

export default App;
