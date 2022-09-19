import useFetch from "../hooks/useFetch";
import BlogList from "../blogs/BlogList";
import { GET_BLOGS as GET_BLOGS_URL } from "../../constants/urls";

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch(GET_BLOGS_URL);

  return (
    <div>
      <h2>Home Page</h2>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
