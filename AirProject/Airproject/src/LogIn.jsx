import React, { useState,  useEffect } from 'react';
import '/src/LogIn.css';

function LogIn(){
    const [seepassword, setSeepassword] = useState(false)

    // const [login, setlogin] = useState('Rich4lexy')
    // const [password, setPassword] = useState('Lexoria22t')

    const [red, setRed] = useState('2px solid hsla(358, 85%, 52%, 1)')

    // function turningRed(){
        
    // }
    

    function inputborder(e) {
        e.target.style.border = '2px solid hsla(358, 85%, 52%, 1)'
    }
    function hide() {
        setSeepassword(!seepassword)
           
    }

    return(
        <div className="login">
            <img id="airtimelogo" src="src/assets/airlogo.png" alt="airtellogo" />

            <div className="btn">
                <nav>
                    <button>LOG IN</button>
                </nav>

            </div>

            <div className="inputbox">
                <label htmlFor="email">AUUID<br />
                    <input className="input"
                           onFocus={(e) => inputborder(e) }
                           id="email" required type="text" 
                           placeholder="Enter Text..." 
                    />
                </label><br />
                <label htmlFor="password">Password<br />
                    <div className="password">
                        <input className="input"
                                id="pass" 
                                onFocus={(e) => inputborder(e)} 
                                required 
                            type={seepassword ? "text" : "password"}  
                                placeholder="Min. 8 characters" 
                                minLength={8} 
                        />
                        <button id='eye' 
                                onClick={hide}>
                            <img className='eye'
                                src={seepassword ? 'src/assets/eye.png' : "src/assets/eye1.png"}
                                alt="eye.png" 
                            />
                        </button>
                    </div>
                </label>

            </div>

            <div className='forget'>
                <div className='remember-me'>
                    <input type="checkbox" name="check" />
                    Remember me
                </div>
                <a href="#" id='forget-password'>Forget password?</a>
            </div>

            <button style={{red }} className='loginbtn'>Login</button>
        </div>
    )

}
export default LogIn