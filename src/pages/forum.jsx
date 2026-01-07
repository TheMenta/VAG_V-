/* const mockPosts = [
  {
    id: 1,
    title: "Első téma",
    content: "Ez egy teszt poszt",
    author: "Admin",
  }
]; // teszt oke

export default function Forum() {
  return (
    <div>
      {mockPosts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <span>{post.author}</span>
        </div>
      ))}
    </div>
  );
}
*/
import CreatePost from "../components/CreatePost";
import "../styles/forum.css";

export default function Forum() {
  return (
    <div>
      <CreatePost />
    </div>
  );
}

