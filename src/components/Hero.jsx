import React from 'react'

export default function Hero() {
  return (
    <div>
      <div className="herosection">
        <div className="left">
          <div className="heading">
            <h1>Your feet Deserve the best</h1>
          </div>

          <div className="text">
            <p>your feet deserve best and we're here to help you with our shoes. Your feet deserve the best and we're here to help you with our shoes</p>
          </div>

          <div className="buttons">
            <button>Shop Now</button>
            <button id='second'>Category</button>
          </div>

          <div className="last">
            <h6>Also Available On</h6>
            <div className="icons">
              <img src="/assets/flipkart.png" alt="" />
              <img src="/assets/amazon.png" alt="" />
            </div>
          </div>
        </div>

        <div className="right">
          <img src="/assets/shoe_image.png" alt="" />
        </div>
      </div>
    </div>
  )
}
