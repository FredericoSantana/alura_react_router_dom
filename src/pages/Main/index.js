import styles from './Main.module.css';
import Banner from "components/Banner";
import posts from 'json/posts.json';
import Post from "../../components/Post";

const Main = () => {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post}/>
        </li>
      ))}
    </ul>
  );
};

export default Main;