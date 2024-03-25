import React from "react";
import StyledComment from "../../styles/components/CommentSlider/Comment.styled";
import { CommentProps } from "./props";

const Comment: React.FC<CommentProps> = ({
  userName,
  status,
  userImg,
  comment,
}) => {
  return (
    <StyledComment>
      <p className="comment">{comment}</p>
      <div className="user">
        <img src={userImg.src} alt={userImg.alt} />
        <div className="user-info">
          <p className="name">{userName}</p>
          <p className="status">{status}</p>
        </div>
      </div>
    </StyledComment>
  );
};

export default Comment;
