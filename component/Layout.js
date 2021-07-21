import Head from 'next/head'

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
      </Head>
      <div>
        {props.children}
      </div>
    </div>
  )
}