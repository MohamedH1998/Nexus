import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



export default function Example() {
  return (
    <div className="w-full px-4 pt-16">
      <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-4 font-medium text-left rounded-xl bg-blue-lightest hover:bg-blue-light focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Where do you want your matches to be based?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-10 h-10 text-blue-dark`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="UK" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="US" />

                </FormGroup>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-4 font-medium text-left rounded-xl bg-blue-lightest hover:bg-blue-light focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What type of roles would you like to see?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-10 h-10 text-blue-dark`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 bg-blue-lightest">
                  asdasasd
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}