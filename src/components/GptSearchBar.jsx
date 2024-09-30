import React from "react"

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder="What is your taste today?"
          className="p-4 m-4 col-span-9"
        />
        <button className="py-2 m-4 px-5 col-span-3 bg-red-700 text-white rounded-lg">
          Search
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
