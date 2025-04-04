import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const data = [
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
  return (
    <div className="grid grid-cols-4 gap-4 m-10">
      <div>
        <h3 className="font-bold text-lg text-teal-700">Prompt ID</h3>
        {data.map((item) => (
          <p key={item.id} className="text-teal-900">
            {item.id}
          </p>
        ))}
      </div>
      <div>
        <h3 className="font-bold text-lg text-teal-700">Prompt</h3>
        {data.map((item) => (
          <p key={item.id} className="text-teal-900">
            {item.prompt}
          </p>
        ))}
      </div>
      <div>
        <h3 className="font-bold text-lg text-teal-700">Response</h3>
        {data.map((item) => (
          <p key={item.id} className="text-teal-900">
            {item.response}
          </p>
        ))}
      </div>
      <div>
        <h3 className="font-bold text-lg text-teal-700">Actions</h3>
        {data.map((item) => (
          <button
            key={item.id}
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 mt-2"
          >
            Edit
          </button>
        ))}
      </div>
    </div>
  );
}
