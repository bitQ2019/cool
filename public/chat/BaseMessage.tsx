import React from 'react'
class BaseMessageStruct {
    type: string
    text: string
    user: string
    constructor(text, user = 'default') {
        this.type = 'base-type'
        this.text = text
        this.user = user
    }
}

function BaseMesageRender ({ message, key }) {
    return {
        <div key={key}>
        {message.text}</div>
    }
}


class BaseMessage  {

}
