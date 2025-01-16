// import Counter from "./components/Counter";
// import { ToggleSection } from "./components/ToggleSection";
// import { WeatherSection } from "./components/WeatherSection";

import { FeedbackForm } from "./components/FeedbackForm";
import { RegistrationForm } from "./components/RegistrationForm";
import useToggle from "./hooks/useToggle";

function App() {
  const [isToggled, toggle] = useToggle();

  function renderForm() {
    if (isToggled) return <FeedbackForm />;
    return <RegistrationForm />;
  }

  return (
    <div>
      {/* <Counter /> */}
      {/* <ToggleSection /> */}
      {/* <WeatherSection /> */}
      <div>
        <button
          onClick={() => {
            toggle();
          }}>
          Show {isToggled ? "Registration" : "Feedback"}
        </button>
        {renderForm()}
      </div>
    </div>
  );
}

export default App;
