/* eslint-disable no-undef */
import { communicateWithOpenAI } from "../lib/openAIApi.js";

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

global.localStorage = localStorageMock;

const jsonMock = {
  id: "chatcmpl-9BVBqKfkEDnVoRmn6blbMeny2sYg5",
  object: "chat.completion",
  created: 1712528530,
  model: "gpt-3.5-turbo-0125",
  choices: [
    {
      index: 0,
      message: {
        role: "assistant",
        content:
          "¡Hola! ¡Estoy aquí y listo para jugar contigo! ¿Quieres jugar a Light Tennis en la Color TV-Game? ¡Estoy emocionado de empezar!",
      },
      logprobs: null,
      finish_reason: "stop",
    },
  ],
  usage: {
    prompt_tokens: 173,
    completion_tokens: 39,
    total_tokens: 212,
  },
  system_fingerprint: "fp_b28b39ffa8",
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(jsonMock),
  })
);

describe("Función communicateWithOpenAI", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("debería devolver la respuesta de la API", async () => {
    const messages = "Hola, ¿Cómo estás?";
    const response = await communicateWithOpenAI(messages);

    expect(response).toEqual(jsonMock);
  });

  it("debería llamar a la función getApiKey", async () => {
    const messages = "Hola, ¿Cómo estás?";
    await communicateWithOpenAI(messages);
  });
});
