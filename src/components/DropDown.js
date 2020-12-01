import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const ocassions = [
  {
    key: 'Low to High',
    text: 'Low to High',
    value: 'Low to High',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'High to Low',
    text: 'High to Low',
    value: 'High to Low',
    image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' },
  }
]

const DropdownExampleSelection = () => (
  <Dropdown
    placeholder='Select Filter'
    search
    selection
    options={ocassions}
  />
)

export default DropdownExampleSelection