import React, {useEffect} from "react";


const CommentBlock = ({comment}) => {

    const [initials, setInitials] = React.useState();
    useEffect(()=>{
        if(!comment.comment_creator.photo){
            setInitials(comment.comment_creator.first_name.substr(0, 1)+
                comment.comment_creator.last_name.substr(0, 1))

        }
    })

    return(
        <div className="commentBlock">
            <div
                 className={"profilePhoto defaultProfilePhoto"}
                 style={{backgroundImage: `url(${comment.comment_creator.photo})`}}>
                {
                    initials
                }
            </div>
            <div>
                <p className={"name"}>
                    <strong>{`${comment.comment_creator.first_name} ${comment.comment_creator.last_name}`}</strong>
                </p>
                <p className={"comment"}>
                    { comment.comment_text }
                </p>
                <button className={"reply"}>Reply</button>
            </div>
        </div>
    )
}
export default CommentBlock