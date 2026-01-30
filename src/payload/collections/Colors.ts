import type { CollectionConfig } from 'payload'

export const Colors: CollectionConfig = {
  slug: 'colors',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: 'code', type: 'text', required: true, unique: true },
    { name: 'name', type: 'text', required: true },
    { name: 'hex', type: 'text', required: true },
    { name: 'category', type: 'select', options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    { name: 'availability', type: 'select', options: ['immediate', '48h'], defaultValue: 'immediate' },
  ],
}
