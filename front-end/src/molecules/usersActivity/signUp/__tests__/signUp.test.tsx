import React from 'react'
import { render } from '@testing-library/react'
import { SignUp } from 'molecules/usersActivity/signUp/index'
import * as hook from 'molecules/usersActivity/signUp/hooks/useSignUp'
import { StoreProvider } from '../../utils/unitTest/storeProvider'

describe('<SignUp/>', () => {
  describe('when hook useSignUp is call', () => {
    let spyOnHook
    beforeAll(() => {
      spyOnHook = jest.spyOn(hook, 'useSignUp')
    })
    it('should correctly render functional component ', function () {
      const { baseElement } = render(
        <StoreProvider>
          <SignUp />
        </StoreProvider>
      )

      expect(baseElement).toBeDefined()
      expect(spyOnHook).toHaveBeenCalled()
      expect(baseElement).toMatchSnapshot()
    })
  })
})