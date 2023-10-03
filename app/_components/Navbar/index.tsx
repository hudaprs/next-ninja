// React
import { memo } from 'react'

// Next
import Link from 'next/link'
import Image from 'next/image'

// Images
import LogoDojo from '@/app/_assets/images/dojo-logo.png'

const Navbar = memo(() => {
	return (
		<nav>
			<Image
				src={LogoDojo}
				width={70}
				quality={100}
				placeholder='blur'
				alt='next-ninja'
			/>
			<h1>Dojo Helpdesk</h1>
			<Link href='/'>Dashboard</Link>
			<Link href='/tickets'>Tickets</Link>
		</nav>
	)
})

Navbar.displayName = 'Navbar'

export { Navbar }
