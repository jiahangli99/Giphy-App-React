
function Button (props) {
    const handleClick = () => {
        props.getGif();
    }
    return(
        <div>
            <button onClick={handleClick}>Make API Call </button>
        </div>
    )
}
export default Button