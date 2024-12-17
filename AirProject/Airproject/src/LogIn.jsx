import '/src/LogIn.css';

function LogIn(){
    const password = document.querySelector('#pass')
    const eye = document.querySelector('.eye')

    function inputborder(e) {
        e.target.style.border = '2px solid hsla(358, 85%, 52%, 1)'
    }
    function hide() {
        
        if (password.type === "password") {
            password.type = "text"
            eye.src = "src/assets/eye.png"
             
        }
        else {
            document.querySelector('#pass').type = "password"
            eye.src = "src/assets/eye1.png"

        }

        // password.type === "password" ? "text" : "password";
    }

    return(
        <div className="login">
            <img id="airtimelogo" src="src/assets/airlogo.png" alt="airtellogo" />

            <div className="btn">
                <ul>
                    <li>LOG IN</li>
                </ul>

            </div>

            <div className="inputbox">
                <label htmlFor="email">AUUID<br />
                    <input className="input" onFocus={(e) => inputborder(e) } id="email" required type="text" placeholder="Enter Text..." />
                </label><br />
                <label htmlFor="password">Password<br />
                    <div className="password">
                        <input className="input" id="pass" onFocus={(e) => inputborder(e)} required type="password" placeholder="Min. 8 characters" minLength={8} />
                        <button id='eye' onClick={() => hide()}>
                            <img className='eye' src='src/assets/eye.png' alt="eye.png" />
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

            <button className='loginbtn'>Login</button>
        </div>
    )

}
export default LogIn