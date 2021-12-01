import { useState } from 'react'

export default function FoodBox(props) {
  const { food } = props
  const { btnClick } = props
  const [quantity, setQuantity] = useState(0)

  function handleQuant(event) {
    setQuantity(event.target.value)

  }

  return (
    <div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories} Cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input value={quantity} onChange={handleQuant} className="input" type="number" />
              </div>
              <div className="control">
                <button onClick={() => { btnClick(food, quantity) }} className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

