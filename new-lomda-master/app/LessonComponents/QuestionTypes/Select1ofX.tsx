import React from 'react'
import { CloseSvg, LessonTopBarEmptyHeart, LessonTopBarHeart } from '../../Svgs';
import Link from 'next/link';

const ProgressBar = ({
  correctAnswerCount,
  totalCorrectAnswersNeeded,
  setQuitMessageShown,
  hearts,
}: {
  correctAnswerCount: number;
  totalCorrectAnswersNeeded: number;
  setQuitMessageShown: (isShown: boolean) => void;
  hearts: null | number;
}) => {
  return (
    <header className="flex items-center gap-4">
      {correctAnswerCount === 0 ? (
        <Link href="/learn" className="text-gray-400">
          <CloseSvg />
          <span className="sr-only">Exit lesson</span>
        </Link>
      ) : (
        <button
          className="text-gray-400"
          onClick={() => setQuitMessageShown(true)}
        >
          <CloseSvg />
          <span className="sr-only">Exit lesson</span>
        </button>
      )}
      <div
        className="h-4 grow rounded-full bg-gray-200"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={1}
        aria-valuenow={correctAnswerCount / totalCorrectAnswersNeeded}
      >
        <div
          className={
            "h-full rounded-full bg-green-500 transition-all duration-700 " +
            (correctAnswerCount > 0 ? "px-2 pt-1 " : "")
          }
          style={{
            width: `${(correctAnswerCount / totalCorrectAnswersNeeded) * 100}%`,
          }}
        >
          <div className="h-[5px] w-full rounded-full bg-green-400"></div>
        </div>
      </div>
      {hearts !== null &&
        [1, 2, 3].map((heart) => {
          if (heart <= hearts) {
            return <LessonTopBarHeart key={heart} />;
          }
          return <LessonTopBarEmptyHeart key={heart} />;
        })}
    </header>
  );
};

function Select1ofX() {

  const ProblemSelect1Of3 = ({
    problem,
    correctAnswerCount,
    totalCorrectAnswersNeeded,
    selectedAnswer,
    setSelectedAnswer,
    quitMessageShown,
    correctAnswerShown,
    setQuitMessageShown,
    isAnswerCorrect,
    onCheckAnswer,
    onFinish,
    onSkip,
    hearts,
  }: {
    problem: typeof lessonProblem1;
    correctAnswerCount: number;
    totalCorrectAnswersNeeded: number;
    selectedAnswer: number | null;
    setSelectedAnswer: React.Dispatch<React.SetStateAction<number | null>>;
    correctAnswerShown: boolean;
    quitMessageShown: boolean;
    setQuitMessageShown: React.Dispatch<React.SetStateAction<boolean>>;
    isAnswerCorrect: boolean;
    onCheckAnswer: () => void;
    onFinish: () => void;
    onSkip: () => void;
    hearts: number | null;
  }) => {
    const { question, answers, correctAnswer } = problem;

    return (
      <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
        <div className="flex grow flex-col items-center gap-5">
          <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
            <ProgressBar
              correctAnswerCount={correctAnswerCount}
              totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
              setQuitMessageShown={setQuitMessageShown}
              hearts={hearts}
            />
          </div>
          <section className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24 sm:px-5">
            <h1 className="self-start text-2xl font-bold sm:text-3xl">
              {question}
            </h1>
            <div
              className="grid grid-cols-2 gap-2 sm:grid-cols-3"
              role="radiogroup"
            >
              {answers.map((answer, i) => {
                return (
                  <div
                    key={i}
                    className={
                      i === selectedAnswer
                        ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                    }
                    role="radio"
                    aria-checked={i === selectedAnswer}
                    tabIndex={0}
                    onClick={() => setSelectedAnswer(i)}
                  >
                    {answer.icon}
                    <h2 className="text-center">{answer.name}</h2>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <CheckAnswer
          correctAnswer={answers[correctAnswer].name}
          correctAnswerShown={correctAnswerShown}
          isAnswerCorrect={isAnswerCorrect}
          isAnswerSelected={selectedAnswer !== null}
          onCheckAnswer={onCheckAnswer}
          onFinish={onFinish}
          onSkip={onSkip}
        />
        <QuitMessage
          quitMessageShown={quitMessageShown}
          setQuitMessageShown={setQuitMessageShown}
        />
      </div>
    )
  }

  export default Select1ofX
};