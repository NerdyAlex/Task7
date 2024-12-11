import image from "/src/assets/cat.webp"

function Profilepic(){
let vanish = (event) => {event.target.hidden = true}

    return(
        <>
            <h1>Click to Vanish</h1>
            <img onClick={(e) => vanish(e)} src={image} />
        </>
    );

}
export default Profilepic