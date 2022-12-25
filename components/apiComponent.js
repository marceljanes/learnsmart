import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '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'

const ApiComponent = () => {
  const [response, setResponse] = useState('');

  const askAssistant = async (query) => {
    try {
      const res = await axios.post('https://api.openai.com/v1/questions', {
        prompt: query,
        model: 'text-davinci-002',
        max_tokens: 256,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
      });
      setResponse(res.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={() => askAssistant('What is the weather like today?')}>Ask Assistant</button>
      <p>{response}</p>
    </div>
  );
};

export default ApiComponent