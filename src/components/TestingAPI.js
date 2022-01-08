import React from "react";

const TestApi = (props) => {
  const renderItem = props.data;

  return (
    <div>
      <h1>{renderItem}</h1>
    </div>
  );
};

export default TestApi;
