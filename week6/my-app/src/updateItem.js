export default function updateItem(props){


    return(

        <div>
            <input type="text" id={`updateItem${props.count}`} placeholder="Enter the updated item"></input>
            <input type="text" id={`updateDesc${props.count}`} placeholder="Enter the updated description"></input>
            <input type="number" id={`updatePpi${props.count}`} placeholder="Enter the updated price per item"></input>
            
            
            <button onClick = {() => {

                props.updateItems(
                    props.id, 
                    document.querySelector(`#updateItem${props.count}`).value,
                    document.querySelector(`#updateDesc${props.count}`).value,
                    document.querySelector(`#updatePpi${props.count}`).value
                );
            }}>UPDATE</button>
        </div>
    );
};