import { useForm } from '../../hooks/useForm';
import { usePostContext } from '../../contexts/PostContext';

export const CreatePost = () => {
  const {onCreatePostSubmit} = usePostContext();
  const { values, changeHandler, onSubmit } = useForm({
    title: '',
    imageUrl: '',
    description: '',
  }, onCreatePostSubmit);

  return (
    <section id="create-page" className="auth">
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="col-md-6">
          <form id="create" method="post" onSubmit={onSubmit}>
            <h1 className="text-center mb-4">Create Post</h1>

            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input value={values.title} onChange={changeHandler} type="text" id="title" name="title" className="form-control" placeholder="Enter game title..." />
            </div>

            <div className="form-group">
              <label htmlFor="game-img">Image:</label>
              <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" className="form-control" placeholder="Upload a photo..." />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="description">Description:</label>
              <textarea name="description" id="description" value={values.description} onChange={changeHandler} className="form-control" placeholder="What's on your mind..."></textarea>
            </div>

            <button className="btn btn-primary btn-block" type="submit" style={{backgroundColor: "#409932",}}>Create Post</button>
          </form>
        </div>
      </div>
    </section>
  );
};
