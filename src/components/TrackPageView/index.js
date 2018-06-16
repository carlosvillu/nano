const _pipe = (a, b) => arg => b(a(arg))
const pipe = (...ops) => ops.reduce(_pipe)

const accountPage = pathname => pathname.replace(/\/account(\/\w+)/, '/account')

const TrackPageView = () => {
  window.ga('set', 'page', pipe(accountPage)(document.location.pathname))
  window.ga('send', 'pageview')
  return false
}

export default TrackPageView
