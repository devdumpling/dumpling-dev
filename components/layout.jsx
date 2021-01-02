import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

export default function Layout({ preview, introDone, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {preview && <Alert preview={preview} />}
        <main>{children}</main>
      </div>
      {introDone && <Footer />}
    </>
  )
}
