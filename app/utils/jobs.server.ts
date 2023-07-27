import { db } from './db.server'

export async function getJobs() {
  return db.job.findMany()
}
