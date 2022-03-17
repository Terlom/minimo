import React, {useEffect} from "react";

const AddComment = ({currentUser, comments}) => {
    const [initials, setInitials] = React.useState();
    useEffect(()=>{
        if(!currentUser.photo){
            setInitials(currentUser.first_name.substr(0, 1)+
                currentUser.last_name.substr(0, 1))

        }
    })
    return(
        <div className="addComment">
            <div className={"profilePhoto defaultProfilePhoto currentUser"}>
                {
                    initials
                }
            </div>
            <input
                type="text"
                placeholder={"Join the discussion"}
            />
        </div>
    )
}
export default AddComment