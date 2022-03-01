import Layout from '../components/layout'
import { DataProvider } from '../DataContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
    )
}

export default MyApp