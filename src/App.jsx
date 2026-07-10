import "./App.css";
import UserProfile from "./userProfile";
import TaskList from "./taskList";
import GoodsBusket from "./goodsBusket";

function App() {
  return (
    <div className="app">
      <UserProfile />
      <TaskList />
      <GoodsBusket />
    </div>
  );
}

export default App;
