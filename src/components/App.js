import Header from "./header/Header";
import Loader from "./loader/Loader";
import PostList from "./post-list/PostList";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGetPhotosQuery, useGetPostsQuery } from "../redux/postsApi";

const App = () => {
  const posts = useGetPostsQuery();
  const photos = useGetPhotosQuery();

  return (
    <>
      <Header />
      <div className="app">
        <p>Watch new posts...</p>
        {photos.isLoading || posts.isLoading ? (
          <Loader />
        ) : (
          <PostList posts={posts.data} photos={photos.data} />
        )}
      </div>
    </>
  );
};

export default App;
