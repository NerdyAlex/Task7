import '/src/SignUp.css';

function SignUp() {

    const password = document.querySelector('#pass')
    const eye = document.querySelector('.eye')
    function inputborder(e) {
        e.target.style.border = '2px solid hsla(358, 85%, 52%, 1)'
    }

    function hide() {
        if (password.type === "password") {
            password.type = "text"

        }
        else {
            document.querySelector('#pass').type = "password"
            eye.src = "src/assets/eye1.png"

        }

    }
    return (
        <div className="signup">
            <img id="airtimelogo" src="src/assets/airlogo.png" alt="airtellogo" />

            <div className="btn">
                <ul>
                    <li>LOG IN</li>
                    <li>SIGN UP</li>
                </ul>

            </div>

            <div className="inputbox">
                <label htmlFor="email">Email/Phone Number<br />
                    <input className="input" id="email" onFocus={(e) => inputborder(e)} required type="text" placeholder="Enter Text..." />
                </label><br />
                <label htmlFor="password">Password<br />
                    <div className="password">
                        <input className="input" id="pass" onFocus={(e) => inputborder(e)} required type="password" placeholder="Min. 8 characters" minLength={8} />
                        <button id='eye' onClick={() => hide()}>
                            <img src='src/assets/eye.png' alt="eye.png" />
                        </button>
                    </div>
                </label>
            </div>


            <div className="the-or">
                <hr />
                <p>or</p>
                <hr />
            </div>

            <div className="signup-withs">
                <button>
                    <img src="src/assets/icons_google.png" alt="google" />
                    Signup with Google
                </button>
                <button>
                    <img src="src/assets/icons_apple.png" alt="google" />
                    Signup with Apple ID
                </button>
            </div>

            <button id="OTP">Generate OTP 
                <img src="src/assets/arrow.png" alt="" />
            </button>


        </div>
    )
}

export default SignUp