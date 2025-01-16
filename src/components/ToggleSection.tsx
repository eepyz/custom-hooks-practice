import useToggle from "../hooks/useToggle";

export function ToggleSection() {
  const { isToggled, toggle } = useToggle();

  return (
    <div>
      <button onClick={toggle}>{isToggled ? "HIDE" : "SHOW"}</button>
      {isToggled ? <div>This content is hidden! Spoiler!</div> : ""}
    </div>
  );
}
