import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingDSG = ({serverData, pageContext}) => {
  console.warn(serverData)
  return (
    <Layout>
      <Seo title="Using DSG"/>
      <h1>Hello from a DSG Page</h1>
      <p>
        Build time: { pageContext.time }
      </p>
      <p>
        SSR time: { serverData.time }
      </p>
      <p>This page is not created until requested by a user.</p>
      <p>
        To learn more, head over to our{" "}
        <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/">
          documentation about Deferred Static Generation
        </a>
        .
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default UsingDSG

export async function getServerData() {
  return {
    status: 200, // The HTTP status code that should be returned
    props: { time: new Date().toLocaleTimeString() }, // Will be passed to the page component as "serverData" prop
    headers: {
      'Cache-Control': 'private, max-age=0, must-revalidate',
    }, // HTTP response headers for this page
  };
}