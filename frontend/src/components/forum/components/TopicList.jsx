import React from "react";
import TopicItem from "./TopicItem";

// Mock data for testing
const MOCK_TOPICS = [
  {
    id: 1,
    topic: "What should I bring to a batik workshop?",
    replies: 4,
    author: "Nabila Sari",
  },
  {
    id: 2,
    topic: "Show us what you made! Share your finished pieces here",
    replies: 21,
    author: "Andika Mahesa",
  },
  {
    id: 3,
    topic: "Looking for textile workshops happening this month",
    replies: 12,
    author: "Maya Rizky",
  },
  {
    id: 4,
    topic: "How long does it take to get your fired pottery back?",
    replies: 3,
    author: "Nanda Fikri",
  },
  {
    id: 5,
    topic: "Can I join a workshop even if I'm not artistic?",
    replies: 43,
    author: "Joko Rahman",
  },
];

const TopicList = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-[#FFDEB5] py-4 px-6 md:px-10 border-b border-black">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold text-black">Topic</div>
          <div className="flex items-center gap-8 min-w-[250px]">
            <div className="w-20 text-center text-lg font-bold text-black">
              Replies
            </div>
            <div className="w-32 text-center text-lg font-bold text-black">
              Author
            </div>
          </div>
        </div>
      </div>

      {/* Topics */}
      {MOCK_TOPICS.map((topic, index) => (
        <TopicItem
          key={topic.id}
          topic={topic.topic}
          replies={topic.replies}
          author={topic.author}
          isAlternate={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default TopicList;
