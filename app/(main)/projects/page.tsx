import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'

const title = '我的作品'
const description =
  '12岁的时候开始在网吧上传我的第一部视频,虽然观看不多,但也算是让我找到了一个除了现实以外另一个得到认可途径,所以我喜欢用视频来表达情绪,现在我早已经认识到了自己是一个普通人,很难通过我的视频作品打动人,所以我开始向人分享经验,这样会有被需要的感觉'
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          我的作品
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          12岁那年，我在网吧上传了我的第一部视频，虽然观看量不多，但它让我找到了<strong>一个除了现实生活外的认可途径</strong>。从那时起，我喜欢用视频来表达情绪。现在，我意识到了自己是个<strong>普通人</strong>，想要通过视频作品打动别人并不容易。所以后来，我开始更多地分享<strong>经验</strong>，因为这样会让我重新感到<strong>被需要、被认可</strong>。
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Projects />
      </div>
    </Container>
  )
}

export const revalidate = 3600
