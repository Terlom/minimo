import profileCoverImg from "../../imgs/profileCoverImg.png";

const ProfileInfo = () =>{
    return(
        <div className={"profileInfo"}>
            <div className={"upperBlock-tablet"}>
                <img className={"profileCoverImg"} src={profileCoverImg} alt="Profile cover img"/>
                <div>
                    <h3>About me</h3>
                    <p className={"authorInfo"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris
                    </p>
                    <div className="profileSocial">
                        <a href="https://www.facebook.com/" target={"_blank"}><i className={"icon facebook follow"}></i></a>
                        <a href="https://www.instagram.com/" target={"_blank"}><i className={"icon instagram follow"}></i></a>
                        <a href="https://www.pinterest.com/" target={"_blank"}><i className={"icon pinterest follow"}></i></a>
                    </div>
                </div>
            </div>
            <div className="lowerBlock-tablet">
                <div className="topPosts">
                    <h6 className={"topPosts__title"}>Top post</h6>
                    <ul>
                        <li>
                            <h5>A day exploring the Alps</h5>
                            <span className={"topPosts__qtyOfComments"}>24 comments</span>
                        </li>
                        <li>
                            <h5>American dream</h5>
                            <span className={"topPosts__qtyOfComments"}>19 comments</span>
                        </li>
                        <li>
                            <h5>Cold winter days</h5>
                            <span className={"topPosts__qtyOfComments"}>15 comments</span>
                        </li>
                    </ul>
                </div>
                <div className={"bannerSpot"}>
                    <span className={"bannerSpot__width"}>250X250</span>
                    <span>Banner spot</span>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo