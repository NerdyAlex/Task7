/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from "prop-types"

function List(props){
    let itemList = props.item;
    let cati = props.cati
    // fruits.sort((a, b) => a.name.localeCompare(b.name))

    // let resultOflow = fruits.filter((result) => result.cal < 30)


    let listItems = itemList.map((item) => <li key={item.id}>
                                {item.name} has {item.cal} calaries
                                </li>);
    return (
        <>
            <h3 className="cati">{cati}</h3>
            <ol className="list">{listItems}</ol>
        </>
    )

}

List.propTypes = {
    cati: PropTypes.string,
    item: PropTypes.arrayOf(
        PropTypes.shape(
            {id: PropTypes.number,
            name: PropTypes.string,
            cal: PropTypes.number
            }          
        )
    )
}
List.defaultProps = {
    cati: "Section X",
    item: [],
}


export default List