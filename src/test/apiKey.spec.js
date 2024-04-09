import { getApiKey, setApiKey } from "../lib/apiKey.js";
import { randomUUID } from "crypto";

const localStorageMock = (() => {
  let store = {};

  return {
    getItem: (key) => store[key],
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();

// eslint-disable-next-line no-undef
global.localStorage = localStorageMock;

describe("Funciones de API Key", () => {
  afterEach(() => {
    localStorage.clear();
  });

  test("setApiKey almacena la clave correctamente", () => {
    const apiKey = randomUUID();
    setApiKey(apiKey);
    expect(localStorage.getItem("apikey")).toBe(apiKey);
  });

  test("getApiKey devuelve la clave almacenada", () => {
    const apiKey = randomUUID();
    localStorage.setItem("apikey", apiKey);
    expect(getApiKey()).toBe(apiKey);
  });

  test("getApiKey devuelve null si no hay clave almacenada", () => {
    expect(getApiKey()).toBeNull();
  });

  test("setApiKey sobrescribe la clave existente", () => {
    const apiKey1 = randomUUID();
    const apiKey2 = randomUUID();

    setApiKey(apiKey1);
    setApiKey(apiKey2);

    expect(localStorage.getItem("apikey")).toBe(apiKey2);
  });

  test("setApiKey almacena la clave como una cadena", () => {
    const apiKey = randomUUID();

    setApiKey(apiKey);
    const storedValue = localStorage.getItem("apikey");

    expect(typeof storedValue).toBe("string");
    expect(storedValue).toBe(apiKey);
  });

  test("setApiKey almacena una clave vacía", () => {
    const apiKey = "";

    setApiKey(apiKey);
    expect(localStorage.getItem("apikey")).toBe(apiKey);
  });

  test("setApiKey almacena la clave si es un número", () => {
    const apiKey = 12345;

    setApiKey(apiKey);
    expect(localStorage.getItem("apikey")).toBe("12345");
  });

  test("setApiKey almacena la clave si es un booleano", () => {
    const apiKey = true;

    setApiKey(apiKey);
    expect(localStorage.getItem("apikey")).toBe("true");
  });

  test("setApiKey almacena la clave si es un objeto", () => {
    const apiKey = { key: "value" };

    setApiKey(apiKey);
    expect(localStorage.getItem("apikey")).toBe("[object Object]");
  });

  test("setApiKey almacena la clave si es undefined", () => {
    setApiKey(undefined);
    expect(localStorage.getItem("apikey")).toBe("undefined");
  });

  test("setApiKey almacena la clave si es una función", () => {
    const apiKey = () => {};

    setApiKey(apiKey);
    expect(localStorage.getItem("apikey")).toBe(apiKey.toString());
  });

  test("setApiKey almacena la clave si es un valor largo", () => {
    const apiKey = "a".repeat(1000);

    setApiKey(apiKey);
    expect(localStorage.getItem("apikey")).toBe(apiKey);
  });

  test("setApiKey almacena la clave si es un valor vacío", () => {
    const apiKey = "";

    setApiKey(apiKey);
    expect(localStorage.getItem("apikey")).toBe(apiKey);
  });
});
