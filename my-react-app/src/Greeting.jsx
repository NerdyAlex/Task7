/* eslint-disable react/prop-types */
import Proptypes from "prop-types"
function Usergreeting(props){
    const hello = <h2 className="hello">Welcome {props.username}</h2>;
    const login = <h2 className="login">Please Log In</h2>;

    return (props.isLoggedIn ? hello : login);

}
Usergreeting.proptypes = {
    isLoggedIn: Proptypes.bool,
    username: Proptypes.string,
}

Usergreeting.defaultProps = {
    username: "Guest",
}


export default Usergreeting
