const Nav_icon = () => {
    const first = {
        color:'white',
        backgroundColor:'blue',
        borderRadius:'50%'
};
    const second = {color: 'white',
        backgroundColor: 'rgb(8, 193, 255)',
        borderRadius:'50%'
    };
    const last = {
        color: 'white',
        borderRadius:'50%',
        backgroundColor: 'rgb(255, 0, 212)'
    };
    return (
        <div className="nav-icons">
            <a href="/">
                <i className="fab fa-facebook" style={first}></i>
            </a>
            <a href="/">
                <i className="fab fa-twitter" style={second}></i>
            </a>
            <a href="/">
                <i className="fab fa-instagram" style={last}></i>
            </a>
        </div>
    );
}
export default Nav_icon;