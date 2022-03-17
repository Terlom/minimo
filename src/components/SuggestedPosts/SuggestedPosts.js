import img6 from "../../imgs/img6.png";
import img4 from "../../imgs/img4.png";
import img3 from "../../imgs/img3.png";

const SuggestedPosts = () => {

    return(
        <div className="suggestion">
            <div className="innerContainer">
                <h6 className={"sugTitle"}>You may also like</h6>
                <div className="suggestedPosts">
                    <div className={"suggestedPost"}>
                        <img src={img6} alt="Post cover img"/>
                        <h4>Cold winter days</h4>
                    </div>
                    <div className={"suggestedPost"}>
                        <img src={img4} alt="Post cover img"/>
                        <h4>A day exploring the Alps</h4>
                    </div>
                    <div className={"suggestedPost"}>
                        <img src={img3} alt="Post cover img"/>
                        <h4>American dream</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SuggestedPosts