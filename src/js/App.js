// @flow

import * as React from 'react'
import Button from './components/Button'
import LogInButton from './components/LogInButton'

// Uncomment the two lines below as you build the components and are ready to test them.
export default () => (
    <div>
        {<Button primary>Hello world!</Button> }
        {<Button>Other button</Button>}
        { <LogInButton override='signup' isLoggedIn={false} /> }
    </div>
)