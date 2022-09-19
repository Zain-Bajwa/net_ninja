import { useParams, useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {
  GET_BLOG as GET_BLOG_URL,
  DELETE_BLOG as DELETE_BLOG_URL,
} from "../../constants/urls";
import { API_METHODS } from "../../constants/general";
import { HOME } from "../../constants/path";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isLoading } = useFetch(GET_BLOG_URL + id);
  const history = useHistory();

  const handleDeleteClick = () => {
    fetch(DELETE_BLOG_URL + blog.id, {
      method: API_METHODS.DELETE,
    }).then(() => {
      history.push(HOME);
    });
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button
            className="btn btn-primary btn-sm"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
