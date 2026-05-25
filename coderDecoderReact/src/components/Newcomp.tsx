interface NewcompProps{
    text: string;
    onBtnClick: (value: string) => void;
}
const Newcomp = (props:NewcompProps) => {
    return <button onClick={() => props.onBtnClick(props.text)}>{props.text}</button>
}
export default Newcomp;