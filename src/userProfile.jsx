import { useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });
  const arr = [
    "Олег",
    "Жора",
    "Ирина",
    "Стас",
    "Иван",
    "Игорь",
    "Николай",
    "Катя",
    "Никита",
    "Лена",
  ];
  return (
    <>
      <h1>
        Имя: {user.name}, Возраст: {user.age}, Активен:{" "}
        {user.isActive ? "Да" : "Нет"}
      </h1>
      <button
        className="button"
        onClick={() =>
          setUser((oldUser) => ({
            ...oldUser,
            name: arr[Math.floor(Math.random() * arr.length)],
          }))
        }
      >
        Сменить имя
      </button>
      <button
        className="button"
        onClick={() =>
          setUser((oldUser) => ({ ...oldUser, age: oldUser.age + 1 }))
        }
      >
        Увеличить возраст
      </button>
      <button
        className="button"
        onClick={() =>
          setUser((oldUser) => ({ ...oldUser, isActive: !oldUser.isActive }))
        }
      >
        Переключить активность
      </button>
    </>
  );
};

export default UserProfile;
