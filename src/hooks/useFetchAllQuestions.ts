import { getData } from '@/lib/api';
import { Question } from '@/types/Questions';
import { useEffect, useState } from 'react';

const useFetchAllQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getData<Question[]>('/questions')
      .then((response: Question[]) => {
        setQuestions(response);
        setLoading(false);
        return response;
      })
      .catch((error) => {
        alert(error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { questions, loading, error };
};

export default useFetchAllQuestions;
