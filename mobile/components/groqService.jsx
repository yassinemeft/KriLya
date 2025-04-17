import axios from 'axios';
// import { API_URL } from '@env' ;

const API_URL = 'http://192.168.000.105:8000/api/groq-chat'; // Replace with your Laravel API URL

export const askGroq = async (userMessage) => {
  try {
    const response = await axios.post(API_URL, { message: userMessage });
    return response.data.choices?.[0]?.message?.content;
  } catch (error) {
    console.error('Error calling Laravel + GROQ:', error);
    return 'Failed to get response.';
  }
};
