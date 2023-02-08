declare global {
  type ButtonTransitionEvent = TransitionEvent & {currentTarget: HTMLButtonElement, target: Element}
}

export {};
