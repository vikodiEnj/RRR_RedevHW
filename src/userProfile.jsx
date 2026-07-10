import { useState } from "react";
import UserInfo from "./userInfo";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });
  const [counter, setCounter] = useState(0);
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
    <div className="card user-profile">
      <UserInfo user={user} />
      <button
        className="button"
        onClick={() => setCounter((oldCouner) => oldCouner + 1)}
      >
        Кликов: {counter}
      </button>
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
    </div>
  );
};

export default UserProfile;
