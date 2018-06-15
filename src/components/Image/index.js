import React from 'react'

export default props => (
  <img
    onLoad={() => window.__perf && window.performance.mark('img:visible')}
    className="Image"
    {...props}
  />
)
