import { useState } from "react";
import "../styles/forum.css";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim().length < 5) {
      setError("A cím legalább 5 karakter legyen.");
      return;
    }

    if (content.trim().length < 10) {
      setError("A tartalom legalább 10 karakter legyen.");
      return;
    }

    setError("");

    const newPost = {
      title,
      content,
    };

    // ide jön majd az API
    console.log("Create post:", newPost);

    setTitle("");
    setContent("");
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <h2>Új téma</h2>

      {error && <p className="error">{error}</p>}

      <input
        type="text"
        placeholder="Cím"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Tartalom..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">Közzététel</button>
    </form>
  );
}
