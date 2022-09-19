import { Link } from "react-router-dom";
import { BLOGS_GET } from "../../constants/path";

const BlogList = ({ blogs, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="bg-light" key={blog.id}>
          <Link className="text-decoration-none" to={BLOGS_GET + blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
