import { PrismaClient } from '@prisma/client'
import { dumbData } from './dumb'

const db = new PrismaClient()

async function seed() {
  console.log('🌱 Seeding...')
  console.time(`🌱 Database has been seeded`)

  console.time('🧹 Cleaned up the database...')
  await db.job.deleteMany({ where: {} })
  console.timeEnd('🧹 Cleaned up the database...')

  console.time('👤 Create test jobs...')
  await Promise.all(
    Array.from({ length: dumbData.length }, async (_, idx) => {
      await db.job.create({ data: dumbData[idx]! })
    }),
  )
  console.timeEnd('👤 Create test jobs...')

  console.timeEnd(`🌱 Database has been seeded`)
}

seed()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
