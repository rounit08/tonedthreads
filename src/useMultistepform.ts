import { ReactElement, useState } from "react";

interface SelectedOptions {
  gender: string | null;
  skinTone: string | null;
  bodyShape: string | null;
}

export default function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  //
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    gender: null,
    skinTone: null,
    bodyShape: null,
  });

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }
  function updateSelectedOptions(options: Partial<SelectedOptions>) {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      ...options,
    }));
  }
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    goTo,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    next,
    back,
    selectedOptions,
    updateSelectedOptions,
    steps,
  };
}
