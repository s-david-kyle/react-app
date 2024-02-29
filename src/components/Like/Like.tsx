import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

function Like() {
  const [likedIcon, setLiked] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setLiked(!likedIcon);
        }}
      >
        <AiFillHeart size={24} color={likedIcon ? "black" : "red"} />
      </button>
    </div>
  );
}
export default Like;
