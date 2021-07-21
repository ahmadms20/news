import Layout from '../component/Layout'
import Header from '../component/Header'
import Content from '../component/Content'
import Footer from '../component/Footer'

export default function Home() {
  return (
    <Layout pageTitle="News">
      <Header judul="Breaking News"/>
      <Content/>
      <Footer/>
    </Layout>
  )
}
