function Footer (){
    const style = {
        color: "white",
        textAlign: "center",
        fontSize: "9px",
        margin: "15% auto 2% auto",
        fontWeight: "normal"
    }
    return(
        <footer style={style}>
            <span>
                Copyright©2022 INSSAK &
                <a href="https://github.com/99mTc">&nbsp;Technetium&nbsp;</a>
                All Rights Reserved.
            </span>
        </footer>
    );
}

export default Footer;