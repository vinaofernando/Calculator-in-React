function operacao(a, operador, b) {
  switch (operador) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
  }
}

function ehPrioridade(sinal) {
  return ["/", "*"].includes(sinal);
}

export function calcula(input) {
  const array = input.split(/(\+|\-|\*|\/)/);
  if (array[array.length - 1] === " ") {
    return;
  }

  const queue = [];
  const signal = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i].trim();
    const ehSinal = isNaN(item);

    if (ehSinal) {
      signal.push(item);
    } else {
      if (signal.length && ehPrioridade(signal[signal.length - 1])) {
        const a = queue.pop();
        const operador = signal.pop();
        const b = item;
        queue.push(operacao(a, operador, b));
      } else {
        queue.push(Number(item));
      }
    }
  }

  while (signal.length) {
    const b = queue.pop();
    const a = queue.pop();
    const operador = signal.pop();
    queue.push(operacao(a, operador, b));
  }

  return queue[0];
}
