import Layout from 'components/layout'
import SEO from 'components/seo'

export default function Unsubscribed() {
  return (
    <Layout>
      <SEO title="Confirm subscription" keywords="" />
      <h1 className="text-4xl text-blog-ternary">You've Been Unsubscribed</h1>
      <p>You will no longer receive emails about Resilient React Components.</p>
    </Layout>
  )
}
