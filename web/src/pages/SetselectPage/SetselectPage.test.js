import { render } from '@redwoodjs/testing'

import SetselectPage from './SetselectPage'

describe('SetselectPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SetselectPage />)
    }).not.toThrow()
  })
})
