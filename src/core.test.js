import { calcula } from "./core";

describe("Calculator - Core", () => {
  it("deveria fazer soma simples: 1 + 1", () => {
    // dado
    const input = "1 + 1";

    // quanto
    const resultado = calcula(input);

    //
    expect(resultado).toEqual(2);
  });

  it("deveria fazer soma simples, sem : 1+              1", () => {
    // dado
    const input = "1 +                                               1";

    // quanto
    const resultado = calcula(input);

    //
    expect(resultado).toEqual(2);
  });

  it("deveria priorizar : 1 + 2 * 4", () => {
    // dado
    const input = "1 + 2 * 4";

    // quanto
    const resultado = calcula(input);

    // entao
    expect(resultado).toEqual(9);
  });

  it("deveria priorizar divisao: 2 * 4 / 8", () => {
    // dado
    const input = "2 * 4 / 8";

    // quanto
    const resultado = calcula(input);

    // entao
    expect(resultado).toEqual(1);
  });

  it("deveria priorizar divisao: 2 * 4 / 8 + 1", () => {
    // dado
    const input = "2 * 4 / 8 + 1";

    // quanto
    const resultado = calcula(input);

    // entao
    expect(resultado).toEqual(2);
  });

  it("deveria priorizar divisao: 2 * 4 + 1 / 8 + 1", () => {
    // dado
    const input = "2 * 4 + 1 / 8 + 1";

    // quanto
    const resultado = calcula(input);

    // entao
    expect(resultado).toEqual(9.125);
  });
});
