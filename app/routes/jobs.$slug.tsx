import { useParams } from '@remix-run/react'

export default function JobDetail() {
  const { slug } = useParams()
  return (
    <div>
      <h1>Job {slug}</h1>
    </div>
  )
}
