import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

function Like() {
  const [likedIcon, setLiked] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setLiked(!likedIcon);
          console.log("Liked:", likedIcon);
        }}
      >
        <AiFillHeart size={24} color={likedIcon ? "black" : "red"} />
      </button>
    </div>
  );
}
export default Like;
