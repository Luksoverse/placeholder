import Link from 'next/link'

export default function Home() {
  return (
    <main className="content">
      <h1 className="title">Work in Progress</h1>
      <p className="description">
        We are launching a new Luksoverse website later this year.
      </p>
      <Link href="/contribute" className="button-contribute">
        Read here how to contribute
      </Link>
      <p className="description">
        The old website will be accessible at{' '}
        <Link href="https://archive.luksoverse.io" className="pink-link">
          archive.luksoverse.io
        </Link>
      </p>
    </main>
  )
}
