"use client";

export default function () {
  return (
    <>
      <input
        type="message"
        placeholder="type your message here"
        className="bg-blue-800 p-2 m-5 text-sm w-[300px]"
      />
      <input
        type="submit"
        className="bg-blue-800 p-2 m-5 text-sm cursor-pointer"
        onClick={() => {
          throw new Error("Whoa!!");
        }}
        value="Submit"
      />
    </>
  );
}
