// import Counter from "./components/Counter";
// import { ToggleSection } from "./components/ToggleSection";
// import { WeatherSection } from "./components/WeatherSection";

// import { FeedbackForm } from "./components/FeedbackForm";
// import { RegistrationForm } from "./components/RegistrationForm";
// import useToggle from "./hooks/useToggle";

import { ThemeToggleButton } from "./components/ThemeToggleButton";
import { ThemeProvider } from "./context/useTheme";

function App() {
  // const [isToggled, toggle] = useToggle();

  // function renderForm() {
  //   if (isToggled) return <FeedbackForm />;
  //   return <RegistrationForm />;
  // }

  return (
    <ThemeProvider>
      <div>
        {/* <Counter /> */}
        {/* <ToggleSection /> */}
        {/* <WeatherSection /> */}
        {/* <div>
        <button
          onClick={() => {
            toggle();
          }}>
          Show {isToggled ? "Registration" : "Feedback"}
        </button>
        {renderForm()}
      </div> */}
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
