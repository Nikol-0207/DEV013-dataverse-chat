import { getApiKey } from './apiKey.js';

export const communicateWithOpenAI = (messages) => {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getApiKey()}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            messages,
        })
    };

    return fetch('https://api.openai.com/v1/chat/completions', requestOptions)
        .then((response) => response.json());
}
