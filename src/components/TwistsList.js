import React from "react";
import TwistItem from "./TwistItem";

const TwistsList = ({ twistsList, error }) => {
  return (
    <div className="twists-list">
      {error !== "" ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        twistsList.map(twist => <TwistItem twist={twist} key={twist._id} />)
      )}
    </div>
  );
};

export default TwistsList;
