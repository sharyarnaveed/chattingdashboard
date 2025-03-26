"use client"
import axios from 'axios'
import React, { useCallback, useRef, useState, useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  search: string
}

type queAns = {
  question: string,
  answeer: string
}

const Page = () => {
  const [QAarray, setQAarray] = useState<queAns[]>([]);
  const scrollSection = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, resetField } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = useCallback(async (data) => {
    const response = await axios.post("/api/bard", data);
    setQAarray(prev => [...prev, { question: data.search, answeer: response.data }]);

    if (response) {
      resetField('search');
    }
  }, []);

  // Scroll to the bottom when QAarray updates
  useEffect(() => {
    scrollSection.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [QAarray]);

  return (
    <>
      <form className="flex flex-col h-screen bg-gray-50 font-sans" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex-1 flex flex-col p-5 overflow-auto">
          {QAarray.map((item, index) => (
            <div key={index}>
              <div className="mine messages">
                <div className="message last">
                  {item.question}
                </div>
              </div>
              <div className="yours messages">
                <div className="message">
              <div ref={scrollSection}></div>
                  {item.answeer}
                </div>
              </div>
            </div>
          ))}
        
        </div>
        <div className="flex p-4 border-t border-black bg-white shadow-sm">
          <input
            type="text"
            placeholder="Type to search"
            className="flex-1 px-4 py-3 rounded-full border border-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            {...register('search')}
          />
          <button
            className="ml-2 px-5 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            type='submit'
          >
            Send
          </button>
        </div>
      </form>
    </>
  )
}

export default Page;
