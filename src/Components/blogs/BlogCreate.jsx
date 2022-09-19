import { useState } from "react";
import { useHistory } from "react-router-dom";
import { CREATE_BLOG as CREATE_BLOG_URL } from "../../constants/urls";
import { HEADER, API_METHODS } from "../../constants/general";
import { HOME } from "../../constants/path";

const BlogCreate = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsLoading(true);

    fetch(CREATE_BLOG_URL, {
      method: API_METHODS.POST,
      headers: HEADER,
      body: JSON.stringify(blog),
    }).then(() => {
      setIsLoading(false);
      // history.go(-1);
      history.push(HOME);
    });
  };

  return (
    <div>
      <p>Add a new Blog</p>
      <div className="container">
        <div className="mx-auto bg-light p-3">
          <form className="" action="" method="post" onSubmit={handleSubmit}>
            <div className="input-group my-2">
              <span className="input-group-text bg-primary">
                <i className="fas fa-text-height text-white"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="input-group my-3">
              <span className="input-group-text bg-primary">
                <i className="fas fa-file text-white"></i>
              </span>
              <textarea
                className="form-control"
                type="text"
                placeholder="Blog Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
              />
            </div>

            <div className="input-group my-3">
              <span className="input-group-text bg-primary">
                <i className="fas fa-user text-white"></i>
              </span>
              <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              >
                <option value="Ali">Ali</option>
                <option value="Ahmad">Ahmad</option>
              </select>
            </div>
            {!isLoading && (
              <div className="input-group my-3">
                <button className="btn btn-primary btn-sm">Add Blog</button>
              </div>
            )}
            {isLoading && (
              <div className="input-group my-3">
                <button className="btn btn-primary btn-sm">
                  Adding Blog...
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogCreate;
