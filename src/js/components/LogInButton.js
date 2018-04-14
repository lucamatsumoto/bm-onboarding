// @flow

import * as React from 'react'
import Button from './Button'

type statusType = 'login' | 'logout' | 'signup'

type requiredProps = {
    isLoggedIn: boolean,
    override?: statusType
}

let displayText = ''

function LogInButton(props: requiredProps): React.Element<*>{
    const selectMessage = (type: statusType) => {
        return{
            login: 'Logging you in...',
            logout: 'Logging you out...',
            signup: 'signing up...'
        }[type]
    } 

    const selectText = (type: statusType): string => {
        return{
            login: 'Login',
            logout: 'Logout',
            signup: 'Signup'
        }[type]
    }

    const getText = ():string => {
        let findText = ''
        if(props.override){
            findText= selectText(props.override)
            console.log(displayText)
        }
        else {
            let status = ''
            if(props.isLoggedIn){
                status = 'logout'
            }
            else {
                status = 'login'
            }
            findText = selectText(status);
        }
        return findText
    }

    const click = () => {
        let message = ''
        if(props.override){
            message = selectMessage(props.override)
        }
        else {
            let status = ''
            if(props.isLoggedIn){
                status = 'logout'
            }
            else {
                status = 'login'
            }
            message = selectMessage(status)
        }
        window.alert(message)
    }

    displayText = getText();
    
    return(
        <Button primary onClick={click}>
            {displayText}
        </Button>
    )
}
export default LogInButton






