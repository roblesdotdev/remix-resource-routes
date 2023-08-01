import { db } from './db.server'

export async function getJobs() {
  return db.job.findMany()
}

export async function searchJobs(query: string) {
  if (query.length === 0) return []
  // await new Promise(res => setTimeout(res, Math.random() * 1000))
  return db.job.findMany({
    where: {
      OR: [
        {
          title: {
            contains: query,
          },
        },
        {
          location: {
            contains: query,
          },
        },
        {
          tags: {
            some: {
              name: { contains: query },
            },
          },
        },
      ],
    },
    select: {
      slug: true,
      title: true,
    },
    take: 10,
  })
}

export function getJobBySlug(slug: string) {
  return db.job.findUnique({ where: { slug }, include: { tags: true } })
}
