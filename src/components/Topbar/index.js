import React from 'react'

import Link from 'react-router/lib/Link'

const Topbar = () => {
  return (
    <div className="Topbar">
      <Link className="Topbar-link" to="/">
        <img
          onLoad={() => window.__perf && window.performance.mark('img:visible')}
          className="Topbar-logo"
          src="https://svg-loaders.surge.sh/LogoOriginalVector.svg"
        />
      </Link>
    </div>
  )
}

export default Topbar
