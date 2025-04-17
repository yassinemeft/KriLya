import axios from 'axios';
import { API_URL } from '../ApiConfig'; // Import the API URL from config


export const askGroq = async (userMessage) => {
  try {
    const response = await axios.post(`${API_URL}/groq-chat`, { message: userMessage });
    return response.data.choices?.[0]?.message?.content;
  } catch (error) {
    console.error('Error calling Laravel + GROQ:', error);
    return 'Failed to get response.';
  }
};
