import { useEffect, useReducer } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { postServiceFactory } from "../../services/postService";
import * as commentService from "../../services/commentService";
import { useService } from "../../hooks/useService";
import { useAuthContext } from "../../contexts/AuthContext";

import { AddComment } from "./AddComment/AddComment";
import { postReducer } from "../../reducers/postReducer";
import { usePostContext } from "../../contexts/PostContext";

import "./PostDetails.css";

export const PostDetails = () => {
  const { postId } = useParams();
  const { userId, isAuthenticated, userEmail } = useAuthContext();
  const { deletePost } = usePostContext();
  const [post, dispatch] = useReducer(postReducer, {});
  const postService = useService(postServiceFactory);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      postService.getOne(postId),
      commentService.getAll(postId),
    ]).then(([postData, comments]) => {
      const postState = {
        ...postData,
        comments,
      };

      dispatch({ type: "POST_FETCH", payload: postState });
    });
  }, [postId]);

  const onCommentSubmit = async (values) => {  
    const response = await commentService.create(postId, values.comment);
  
    dispatch({
      type: "COMMENT_ADD",
      payload: response,
      userEmail,
    });
  };

  const isOwner = post._ownerId === userId;

  const onDeleteClick = async () => {
    // eslint-disable-next-line no-restricted-globals
    const result = confirm(`Are you sure you want to delete ${post.title}`);

    if (result) {
      await postService.delete(post._id);

      deletePost(post._id);

      navigate("/posts");
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card mt-5" style={{ width: "50rem", boxShadow: "0 8px 16px 0 #91c788" }}>
        <div className="card-header bg-light">
          <h1 className="text-center">Post Details</h1>
        </div>
        <div className="card-body">
          <div className="info-section">
            <div className="post-header">
              <img className="post-img" src={post.imageUrl} alt=""/>
              <h1 className="mt-3">{post.title}</h1>
              <p className="type">{post.description}</p>
            </div>
              {isOwner && (
                <div className="buttons mt-5">
                  <Link to={`/posts/${post._id}/edit`} className="btn btn-success me-3">
                    Edit
                  </Link>
                  <button className="btn btn-danger" onClick={onDeleteClick}>
                    Delete
                  </button>
                </div>
              )}

            <div className="details-comments mt-5">
            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} className="btn btn-success me-3" />}
              <h2>Comments:</h2>
              <ul>
                {post.comments &&
                  post.comments.map((x) => (
                    <li key={x._id} className="comment">
                      <p>{x.author.email}: {x.comment}</p>
                    </li>
                  ))}
              </ul>

              {!post.comments?.length && (
                <p className="no-comment">No comments.</p>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
