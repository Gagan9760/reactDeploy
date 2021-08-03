import React from 'react'

const withTable = (Table) => {
    const NewComponent = (props) => {
        return <Table haha="haha" {...props} />
    }
    return NewComponent
}

export default withTable