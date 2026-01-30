import type { CollectionConfig } from 'payload'

export const Industries: CollectionConfig = {
  slug: 'industries',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'shortDescription', type: 'textarea', required: true },
    { name: 'description', type: 'richText' },
    { name: 'icon', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'benefits', type: 'textarea' },
    { name: 'useCases', type: 'textarea' },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
}
