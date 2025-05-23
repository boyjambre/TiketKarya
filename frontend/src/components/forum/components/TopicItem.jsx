import React from "react";
import PropTypes from "prop-types";

const TopicItem = ({ topic, replies, author, isAlternate = false }) => {
  return (
    <div
      className={`py-4 px-6 md:px-10 border-b border-black ${
        isAlternate ? "bg-[#FFDEB5]" : "bg-[#FCEDDA]"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex-1 text-lg font-normal text-black">{topic}</div>
        <div className="flex items-center gap-8 min-w-[250px]">
          <div className="w-20 text-center text-lg text-black">{replies}</div>
          <div className="w-32 text-center truncate text-lg text-black">
            {author}
          </div>
        </div>
      </div>
    </div>
  );
};

TopicItem.propTypes = {
  topic: PropTypes.string.isRequired,
  replies: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  isAlternate: PropTypes.bool,
};

export default TopicItem;
