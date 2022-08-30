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

    // const body = {
    //   name,
    //   email,
    //   password,
    //   profile_picture: profilePicture,
    //   city,
    // };

    // const data = await postUser(body);

    // if (data.status === 200) {
    //   // navigate(`/${data.response.slug}`);
    // } else {
    //   setErrors(data.response);
    // }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <Input
          type="password"
          placeholder="Password"
          label="Password"
          id="password"
          value={title}
          handleChange={handleTitleChange}
        />

        <Input
          type="url"
          placeholder="Profile picture"
          label="Profile picture"
          id="profile_picture"
          value={author}
          handleChange={handleAuthorChange}
        />
      </form>
    </section>
  );
};

export default CreateArticle;
