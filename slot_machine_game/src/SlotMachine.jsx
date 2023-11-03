
const SlotMachine = (props) => {

let x = props.x;
let y = props.y;
let z = props.z ;
let res ="";

if (x === y && y === z) {
    res = "This is Matching";
} else {
    res = "Not Matching!";
}
    return (
        <>
            <div className="iconsResult">
                <div className="icons">
                    {x} {y} {z}
                </div>
                <div className="result">
                    {res}
                </div>
            </div>
            <hr />
        </>
    )
}

export default SlotMachine;