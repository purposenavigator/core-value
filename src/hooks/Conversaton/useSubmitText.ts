import { postData } from '@/lib/api';
import {
  Payload,
  ResponseObject,
  UseSubmitTextReturn,
} from '@/types/Conversation';
import { useState } from 'react';

export function useSubmitText(): UseSubmitTextReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitText = async (
    payload: Payload,
    resetText: () => void,
  ): Promise<ResponseObject | void> => {
    setLoading(true);
    setError(null); // Reset error before making the request

    try {
      const result = await postData<ResponseObject>('/conversation', payload);
      resetText();
      return result;
    } catch (error: unknown) {
      setError((error as Error).message || 'An error occurred');
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  return { submitText, loading, error };
}
