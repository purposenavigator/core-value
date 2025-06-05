import { getData } from '@/lib/api';
import { Question } from '@/types/Questions';
import { useEffect, useState } from 'react';

const useFetchSingleQuestion = (topic: string) => {
  const [question, setQuestion] = useState<Question>({
    question_id: '',
    title: '',
    explanation: '',
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (topic === '') return;
    setLoading(true);
    getData<Question>(`/question/${topic}`)
      .then((response) => {
        setQuestion(response);
        setLoading(false);
        return response;
      })
      .catch((error) => {
        alert(error);
        setError(error.message);
        setLoading(false);
      });
  }, [topic]);

  return { question, loading, error };
};

export default useFetchSingleQuestion;
