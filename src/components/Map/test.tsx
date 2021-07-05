import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: 1,
      name: 'Natal',
      slug: 'natal',
      location: {
        latitude: 10,
        longitude: 10
      }
    }

    render(<Map places={[place]} />)
    expect(screen.getByTitle(/natal/i)).toBeInTheDocument()
  })
})
