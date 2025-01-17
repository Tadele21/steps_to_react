import { useState } from "react";
const messages = ["Learn React 👨‍💻", "Apply for jobs", "Invest your new income"];

export default function App() {
  return (
    <div>
      <Step />
      {/*<Step /> */}
    </div>
  );
}

function Step() {
  const [step, setStep] = useState(1);

  const [isOpen, setIsOpen] = useState(true);
  //const [test, setTest] = useState({ name: "Tadele" });

  function handlePrevious() {
    // alert("Previous");
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      //setStep((s) => s + 1);
    }

    //BAD PRACTICE
    //test.name = "Fred";

    //setTest({ name: " Fred" });
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevious}
              text="Previous"
            />
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevious}
              text="Previous"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, text }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
