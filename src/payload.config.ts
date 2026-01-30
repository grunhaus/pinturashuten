import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './payload/collections/Users'
import { Media } from './payload/collections/Media'
import { Industries } from './payload/collections/Industries'
import { Locations } from './payload/collections/Locations'
import { Colors } from './payload/collections/Colors'
import { FAQs } from './payload/collections/FAQs'
import { Testimonials } from './payload/collections/Testimonials'
import { Articles } from './payload/collections/Articles'
import { Applications } from './payload/collections/Applications'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Industries,
    Locations,
    Colors,
    FAQs,
    Testimonials,
    Articles,
    Applications,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key-here-min-32-chars',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./database.db',
    },
  }),
  sharp,
})
