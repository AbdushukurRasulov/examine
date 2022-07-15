import { SearchIcon } from '@heroicons/react/solid'

const SidebarSearch = () => {
  return (
    <div className="relative shadow-search">
      <input className="w-full" type="text" placeholder="Search this page" />
      <SearchIcon className="absolute top-1/2 right-2 h-5 w-5 -translate-y-1/2 text-gray-600" />
    </div>
  )
}

export default SidebarSearch
