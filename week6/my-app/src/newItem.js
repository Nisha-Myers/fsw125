export default function newItem(props){


    const resetInput = ()=> {
        document.querySelector("#item").value = ""
        document.querySelector("#desc").value = ""
        document.querySelector("#ppi").value = ""
    };


    return(
       <div id="newItemInputs">
            <div>
                <input type="text" id="item" placeholder="Please enter your chosen item"></input>
            </div>

            <div>
                <input type="text" id="desc" placeholder="Please enter your chosen description"></input>
            </div>

            <div>
                <input type="text" id="ppi" placeholder="Please enter price per item"></input>   
            </div>

            <button onClick = { () => {
                props.newListedItems()
                resetInput()
            }}>Submit your Input
            </button>
        </div>
    );

};