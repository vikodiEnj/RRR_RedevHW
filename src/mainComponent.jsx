import { useState, useEffect } from "react";
import DogsGallery from "./dogsGallery";

const MainComponent = () => {
  const [count, setCount] = useState(0);
  const [dogCount, setDogCount] = useState(3);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchDogs = () => {
    setIsLoading(true);
    fetch(`https://dog.ceo/api/breeds/image/random/${dogCount}`, {})
      .then((res) => res.json())
      .then((data) => {
        setImages(data.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  const handleUpdate = () => {
    fetchDogs();
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h1>Галерея собак</h1>
      <p>Картинки обновлены {count} раз(а)</p>
      <div className="actives">
        <span>Показать</span>
        <input
          min={1}
          max={50}
          type="number"
          value={dogCount}
          onChange={(e) => setDogCount(e.target.value)}
        />
        <button onClick={handleUpdate}>Обновить</button>
      </div>
      {isLoading ? <p>Загрузка...</p> : <DogsGallery images={images} />}
    </div>
  );
};

export default MainComponent;
