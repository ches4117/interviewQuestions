import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [list, setList] = useState([
    { num: 0 },
    { num: 0 },
    { num: 0 },
    { num: 0 }
  ]);

  return (
    <div className="App">
      {list.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() =>
              setList(
                [...list].map((data, index2) => {
                  if (index === index2) {
                    return {
                      num: data.num + 1
                    };
                  } else {
                    return data;
                  }
                })
              )
            }
          >
            row{index + 1}
          </div>
        );
      })}

      <div>
        {list.map((item, index) => {
          if (item.num % 2) {
            return <span key={`click${index}`}>row{index + 1}</span>;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
