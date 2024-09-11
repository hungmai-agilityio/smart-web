import axios from 'axios';

/**
 * Function to get data with dynamic endpoint
 * @param {string} endPoint Enter the endpoint and proceed to get data according to that path
 * @returns {Promise<{data?:T[]; error?: any;}>}
 */
export const getData = async <T>(endPoint: string): Promise<{
  data?: T[];
  error?: any;
}> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/${endPoint}`,
    );

    return {
      data: response.data,
      error: null
    };
  } catch (error) {
    return { error };
  }
};
