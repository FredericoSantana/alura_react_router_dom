import styles from './Main.module.css';
import Banner from "components/Banner";
import posts from 'json/posts.json';
import PostCard from "../../components/PostCard";

const Main = () => {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post}/>
        </li>
      ))}
    </ul>
  );
};

export default Main;