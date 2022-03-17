import React from "react";
import CommentBlock from "../CommentBlock";
import profileImg from "../../imgs/profileImg.png"
import AddComment from "../AddComment";

const user = [
    {
        id: 0,
        last_name: 'Doe',
        first_name: 'John',
        photo: profileImg
    },
    {
        id: 1,
        last_name: 'Doe',
        first_name: 'Jane',
        photo: null
    }
]

let currentUser =
    {
    id: 0,
    last_name: 'Donald',
    first_name: 'John',
    photo: null
}
const Comments = () => {
    const[comments, setComments] = React.useState([
        {
            id:1,
            comment_creator: user[0],
            comment_text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque " +
                "laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n" +
                "architecto beatae vitae dicta sunt explicabo!"
        },
        {
            id:2,
            comment_creator: user[1],
            comment_text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque."
        }
    ])
    let qtyOfComments = comments.length;
    return(
        <div className="comments">
            <p className={"qtyOfComments"}>{qtyOfComments} comments</p>
            {
                comments.map(comment=>(<CommentBlock comment = {comment}/>))
            }
            <AddComment
                currentUser = {currentUser}
                comments = {comments}
            />
        </div>
    )
}
export default Comments