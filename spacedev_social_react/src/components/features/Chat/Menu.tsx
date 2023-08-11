import { Link } from "react-router-dom"
import { PATH } from "../../../constants/path"

export const Menu = () => {
	return (
		<div className=' dark:bg-slate-900 bg-gray-100 dark:border-gray-700 w-[70px] h-screen border-0 border-r border-solid border-gray-200 flex items-center flex-col'>
			<Link to={PATH.Home} className='w-[45px] h-[45px] rounded-xl flex items-center justify-center my-2'>
				<img src='https://spacedev.vn/images/LOGO-image-full.svg' className='w-[25px]' />
			</Link>
			<nav className='mt-10'>
				<ul className='flex flex-col'>
					<li className='dark:hover:bg-slate-700 cursor-pointer dark:text-white w-10 h-10 rounded-lg hover:bg-gray-200 flex items-center justify-center text-gray-600'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='icon icon-tabler icon-tabler-smart-home'
							width={24}
							height={24}
							viewBox='0 0 24 24'
							strokeWidth={2}
							stroke='currentColor'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path d='M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105' />
							<path d='M16 15c-2.21 1.333 -5.792 1.333 -8 0' />
						</svg>
					</li>
					<li className='dark:hover:bg-slate-700 cursor-pointer dark:text-white w-10 h-10 rounded-lg hover:bg-gray-200 flex items-center justify-center text-gray-600'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='icon icon-tabler icon-tabler-brand-hipchat'
							width={24}
							height={24}
							viewBox='0 0 24 24'
							strokeWidth={2}
							stroke='currentColor'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path d='M17.802 17.292s.077 -.055 .2 -.149c1.843 -1.425 3 -3.49 3 -5.789c0 -4.286 -4.03 -7.764 -9 -7.764c-4.97 0 -9 3.478 -9 7.764c0 4.288 4.03 7.646 9 7.646c.424 0 1.12 -.028 2.088 -.084c1.262 .82 3.104 1.493 4.716 1.493c.499 0 .734 -.41 .414 -.828c-.486 -.596 -1.156 -1.551 -1.416 -2.29z' />
							<path d='M7.5 13.5c2.5 2.5 6.5 2.5 9 0' />
						</svg>
					</li>
					<li className='dark:hover:bg-slate-700 cursor-pointer dark:text-white w-10 h-10 rounded-lg hover:bg-gray-200 flex items-center justify-center text-gray-600'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='icon icon-tabler icon-tabler-search'
							width={24}
							height={24}
							viewBox='0 0 24 24'
							strokeWidth={2}
							stroke='currentColor'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
							<path d='M21 21l-6 -6' />
						</svg>
					</li>
					<li className='dark:hover:bg-slate-700 cursor-pointer dark:text-white w-10 h-10 rounded-lg hover:bg-gray-200 flex items-center justify-center text-gray-600'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='icon icon-tabler icon-tabler-chart-bar'
							width={24}
							height={24}
							viewBox='0 0 24 24'
							strokeWidth={2}
							stroke='currentColor'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path d='M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
							<path d='M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
							<path d='M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
							<path d='M4 20l14 0' />
						</svg>
					</li>
					<li className='dark:hover:bg-slate-700 cursor-pointer dark:text-white w-10 h-10 rounded-lg hover:bg-gray-200 flex items-center justify-center text-gray-600'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='icon icon-tabler icon-tabler-at'
							width={24}
							height={24}
							viewBox='0 0 24 24'
							strokeWidth={2}
							stroke='currentColor'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path d='M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' />
							<path d='M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28' />
						</svg>
					</li>
				</ul>
			</nav>
		</div>
	)
}
