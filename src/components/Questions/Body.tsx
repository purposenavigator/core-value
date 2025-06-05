'use client'; // Mark the component as a Client Component
import React from 'react';
import Sidebar from '../Sidebar';
import MainContent from './MainContent';
import useFetchAllQuestions from '../../hooks/useFetchAllQuestions';
import useStoreQuestion from '../../hooks/useStoreQuestion';
import { Question } from '@/types/Questions';

const Body = () => {
  const { questions } = useFetchAllQuestions();
  const { storeQuestionId, question } = useStoreQuestion(questions);
  const renderer = (question: Question) => (
    <li
      key={question.id}
      className="flex items-center w-full cursor-pointer"
      onClick={() => storeQuestionId(question.id)}
    >
      <span className="text-red-500 pr-2">❓</span> {question.title}
    </li>
  );
  return (
    <div className="flex">
      <Sidebar
        title={'Pre-Made Questions'}
        items={questions}
        renderer={renderer}
      />
      <MainContent question={question} />
    </div>
  );
};

export default Body;
