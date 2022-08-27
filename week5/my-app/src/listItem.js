import updateItem from './updateItem.js'



export default function listItem(props){
    var count = 0

    
    return(
        props.data.map((e) => {
            count++

            return(
                <div className="entryDiv">
                    <div>
                        <h1>{e.item}</h1>
                        <h3>{e.desc}</h3>
                        <h3>{`Price per item ${e.ppu}`}</h3>
                    </div> 
                    
                    <button onClick = {() =>{
                        props.deleteItems(e._id)
                    }}>DELETE</button>
                    <updateItem
                        id = {e._id}
                        count = {count}
                        updateItems = {props.updateItems}
                    />
                </div>
            );
        })
    );
};