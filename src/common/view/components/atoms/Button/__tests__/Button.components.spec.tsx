import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '..'
import { ButtonStyleTwClassMapping } from '../constant'

describe('Button Component Test', () => {

  const { primary, secondary, tertiary, disabled } = ButtonStyleTwClassMapping;

  it('Renders a Primary Button Default', () => {
    const childrenRender = `click me! default button`
    const { asFragment } = render(<Button>{childrenRender}</Button>)
    // See if render children correct
    expect(asFragment().textContent).toMatch(childrenRender)
    // See if have primary button styles 
    expect(asFragment().querySelector('button')?.className).toMatch(primary)

    expect(asFragment()).toMatchSnapshot();
  })

  it('Renders a Primary Button with props', () => {
    const childrenRender = `click me! primary button`
    const { asFragment } = render(<Button buttonStyle='primary'>{childrenRender}</Button>)
    // See if render children correct
    expect(asFragment().textContent).toMatch(childrenRender)
    // See if have primary button styles 
    expect(asFragment().querySelector('button')?.className).toMatch(primary)

    expect(asFragment()).toMatchSnapshot();
  })

  it('Renders a Secondary Button', () => {
    const childrenRender = `click me! secondary button`
    const { asFragment } = render(<Button buttonStyle='secondary'>{childrenRender}</Button>)
    // See if render children correct
    expect(asFragment().textContent).toMatch(childrenRender)
    // See if have secondary button styles 
    expect(asFragment().querySelector('button')?.className).toMatch(secondary)

    expect(asFragment()).toMatchSnapshot();
  })

  it('Renders a Tertiary Button', () => {
    const childrenRender = `click me! tertiary button`
    const { asFragment } = render(<Button buttonStyle='tertiary'>{childrenRender}</Button>)
    // See if render children correct
    expect(asFragment().textContent).toMatch(childrenRender)
    // See if have tertiary button styles 
    expect(asFragment().querySelector('button')?.className).toMatch(tertiary)

    expect(asFragment()).toMatchSnapshot();
  })

  it('Renders a Disabled Button', () => {
    const childrenRender = `disabled button`
    const { asFragment } = render(<Button disabled>{childrenRender}</Button>)
    // See if render children correct
    expect(asFragment().textContent).toMatch(childrenRender)
    // See if have disabled button styles 
    expect(asFragment().querySelector('button')?.className).toMatch(disabled)
    expect(asFragment()).toMatchSnapshot();
  })

})