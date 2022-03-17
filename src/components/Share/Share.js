const Share = () => {
    return(
        <div className="share">
            <span>Share</span>
            <div className="shareLink">
                <a href="https://www.facebook.com/" target={"_blank"}><i className="icon facebook light"></i></a>
                <a href="https://twitter.com/" target={"_blank"}><i className="icon twitter light"></i></a>
                <a href="https://plus.google.com/" target={"_blank"}><i className="icon google light"></i></a>
                <a href="https://www.tumblr.com/" target={"_blank"}><i className="icon tumblr light"></i></a>
                <a href="https://www.pinterest.com/" target={"_blank"}><i className="icon pinterest light"></i></a>
            </div>
        </div>
    )
}
export default Share