import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const ocassions = [
  {
    key: 'Birthday',
    text: 'Birthday',
    value: 'Birthday',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Anniversary',
    text: 'Anniversary',
    value: 'Anniversary',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Baby Shower',
    text: 'Baby Shower',
    value: 'Baby Shower',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' },
  }
]

const DropdownExampleSelection = () => (
  <Dropdown
    placeholder='Select Ocassion'
    search
    selection
    options={ocassions}
  />
)

export default DropdownExampleSelection