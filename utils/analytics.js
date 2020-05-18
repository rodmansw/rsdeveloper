import ReactGA from 'react-ga'

ReactGA.initialize(process.env.NEXT_PUBLIC_ANALYTICS_ID)

export function trackEvent(action, category, options = {}) {
  ReactGA.event({
    action,
    category,
    ...options
  })
}

export function trackPage(page) {
  const pageView = page || window.location.pathname + window.location.search
  ReactGA.pageview(pageView)
}
