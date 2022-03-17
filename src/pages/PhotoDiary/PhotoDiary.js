import Comments from "../../components/Comments";
import Swiper from "../../components/Swiper";
import Post from "../../components/Post";
import ProfileInfo from "../../components/ProfileInfo";
import ConnectedWith from "../../components/ConnectedWith";
import SuggestedPosts from "../../components/SuggestedPosts";

const PhotoDiary = () => {

    return(
        <main>
            <div className="container">
                <Swiper/>
                <div className="content">
                   <Post/>
                    <ProfileInfo/>
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
export default PhotoDiary