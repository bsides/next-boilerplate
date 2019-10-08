import { NextPageContext } from 'next'

// Testing query
// In the browser open http://localhost/products/1 or whatever number in the end
// This will be the value of the variable "pid"
// Which is the name of this file

interface ProductIdProps {
  pid: number
}

const productIdPage = (props: ProductIdProps) => {
  return (
    <>
      <h2>Product Detail Page</h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

productIdPage.getInitialProps = async (ctx: NextPageContext) => {
  return ctx.query
}

export default productIdPage
