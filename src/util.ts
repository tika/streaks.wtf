import gradients from "./gradients.json";

type Gradient = {
  name: string;
  colors: string[];
};

export function getGradient(x: string): Gradient {
  let total = 0;

  for (const letter of x.split("")) {
    total += letter.charCodeAt(0);
  }

  return gradients[
    Math.floor(parseFloat(`0.${total.toFixed(0)}`) * gradients.length)
  ];
}
