import { Link, routes } from '@redwoodjs/router'

const IndexPage = () => {
  return (
    <>
      <h1>IndexPage</h1>
      <p>
        Find me in <code>./web/src/pages/IndexPage/IndexPage.js</code>
      </p>
      <p>
        My default route is named <code>index</code>, link to me with `
        <Link to={routes.index()}>Index</Link>`
      </p>
    </>
  )
}

export default IndexPage
