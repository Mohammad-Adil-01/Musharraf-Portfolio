import { useEffect } from "react";
import { useToggle } from "./Context/ToggleMode";
import Navigation from "./component/Navigation";
import Glass from "./component/commonComponent/Glass";

function App() {
  const { mode } = useToggle();

  useEffect(() => {
    if (mode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [mode]);

  return (
    <div className="min-h-screen bg-white dark:bg-black  transition-colors duration-300">
      <Navigation />
      <Glass />
    </div>
  );
}

export default App;