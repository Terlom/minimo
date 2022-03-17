

const BlogPreview = (props) =>{

    return(
        <article className="blogPreview">
            <img src={props.src} alt="Post's cover img"/>
            <h6 className="topic">{props.topic}</h6>
            <h2>{props.articleHeading}</h2>
            <p>{props.articleText}</p>
        </article>
    )
}
export default BlogPreview