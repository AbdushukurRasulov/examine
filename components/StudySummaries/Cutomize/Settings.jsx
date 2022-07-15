/* This example requires Tailwind CSS v2.0+ */

import Select from '@/components/Forms/Select'
import SwitchToggle from '@/components/Forms/SwitchToggle'

export default function Settings() {
  return (
    <>
      <form className="mt-3 space-y-7">
        <div className="flex ">
          <p className="max-w-xs">Show the same summary in multiple categories?</p>
          <SwitchToggle />
        </div>
        <p className="mt-5 text-sm text-gray-900">
          A summary may fit into multiple categories. ON: The summary will show under each category.
          OFF: The summary will appear only once.
        </p>

        <Select label="Default way to show summaries" />
        <Select label="Summaries font size" />
        <Select label="Do you wish to receive a monthly email when a new issue comes out?" />

        <div className="text-right">
          <button
            type="button"
            className="rounded-md bg-primary px-4 py-2 text-white hover:bg-examine-purple-400 hover:text-white"
          >
            Save Settings
          </button>
        </div>
      </form>
    </>
  )
}
