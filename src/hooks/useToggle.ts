import { useState } from "react";

const useToggle = (): [boolean, () => void] => {
  const [isToggled, setIsToggled] = useState(false);

  function toggle() {
    setIsToggled((currentValue) => !currentValue);
  }

  return [isToggled, toggle];
};
export default useToggle;
