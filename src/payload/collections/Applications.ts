import type { CollectionConfig } from 'payload'

export const Applications: CollectionConfig = {
  slug: 'applications',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'industry',
      type: 'relationship',
      relationTo: 'industries',
      required: true,
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'longDescription',
      type: 'textarea',
    },
    {
      name: 'benefits',
      type: 'textarea',
      admin: {
        description: 'One benefit per line',
      },
    },
    {
      name: 'specifications',
      type: 'textarea',
      admin: {
        description: 'One specification per line (format: Label: Value)',
      },
    },
    {
      name: 'recommendedProducts',
      type: 'textarea',
      admin: {
        description: 'One product per line',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
