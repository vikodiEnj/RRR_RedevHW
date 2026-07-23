import React from "react";
import { useParams, useNavigate } from "react-router";
import { topics } from "./data/topics";

const TopicPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const { id } = useParams();
  const topic = topics.find((item) => {
    return item.id === id;
  });

  if (!topic) {
    return (
      <div>
        <h1>Тема не найдена</h1>
        <button onClick={handleClick}>Назад</button>
      </div>
    );
  }
  return (
    <div className="page">
      <h1>{topic.title}</h1>
      <button onClick={handleClick}>Назад</button>
      <p className="description">{topic.description}</p>
      <pre>
        <code>{topic.code}</code>
      </pre>
      <ul className="pitfalls">
        {topic.pitfalls.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <a href={topic.docsLink} target="_blank" rel="noopener noreferrer">
        Ссылка на документацию
      </a>
    </div>
  );
};

export default TopicPage;
