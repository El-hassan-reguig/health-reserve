import React, { useState } from 'react';
import './user.css'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function AddUser() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [profail, setProfail] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordconfirme, setPasswordconfirme] = useState("");
    const navigate = useNavigate();

    // fonction d'ajout de l'utilisateur dans la base de données
    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:3500/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nom,
                    prenom,
                    profail,
                    email,
                    password,
                    passwordconfirme
                }),
            });
            if(!nom || !prenom){
                toast.warning("Tous les champs sont obligatoires!")
                return false
            }else
            if(password.length<5){
                toast.error('PASSWORD SHOULD HAVE  AT LEAST 5 CHARACTERS')
                return false;
            } 
            if(password  !== passwordconfirme){
                toast.error("Veuillez vérifier votre mot de passe de confirmation", {
                    position: "top-right"
                })
                return false;
            }else


            if (response.ok) {
                toast.success('User added successfully!');
                navigate('/login')

                // Add any further actions after successful user addition
            } else {
                toast.warning('Failed to add user.');
            }
        } catch (error) {
            toast.warning('Error during user addition:', error);
        }
    }
    
    return (
        <div>

           <center>
            <form className="form" onSubmit={handleSubmit}>
                <p className="title">Register</p>
                <p className="message">Signup now and get full access to our app.</p>
                <div className="flex">
                    <label>
                        <input
                            required=""
                            placeholder="Firstname"
                            type="text"
                            className="input"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                            />
                        
                    </label>

                    <label>
                        <input
                            required=""
                            placeholder="Lastname"
                            type="text"
                            className="input"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                            />
                        
                    </label>
                </div>
                    <label>
                        <input
                            required=""
                            placeholder="Profail"
                            type="text"
                            className="input"
                            value={profail}
                            onChange={(e) => setProfail(e.target.value)}
                            />
                        
                    </label>

                <label>
                    <input
                        required=""
                        placeholder="Email"
                        type="email"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    
                </label>

                <label>
                    <input
                        required=""
                        placeholder="Password"
                        type="password"
                        className="input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    
                </label>

                <label>
                    <input
                        required=""
                        placeholder="Confirm password"
                        type="password"
                        className="input"
                         value={passwordconfirme}
                          onChange={(e) => setPasswordconfirme(e.target.value)}
                        />
                    
                </label>

                <button type="submit" className="submit">
                    Submit
                </button>

                <p className="signin">
                    Already have an account? <Link to={'/login'}><a href="#">Sign in</a></Link>
                </p>
<ToastContainer/>
            </form>
            </center>
        </div>
    );
}
