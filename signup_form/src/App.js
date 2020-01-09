import React, { useState } from "react";
import "./styles/main.min.css";

function App() {
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="App">
            <div>
                <form>
                    <h4>Number1</h4>
                    <input
                        onChange={e => setNumber1(parseInt(e.target.value))}
                    ></input>
                    <h4>Number2</h4>
                    <input
                        onChange={e => setNumber2(parseInt(e.target.value))}
                    ></input>
                    <h4>Total</h4>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        value={number1 + number2}
                    ></input>
                    <br />
                    <input
                        type="submit"
                        value="submit"
                        onClick={e => {
                            e.preventDefault();
                            alert(e.target.value);
                        }}
                    />
                </form>
            </div>
        </div>
    );
}

export default App;
