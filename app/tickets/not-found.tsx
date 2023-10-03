import Link from 'next/link'

export default function NotFound() {
	return (
		<main className='text-center'>
			<h2 className='text-3xl'>We break the wall here.</h2>
			<p>We could not find the page you were looking for.</p>
			<p>
				Go to all <Link href='/tickets'>tickets</Link>.
			</p>
		</main>
	)
}
