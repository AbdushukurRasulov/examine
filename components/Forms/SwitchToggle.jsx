import { useState } from 'react'
import { Switch } from '@headlessui/react'

const SwitchToggle = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? 'bg-examine-green-500' : 'bg-gray-300'
        } relative inline-flex h-6 w-10 items-center rounded-full transition-colors duration-200`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? 'translate-x-[18px]' : 'translate-x-0.5'
          } inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200`}
        />
      </Switch>
    </>
  )
}

export default SwitchToggle
