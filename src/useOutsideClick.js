import { useEffect, useRef } from "react";

const useOutsideClick = (callback) => {
  const ref = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      // console.log(ref.current.contains(event.target));
      callback();
    };
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  });
  return ref;
};

export { useOutsideClick };
