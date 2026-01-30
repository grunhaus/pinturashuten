import type { CollectionConfig } from 'payload'

export const Locations: CollectionConfig = {
  slug: 'locations',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'state', type: 'text' },
    { name: 'region', type: 'select', options: ['capital', 'centro', 'occidente', 'oriente', 'andes', 'llanos'] },
    { name: 'priority', type: 'number', defaultValue: 5 },
    { name: 'active', type: 'checkbox', defaultValue: true },
  ],
}
