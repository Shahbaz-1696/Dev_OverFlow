import Link from "next/link";
import { Button } from "@/components/ui/button";
import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/Filter";
import HomeFilters from "@/components/home/HomeFilters";
import { HomePageFilters } from "@/constants/filters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";

const questions = [
  {
    _id: 1,
    title: `How do ES6 module exports and imports work in JavaScript, and what are the key differences from CommonJS?`,
    tags: [
      { _id: 1, name: "next.js" },
      { _id: 2, name: "javascript" },
    ],
    author: {
      _id: 1,
      name: "Shahbaz",
      picture: "url_to_picture_1",
    },
    upVotes: 10000000,
    answers: [
      /* array of answers here */
    ],
    views: 50000,
    createdAt: new Date("2023-07-16"),
  },
  {
    _id: 2,
    title: `How to center a div?`,
    tags: [
      { _id: 1, name: "css" },
      { _id: 2, name: "html" },
    ],
    author: {
      _id: 2,
      name: "Shadab",
      picture: "url_to_picture_2",
    },
    upVotes: 10,
    answers: [
      /* array of answers here */
    ],
    views: 50,
    createdAt: new Date("2023-09-23"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          placeholder="Search Questions..."
          route="/"
          iconPosition="left"
          otherClasses="flex-1"
          imgSrc="/assets/icons/search.svg"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upVotes={question.upVotes}
              answers={question.answers}
              views={question.views}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from. Get
          involved!"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
