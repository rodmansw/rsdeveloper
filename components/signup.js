export default function Signup() {
  return (
    <div className="p-4 mt-8 rounded-md bg-blog-bg-secondary">
      <h2 className="text-2xl text-blog-ternary font-black">
        Subscribe to the Newsletter
      </h2>
      <p className="mt-2 max-w-2xl">
        Subscribe to get my latest content by email.
      </p>
      <form
        className="mt-6"
        method="POST"
        action={`https://app.convertkit.com/forms/${process.env.NEXT_PUBLIC_BLOG_FORM_ID}/subscriptions`}
      >
        <div
          data-element="fields"
          className="flex flex-wrap justify-between md:px-6 px-0"
        >
          <input
            required
            type="text"
            name="fields[first_name]"
            aria-label="Your first name"
            placeholder="Your first name"
            className="w-full md:w-auto px-4 py-3 mb-4 md:mb-0 leading-6 appearance-none border border-blog-ternary shadow-none bg-white rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blog-primary"
          />
          <input
            required
            type="email"
            name="email_address"
            aria-label="Your email address"
            placeholder="Your email"
            className="w-full md:w-auto px-4 py-3 leading-6 appearance-none border border-blog-ternary shadow-none bg-white rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blog-primary"
          />
          <button
            data-element="submit"
            className="mt-4 h-auto w-full border border-transparent px-6 py-3 leading-6 font-semibold leading-snug bg-indigo-700 text-white rounded-md shadow-md focus:bg-indigo-700 focus:outline-none focus:border-blog-secondary transition ease-in-out duration-150 hover:bg-indigo-600"
          >
            Subscribe
          </button>
        </div>
      </form>
      <p className="mt-2 max-w-2xl">
        I won’t send you spam. <br />
        Unsubscribe at any time.
      </p>
    </div>
  )
}
