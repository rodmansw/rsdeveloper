import { getSiteMetaData } from 'utils/helpers'
import Image from './image'

const { author, social } = getSiteMetaData()

export default function Bio() {
  return (
    <div className="mb-10">
      <div className="flex items-center mb-6">
        <Image
          className="flex-shrink-0 w-12 h-12 mb-0 mr-3 rounded-full"
          src={require('../content/assets/profile.jpg')}
          previewSrc={require('../content/assets/profile.jpg?lqip')}
          alt="Rodman Swanston"
        />
        <p className="mb-0 text-sm">
          Personal blog by{' '}
          <a
            className="text-blog-secondary underline"
            href={`https://twitter.com/${social.twitter}`}
          >
            {author.name}
          </a>
          . <br />
          {author.summary}
        </p>
      </div>
      <p className="text-sm">
        <a
          className="text-blog-secondary"
          href={`https://twitter.com/${social.twitter}`}
        >
          Twitter
        </a>
        {' - '}
        <a
          className="text-blog-secondary"
          href={`https://github.com/${social.github}`}
        >
          Github
        </a>
        {' - '}
        <a
          className="text-blog-secondary"
          href={`https://linkedin.com/in/${social.linkedin}`}
        >
          LinkedIn
        </a>
      </p>
    </div>
  )
}
