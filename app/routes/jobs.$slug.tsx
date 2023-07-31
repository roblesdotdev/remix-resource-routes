import { useParams } from '@remix-run/react'

export default function JobDetail() {
  const { slug } = useParams()
  return (
    <div className="mx-auto flex h-screen max-w-xl flex-col gap-2 px-4 py-24">
      <h1>Job {slug}</h1>
    </div>
  )
}
