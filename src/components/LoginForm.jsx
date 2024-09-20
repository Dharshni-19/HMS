import React, { useState } from 'react';

function LoginForm({ onLogin }) {
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (role && username && password) {
            onLogin(role);
        }
    };

    return (
        <div className="login-form text-center" style={{ "margin": "0 auto" }}>
            <h2 className="text-center">Login here</h2>
            <form onSubmit={handleSubmit}>
                <select value={role} onChange={(e) => setRole(e.target.value)} required>
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="student">Student</option>
                </select>
                <input
                    type="text"
                    placeholder="Username or Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button> {/* Submit Button */}
            </form>
        </div>
    );
}

export default LoginForm;
