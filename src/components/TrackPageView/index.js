const TrackPageView = () => {
  window.ga('set', 'page', document.location.pathname)
  window.ga('send', 'pageview')
  return false
}

export default TrackPageView
