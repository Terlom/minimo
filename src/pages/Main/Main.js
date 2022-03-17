import img1 from "../../imgs/img1.png"
import img2 from "../../imgs/img2.png"
import img3 from "../../imgs/img3.png"
import img4 from "../../imgs/img4.png"
import img5 from "../../imgs/img5.png"
import img6 from "../../imgs/img6.png"
import BlogPreview from "../../components/BlogPreview";
import Swiper from "../../components/Swiper";
const Main = () => {
    return(
        <main>
            <div className="container">
                <Swiper/>
            </div>
                <div className="innerContainer">
                    <div className="post">
                        <h6 className={"topic"}>Photodiary</h6>
                        <h2>The perfect weekend getaway </h2>
                        <p className={"textOfPost"}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                            error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                            illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
                            et dolore magnam aliquam quaerat voluptatem.
                        </p>
                        <button>Leave a comment</button>
                    </div>
                    <div className="collectionOfBlogs">
                        <BlogPreview
                            src = {img1}
                            topic = {"Lifestyle"}
                            articleHeading = {"More than just a music festival"}
                            articleText = {"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do " +
                            "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," +
                            " quis nostrud exercitation ullamco laboris"}
                        />
                        <BlogPreview
                            src = {img2}
                            topic = {"Lifestyle"}
                            articleHeading = {"Life tastes better with coffee"}
                            articleText = {"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do " +
                            "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," +
                            " quis nostrud exercitation ullamco laboris"}
                        />
                        <BlogPreview
                            src = {img3}
                            topic = {"Photodiary"}
                            articleHeading = {"American Dream"}
                            articleText = {"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do " +
                            "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," +
                            " quis nostrud exercitation ullamco laboris"}
                        />
                        <BlogPreview
                            src = {img4}
                            topic = {"Photodiary"}
                            articleHeading = {"A day exploring the Alps"}
                            articleText = {"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do " +
                            "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," +
                            " quis nostrud exercitation ullamco laboris"}
                        />
                    </div>
                </div>
                <div className="newsSubscription">
                            <h2>Sign up for our newsletter!</h2>
                            <form className="textField" method={"post"}>
                                <input type="email" placeholder={"Enter a valid email address"}/>
                                <button className={"sendEmail"}><i className={"icon send"}></i></button>
                            </form>
                        </div>
                <div className="innerContainer">
                    <div className="collectionOfBlogs">
                            <BlogPreview
                                src = {img5}
                                topic = {"Lifestyle"}
                                articleHeading = {"Top 10 song for running"}
                                articleText = {"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do " +
                                "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," +
                                " quis nostrud exercitation ullamco laboris"}
                            />
                            <BlogPreview
                                src = {img6}
                                topic = {"Lifestyle"}
                                articleHeading = {"Cold winter days"}
                                articleText = {"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do" +
                                " eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
                                "quis nostrud exercitation ullamco laboris"}
                            />

                    </div>
                </div>
                <button className={"loadMore"}>Load more</button>
        </main>
    )
}
export default Main