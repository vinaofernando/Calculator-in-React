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

  const result = [];

  const signal = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i].trim();
    const ehSinal = isNaN(item);

    if (ehSinal) {
      signal.push(item);
    } else {
      if (signal.length && ehPrioridade(signal[signal.length - 1])) {
        const a = result.pop();
        const operador = signal.pop();
        const b = item;
        result.push(operacao(a, operador, b));
      } else {
        result.push(Number(item));
      }
    }
  }

  while (signal.length) {
    const b = result.pop();
    const a = result.pop();
    const operador = signal.pop();
    result.push(operacao(a, operador, b));
  }
  console.log(result);

  return result[0];
}
