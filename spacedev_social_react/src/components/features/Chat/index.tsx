
import React from 'react'
import { Menu } from './Menu'
import { ListUser } from './ListUser'
import { Chat } from './Chat'
export const ChatPage = () => {
	return (
		<div className='flex bg-white dark:bg-slate-950'>
			<Menu />
			<ListUser />
			<Chat />
			<div className='dark:border-slate-700  dark:text-white h-screen flex flex-col w-[350px] border-0 border-l border-solid border-gray-300'>
				<div className=' dark:border-gray-700 h-14 flex items-center p-2 border-0 border-b border-solid border-gray-300'>
					<span className='text-xl font-semibold'>Contact Details</span>
					<span className='dark:hover:bg-slate-700 inline-flex w-8 h-8 hover:bg-gray-100 rounded-lg items-center justify-center ml-auto cursor-pointer'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='icon icon-tabler icon-tabler-square-rounded-minus'
							width={17}
							height={17}
							viewBox='0 0 24 24'
							strokeWidth={2}
							stroke='currentColor'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />
							<path d='M9 12h6' />
							<path d='M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z' />
						</svg>
					</span>
				</div>
				<div className='flex-1 overflow-auto'>
					<div className='border dark:border-gray-700 border-0 border-b border-solid border-gray-300 p-3'>
						<div className='relative'>
							<div className='rounded-xl overflow-hidden'>
								<img src='https://unsplash.it/500/500' />
							</div>
							<div className='absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-[rgba(0,0,0,0.5)]'>
								<div className='flex flex-col absolute bottom-4 left-4'>
									<div className='font-semibold text-white text-xs'>Grace Norton</div>
									<div className='flex gap-1 items-center text-xs text-white'>
										<div className='bg-green-500 rounded-full h-2 w-2'></div> Online
									</div>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-2 mt-3'>
							<div>
								<div className='font-bold text-xs'>ID</div>
								<div className='text-gray-600 dark:text-gray-300 text-xs'>#3781150448</div>
							</div>
							<div>
								<div className='font-bold text-xs'>Email</div>
								<div className='text-gray-600 dark:text-gray-300 text-xs'>sobce@baw.cr</div>
							</div>
							<div>
								<div className='font-bold text-xs'>Phone</div>
								<div className='text-gray-600 dark:text-gray-300 text-xs'>(920) 222-4433</div>
							</div>
							<a href='#' className='dark:text-purple-400 text-purple-800 text-xs font-bold'>
								Show more
							</a>
						</div>
					</div>
					<div className='dark:border-gray-700 p-3 border-0 border-b border-solid border-gray-300'>
						<div className='flex gap-2 justify-between'>
							<h3 className='text-xs font-semibold'>Media</h3>
							<a href='#' className='dark:text-purple-400 text-purple-800 text-xs font-bold'>
								Show more
							</a>
						</div>
						<div className='flex gap-2 mt-2'>
							<div className='flex-1 cursor-pointer'>
								<img src='https://unsplash.it/500/500' />
							</div>
							<div className='flex-1 cursor-pointer'>
								<img src='https://unsplash.it/400/400' />
							</div>
							<div className='flex-1 cursor-pointer relative'>
								<img src='https://unsplash.it/300/300' />
								<div className='font-bold text-white absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center'>
									+5
								</div>
							</div>
						</div>
					</div>
					<div className='p-3'>
						<h3 className='text-xs font-semibold'>Files</h3>
						<div className='flex flex-col gap-2 mt-2'>
							{[...new Array(3)].map((_, i) => (
								<React.Fragment key={i}>
									<div className='flex gap-2'>
										<span className='cursor-pointer w-9 h-9 bg-yellow-400 rounded-lg flex items-center justify-center text-white'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='icon icon-tabler icon-tabler-volume-2'
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
												<path d='M15 8a5 5 0 0 1 0 8' />
												<path d='M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5' />
											</svg>
										</span>
										<div className='flex-1'>
											<div className='text-xs font-smibold cursor-pointer'>Georgia-Hunt.mp3</div>
											<div className='text-xs text-gray-400 cursor-pointer'>17.3MB</div>
										</div>
										<span className='dark:hover:bg-slate-700 w-8 h-8 cursor-pointer hover:bg-gray-100 rounded-lg flex items-center justify-center'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='icon icon-tabler icon-tabler-download'
												width={17}
												height={17}
												viewBox='0 0 24 24'
												strokeWidth={2}
												stroke='currentColor'
												fill='none'
												strokeLinecap='round'
												strokeLinejoin='round'
											>
												<path stroke='none' d='M0 0h24v24H0z' fill='none' />
												<path d='M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2' />
												<path d='M7 11l5 5l5 -5' />
												<path d='M12 4l0 12' />
											</svg>
										</span>
									</div>
									<div className='flex gap-2'>
										<span className='cursor-pointer w-9 h-9 bg-blue-400 rounded-lg flex items-center justify-center text-white'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='icon icon-tabler icon-tabler-pdf'
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
												<path d='M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z' />
												<path d='M3 12h2a2 2 0 1 0 0 -4h-2v8' />
												<path d='M17 12h3' />
												<path d='M21 8h-4v8' />
											</svg>
										</span>
										<div className='flex-1'>
											<div className='text-xs font-smibold cursor-pointer'>Phillip-Underwood.pdf</div>
											<div className='text-xs text-gray-400 cursor-pointer'>21.1MB</div>
										</div>
										<span className='dark:hover:bg-slate-700 w-8 h-8 cursor-pointer hover:bg-gray-100 rounded-lg flex items-center justify-center'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='icon icon-tabler icon-tabler-download'
												width={17}
												height={17}
												viewBox='0 0 24 24'
												strokeWidth={2}
												stroke='currentColor'
												fill='none'
												strokeLinecap='round'
												strokeLinejoin='round'
											>
												<path stroke='none' d='M0 0h24v24H0z' fill='none' />
												<path d='M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2' />
												<path d='M7 11l5 5l5 -5' />
												<path d='M12 4l0 12' />
											</svg>
										</span>
									</div>
								</React.Fragment>
							))}
						</div>
						<a href='#' className='dark:text-purple-400 mt-2 inline-block text-purple-800 text-xs font-bold'>
							Show more
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChatPage
