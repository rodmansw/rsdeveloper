import Layout from 'components/layout'
import SEO from 'components/seo'

export default function Thanks() {
  return (
    <Layout>
      <SEO title="Thank you" keywords="" />
      <h1 className="text-4xl text-blog-ternary">Thank you for subscribing</h1>
      <p>
        You are now confirmed. You can expect to receive emails as I create new
        content.
      </p>
    </Layout>
  )
}
