import React from "react";

function Tag({ data, setData }) {
  return (
    <div style={{ width: "40vw" }}>
      {data.map((item) => (
        <button
          style={{
            backgroundColor: "green",
            fontSize: "17px",
            color: "white",
            width: "135px",
            height: "40px",
            borderRadius: "20px",
            border: "none",
            margin: "10px",
            padding: "5px",
            cursor: "pointer",
            flexShrink: "0",
          }}
        >
          {item}{" "}
          <span
            style={{ paddingLeft: "30px", color: "#292929",}}
            onClick={() => {
              const updatedData = data.filter((tag) => tag !== item);
              setData(updatedData);
            }}
          >
            X
          </span>
        </button>
      ))}
    </div>
  );
}

export default Tag;
