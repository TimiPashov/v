import { useState } from "react";
export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');

    async function onSubmit(e) {
        e.preventDefault()
    }
    return (
        <div id="templatemo_content_right">

            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="repass">Repeat password</label>
                    <input
                        type="password"
                        name="repass"
                        id="repass"
                        value={repass}
                        onChange={(e) => setRepass(e.target.value)}
                    />
                </div>


                <div style={{ padding: '15px' }}>
                    <div className="buy_now_button">
                        <button type='submit'>Submit</button>
                    </div>
                    <div className="detail_button">
                        <a to={'/'}>Back</a>
                    </div>
                </div>
            </form>
        </div>

    );
}