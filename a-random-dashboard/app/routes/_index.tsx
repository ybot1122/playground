import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const initialData = [
  {
    id: 4,
    prompt: "Got any epic movie suggestions for a chill night?",
    response: "Inception",
  },
  {
    id: 5,
    prompt: "What binge-worthy TV show should I dive into?",
    response: "Breaking Bad",
  },
  {
    id: 6,
    prompt: "Know any comedy flicks that’ll have me in stitches?",
    response: "Superbad",
  },
  {
    id: 7,
    prompt: "What’s a family-friendly movie everyone will love?",
    response: "Finding Nemo",
  },
  {
    id: 8,
    prompt: "What’s a sci-fi movie that’ll blow my mind?",
    response: "Interstellar",
  },
  {
    id: 9,
    prompt: "Which TV series has characters I’ll never forget?",
    response: "The Sopranos",
  },
  {
    id: 10,
    prompt: "Can you suggest a romantic movie to tug at my heartstrings?",
    response: "The Notebook",
  },
  {
    id: 11,
    prompt: "What thriller movie will keep me on the edge of my seat?",
    response: "Gone Girl",
  },
  {
    id: 12,
    prompt: "What’s a TV show so good I’ll lose track of time?",
    response: "Stranger Things",
  },
];

export default function Index() {
  const [data, setData] = useState(initialData);
  const [revealedResponses, setRevealedResponses] = useState<
    Record<number, boolean>
  >({});
  const [loading, setLoading] = useState<Record<number, boolean>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEdit, setCurrentEdit] = useState<{
    id: number;
    prompt: string;
  } | null>(null);

  const handleReveal = (id: number) => {
    setLoading((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setLoading((prev) => ({ ...prev, [id]: false }));
      setRevealedResponses((prev) => ({ ...prev, [id]: true }));
    }, 2000);
  };

  const handleEdit = (id: number, prompt: string) => {
    setCurrentEdit({ id, prompt });
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (currentEdit) {
      setData((prevData) =>
        prevData.map((item) =>
          item.id === currentEdit.id
            ? { ...item, prompt: currentEdit.prompt }
            : item,
        ),
      );
      setIsModalOpen(false);
      setCurrentEdit(null);
      setRevealedResponses((prev) => ({ ...prev, [currentEdit.id]: false }));
    }
  };

  return (
    <div className="flex flex-col m-10">
      <div className="flex font-bold text-lg text-teal-700">
        <div className="w-1/12">Prompt ID</div>
        <div className="w-5/12">Prompt</div>
        <div className="w-5/12">Response</div>
        <div className="w-1/12">Actions</div>
      </div>
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`flex items-center mb-4 ${
            index % 2 === 0 ? "bg-gray-100" : "bg-white"
          }`}
          style={{ height: "100px" }}
        >
          <div className="w-1/12 text-teal-900 p-5">{item.id}</div>
          <div className="w-5/12 text-teal-900">{item.prompt}</div>
          <div className="w-5/12 text-teal-900">
            {revealedResponses[item.id] ? (
              item.response
            ) : loading[item.id] ? (
              <div className="text-teal-500">Loading...</div>
            ) : (
              <button
                className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
                onClick={() => handleReveal(item.id)}
              >
                Query the Chatbot
              </button>
            )}
          </div>
          <div className="w-1/12 p-5">
            <button
              className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 w-full"
              onClick={() => handleEdit(item.id, item.prompt)}
            >
              Edit
            </button>
          </div>
        </div>
      ))}

      {isModalOpen && currentEdit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">Edit Prompt</h2>
            <textarea
              className="w-full border border-gray-300 rounded p-2 mb-4"
              rows={4}
              value={currentEdit.prompt}
              onChange={(e) =>
                setCurrentEdit((prev) =>
                  prev ? { ...prev, prompt: e.target.value } : null,
                )
              }
            />
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-teal-500 text-white px-4 py-2 rounded"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
