import { useForm } from "../../../hooks/useForm";

export const AddComment = ({ onCommentSubmit }) => {
  const { values, changeHandler, onSubmit } = useForm(
    {
      comment: "",
    },
    onCommentSubmit
  );

  return (
    <article className="create-comment">
    <label>Add new comment:</label>
    <form className="form" onSubmit={onSubmit}>
      <div className="form-group">
        <textarea className="form-control" name="comment" placeholder="Comment......" value={values.comment} onChange={changeHandler}></textarea>
        <button className="btn btn-success ml-2 align-self-center" type="submit">Add Comment</button>
      </div>
    </form>
  </article>
  
  );
};
