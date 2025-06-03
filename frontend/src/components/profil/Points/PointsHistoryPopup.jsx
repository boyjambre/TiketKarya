import React from "react";

const PointsHistoryPopup = ({ onClose }) => {
  const historyData = Array.from({ length: 15 }, (_, i) => ({
    source: `Points Source ${i + 1}`,
    amount: `${(i + 1) * 10} pts`,
    time: `2025-06-${String(i + 1).padStart(2, "0")} 14:3${i % 6}`,
  }));

  return (
    <div className="fixed inset-0 bg-black/20 z-50 flex justify-center items-center px-4">
      <div className="bg-[#FCEDDA] rounded-xl max-w-5xl w-full max-h-[90vh] p-6 relative flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-black text-2xl font-light"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-[#2B2B2B] text-left mt-8 mb-2">Points History</h2>

        {/* Table Header */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-[#2B2B2B] text-base">
            <thead className="bg-[#FFDEB5] font-bold sticky top-0 z-10">
              <tr>
                <th className="py-3 px-4 border-b">Points Source</th>
                <th className="py-3 px-10 border-b">Amounts</th>
                <th className="py-3 px-10 border-b">Time</th>
              </tr>
            </thead>
          </table>
        </div>

        {/* Scrollable Table Body */}
        <div className="overflow-y-auto overflow-x-auto" style={{ maxHeight: "45vh" }}>
          <table className="w-full border-collapse text-[#2B2B2B] text-base">
            <tbody>
              {historyData.map((item, index) => (
                <tr key={index} className={index % 2 === 1 ? "bg-[#FFDEB5]" : ""}>
                  <td className="py-3 px-4 border-b">{item.source}</td>
                  <td className="py-3 px-16 border-b">{item.amount}</td>
                  <td className="py-3 px-[-8] border-b">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-6 text-[#2B2B2B] text-sm">
          <button className="text-[#bfbfbf]" disabled>
            ← Previous
          </button>
          <button className="bg-[#FF570C] text-white px-3 py-1 rounded">1</button>
          <button className="px-3 py-1">2</button>
          <button className="px-3 py-1">3</button>
          <span>...</span>
          <button className="px-3 py-1">67</button>
          <button className="px-3 py-1">68</button>
          <button className="flex items-center">Next →</button>
        </div>
      </div>
    </div>
  );
};

export default PointsHistoryPopup;
