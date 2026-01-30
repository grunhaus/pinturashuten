import { getPayload } from 'payload'
import config from '@payload-config'

export async function getPayloadClient() {
  return getPayload({ config })
}

export async function getIndustries() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'industries',
    sort: 'order',
    limit: 100,
  })
  return docs
}

export async function getIndustryBySlug(slug: string) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'industries',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  return docs[0] || null
}

export async function getLocations() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'locations',
    where: { active: { equals: true } },
    sort: '-priority',
    limit: 100,
  })
  return docs
}

export async function getLocationBySlug(slug: string) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'locations',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  return docs[0] || null
}

export async function getColors() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'colors',
    sort: 'code',
    limit: 500,
  })
  return docs
}

export async function getColorByCode(code: string) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'colors',
    where: { code: { equals: code.toUpperCase() } },
    limit: 1,
  })
  return docs[0] || null
}

export async function getFAQs(category?: string) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'faqs',
    where: category ? { category: { equals: category } } : {},
    sort: 'order',
    limit: 50,
  })
  return docs
}

export async function getTestimonials(featured?: boolean) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'testimonials',
    where: featured ? { featured: { equals: true } } : {},
    limit: 20,
  })
  return docs
}

export async function getArticles() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'articles',
    sort: '-publishedDate',
    limit: 50,
  })
  return docs
}

export async function getArticleBySlug(slug: string) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'articles',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  return docs[0] || null
}

export async function getApplicationsByIndustry(industryId: number | string) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'applications',
    where: { industry: { equals: industryId } },
    sort: 'order',
    limit: 100,
  })
  return docs
}

export async function getApplicationBySlug(slug: string) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'applications',
    where: { slug: { equals: slug } },
    depth: 2,
    limit: 1,
  })
  return docs[0] || null
}

export async function getAllApplications() {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'applications',
    depth: 2,
    sort: 'order',
    limit: 500,
  })
  return docs
}
