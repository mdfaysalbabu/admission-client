import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaLinkedinIn } from "react-icons/fa";

const ResearchPapers = () => {
  const researchPapers = [
    {
      id: 1,
      title: "Research Paper 1",
      author: "John Doe",
      link: "https://example.com/paper1",
    },
    {
      id: 2,
      title: "Research Paper 2",
      author: "Jane Smith",
      link: "https://example.com/paper2",
    },
    {
      id: 3,
      title: "Research Paper 3",
      author: "Alex Johnson",
      link: "https://example.com/paper3",
    },
    // Add more research paper objects as needed
  ];
  return (
    <Fade direction="left">
      <div>
        <div className=" rounded-lg shadow-md p-4 mt-4 mb-4">
          <h2 className="text-3xl text-center text-orange-400  mb-4">
            Recommended Research Papers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchPapers.map((paper) => (
              <div
                key={paper.id}
                className="bg-gradient-to-br from-blue-500 to-pink-500 rounded-lg p-4 text-white flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold mb-2">{paper.title}</h3>
                  <p className="text-sm">by {paper.author}</p>
                </div>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mt-4 hover:underline"
                >
                  Read Paper <FaLinkedinIn className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ResearchPapers;
