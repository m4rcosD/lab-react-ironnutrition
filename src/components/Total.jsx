import React from 'react'

function Total(props) {

    const { checkoutData } = props

    const total = checkoutData.reduce((sum, elem) => {
        return sum + (elem.quantity * elem.calories)
    }, 0)

    return (
        <div>
            <h1>Total</h1>
            {
                checkoutData.map((elem) => {
                    const { name, quantity, calories } = elem
                    return (
                        <div>
                            {name} x {quantity} = {calories * calories}
                        </div>
                    )
                })
            }
            <h1>Final Total is: {Math.round(total)}</h1>
            <div class="column">
                <Total checkoutData={checkoutData} />
            </div>
        </div>
    )
}

export default Total