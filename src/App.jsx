import { useEffect, useRef, useState } from 'react'
import Job from './components/Job'

function App() {
  const [jobs, setJobs] = useState([])
  async function loadJobs() {
    const response = await fetch('http://localhost:3000/jobs')
    const result = await response.json()
    setJobs(result.jobs)
  }
  useEffect(() => {
    loadJobs()
  }, [])
  useEffect(() => {
    setTimeout(loadJobs, 60000)
    console.log(jobs)
    console.log(jobs.length)
  }, [jobs])

  return (
    <div className='h-screen w-screen flex flex-col justify-start py-20 items-center select-none overflow-x-hidden'>
      <div className='absolute top-6 right-6 bg-green-300 rounded-lg p-3 cursor-pointer' onClick={loadJobs}>
        refresh
      </div>
      <div className='w-[90%] border border-black rounded-md flex justify-center'>
        {jobs.length ? (
          <div className='flex w-full'>
            <div className='flex flex-col w-[50%] m-2'>
              {jobs.filter((j, index) => index % 2).map((j, index) => <Job
                title={j.title}
                body={j.body}
                link={j.link}
                price={j.price}
                time={j.time}
                timeAgo={j.timeAgo}
                key={index}
              />)}
            </div>
            <div className='flex flex-col w-[50%] m-2'>
              {jobs.filter((j, index) => !(index % 2)).map((j, index) => <Job
                title={j.title}
                body={j.body}
                link={j.link}
                price={j.price}
                time={j.time}
                timeAgo={j.timeAgo}
                key={index}
              />)}
            </div>
          </div>
        ) : (
          <div className='flex items-center h-20'>
            There is no jobs refresh to see more
          </div>
        )}
      </div>
    </div>
  )
}

export default App
