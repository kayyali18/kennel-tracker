/**
 * Asynchronously loads the component for HomePage
 */
import React from 'react'
import loadable from 'loadable-components'
import styled from 'styled-components'

import Loading from 'components/Loading'

const LoadingWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default loadable(() => import('./index'), {
  LoadingComponent: () => (
    <LoadingWrapper>
      <Loading />
    </LoadingWrapper>
  ),
})
