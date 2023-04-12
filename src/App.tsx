import { useState } from "react";
import "./App.css";
import Nevera from "./components/Page/Page";
import { PageTexts } from "./utils/PageTexts";

let isExecuting = false;

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pageboxSize, setPageboxSize] = useState(100);
  const [firstPosition, setFirstPosition] = useState<number>(0);
  const [firstTranslatePosition, setFirstTranslatePosition] =
    useState<number>(400);

  let counter = 0;

  const onWheelChange = (event: any) => {
    if (!isExecuting) {
      setCurrentPage((prevPage) => {
        if (event.deltaY > 0) {
          if (prevPage == 3) {
            return 0;
          } else {
            return prevPage + 1;
          }
        } else {
          if (prevPage == 0) {
            return 3;
          } else {
            return prevPage - 1;
          }
        }
      });
      setIsTransitioning(true);
      isExecuting = true;
      setPageboxSize(60);

      const interval = setInterval(() => {
        setFirstPosition((prevPosition) => {
          counter++;

          if (counter == 90) {
            clearInterval(interval);
            setPageboxSize(100);
            isExecuting = false;
            setIsTransitioning(false);
          }

          if (event.deltaY > 0) {
            return prevPosition + 1;
          }
          return prevPosition - 1;
        });
      }, 8);
    }
  };

  return (
    <div className="pagebox" onWheel={onWheelChange}>
      <div
        className="pagebox__outer"
        style={{
          width: `${pageboxSize}%`,
          height: `${pageboxSize}%`,
        }}
      >
        <div
          className="pagebox__inner"
          style={{
            transform: `rotateX(${firstPosition}deg) translateZ(${
              isTransitioning ? 400 : 0
            }px)`,
            display: currentPage == 0 || isTransitioning ? "flex" : "none",
          }}
        >
          <Nevera {...PageTexts[0]} />
        </div>
        <div
          className="pagebox__inner"
          style={{
            transform: `rotateX(${firstPosition + 90}deg) translateZ(${
              isTransitioning ? 400 : 0
            }px)`,
            display: currentPage == 3 || isTransitioning ? "flex" : "none",
          }}
        >
          <Nevera {...PageTexts[3]} />
        </div>
        <div
          className="pagebox__inner"
          style={{
            transform: `rotateX(${firstPosition + 180}deg) translateZ(${
              isTransitioning ? 400 : 0
            }px)`,
            display: currentPage == 2 || isTransitioning ? "flex" : "none",
          }}
        >
          <Nevera {...PageTexts[2]} />
        </div>
        <div
          className="pagebox__inner"
          style={{
            transform: `rotateX(${firstPosition + 270}deg) translateZ(${
              isTransitioning ? 400 : 0
            }px)`,
            display: currentPage == 1 || isTransitioning ? "flex" : "none",
          }}
        >
          <Nevera {...PageTexts[1]} />
        </div>
      </div>
    </div>
  );
}

export default App;
