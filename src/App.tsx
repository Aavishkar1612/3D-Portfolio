import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./app/router";
import Loader from "./components/ui/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const showDuration = 2200; // loader visible time
    const fadeDuration = 800;  // fade animation time

    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, showDuration);

    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, showDuration + fadeDuration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          opacity: isFading ? 0 : 1,
          transition: "opacity 0.8s ease-in-out",
        }}
      >
        <Loader />
      </div>
    );
  }

  return (
    <div className="page-fade">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;