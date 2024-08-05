import React from 'react'

const NotificationBar = () => {
  return (
    <div className="flex flex-row pl-4 py-2 gap-2 items-center border rounded-lg shadow overflow-hidden dark:bg-gray-900 dark:border-violet-400">
	<span className="flex-shrink-0 inline-flex mx-3 item-center justify-center leadi rounded-full dark:bg-violet-400 dark:text-gray-900">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8">
			<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
		</svg>
	</span>
	<div className="flex-1 p-2">
		<p className="text-sm dark:text-gray-100">Ad obcaecati eaque eum aut, similique perferendis, reprehenderit odit nulla aliquam ex nostrum repellat</p>
	</div>
	<button type="button" className="ml-6 p-2 dark:text-gray-400">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
			<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
		</svg>
	</button>
</div>
  )
}

export default NotificationBar