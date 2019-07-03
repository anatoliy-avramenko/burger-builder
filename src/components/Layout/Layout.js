import React from 'react'

import Aux from '../../hoc/_Aux/_Aux'

const layout = (props) => (
    <Aux>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
)

export default layout