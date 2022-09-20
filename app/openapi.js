const OpenAI = require('openai-api');

const OPENAI_API_KEY = process.env.key;

const openai = new OpenAI(OPENAI_API_KEY);

  async function complete(msg) {
    return openai.complete({
      "prompt": msg,
      "engine":"text-ada-001",
      "max_tokens": 20,
      "temperature": 0.5,
      "top_p": 1,
      "n": 1,
      "stream": false,
      "logprobs": null,
      "stop": "."
    });
  };

module.exports = complete;