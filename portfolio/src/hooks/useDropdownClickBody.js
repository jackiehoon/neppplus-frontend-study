import { useEffect, useRef } from "react";

const useDropdownClickBody = (onClose) => {
  const element = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (!element.current?.contains(e.target)) onClose();
    };
    document.body.addEventListener("click", onClick);

    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, [onClose]);

  return element;
};

export default useDropdownClickBody;
