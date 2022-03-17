
const Footer = () => {

    return(
        <footer>
            <div className="container">
                <div className="documents">
                    <a href="#">Terms and conditions</a>
                    <a href="#">Privacy</a>
                </div>
                <div className="socials">
                    <span>Follow</span>
                    <div className={"socialsLink"}>
                        <a href="https://www.facebook.com/" target={"_blank"}><i className={"icon facebook"}></i></a>
                        <a href="https://twitter.com/" target={"_blank"}><i className={"icon twitter"}></i></a>
                        <a href="https://www.instagram.com/" target={"_blank"}><i className={"icon instagram"}></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer