import Swiper from "../../components/Swiper";
import Comments from "../../components/Comments";
import postImg1 from "../../imgs/postImg1.png";
import postImg2 from "../../imgs/postImg2.png";
import postImg3 from "../../imgs/postImg3.png";
import Share from "../../components/Share";
import ConnectedWith from "../../components/ConnectedWith";
import SuggestedPosts from "../../components/SuggestedPosts";



const Lifestyle = () => {
    return(
        <main>
            <div className="container">
                <Swiper/>
            </div>
            <div className="innerContainer">
                <div className="post">
                    <h6 className={"topic"}>Photodiary</h6>
                    <h2>The perfect weekend getaway </h2>
                    <div className="textOfArticle">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum. <strong>Sed ut perspiciatis unde omnis iste natus
                        error sit voluptatem accusantium doloremque laudantium,</strong> totam rem aperiam, eaque ipsa quae ab
                        illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
                        et dolore magnam aliquam quaerat voluptatem.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>
                    </div>
                    <img className={"postImg"} src={postImg1} alt="post img"/>
                    <img className={"postImg"} src={postImg2} alt="post img"/>
                    <img className={"postImg"} src={postImg3} alt="post img"/>
                    <div className="textOfPost">
                    <em>
                        “Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta sunt explicabo.”
                    </em>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. <strong>Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</strong>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                        voluptatem.
                    </p>
                </div>
                    <Share/>
                </div>
            </div>
            <SuggestedPosts/>
            <div className="innerContainer">
                <Comments/>
                <ConnectedWith/>
            </div>
        </main>
    )
}
export default Lifestyle