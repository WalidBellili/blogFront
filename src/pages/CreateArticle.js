import Input from "../components/Input";
import { useState } from "react";

const CreateArticle = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [errors, setErrors] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      title,
      author,
    };
  };

  return (
    <section className="input-container">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="title"
          label="Title"
          id="title"
          value={title}
          handleChange={handleTitleChange}
          className='input'
        />

        <Input
          type="text"
          placeholder="Author"
          label="author"
          id="author"
          value={author}
          handleChange={handleAuthorChange}
          className='input'
        />
      </form>
    </section>
  );
};

export default CreateArticle;
