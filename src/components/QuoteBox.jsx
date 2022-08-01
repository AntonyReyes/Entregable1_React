import React from 'react'

const QuoteBox = ({ colors, quoteBox, randomAll }) => {

  const randomColor = {
    backgroundColor: colors,
    color: colors
  }

  const randomColorButton = {
    backgroundColor: colors,
    color: 'white'
  }

  return (
    <article>
      <div className='container__quote' >
        <header>
          <i class="fa-solid fa-quote-left quote-icon"></i>
          <div className='phrase'>
            <p className='phrase'>{quoteBox.quote}</p>
          </div>
        </header>
        <div className="card__quote">
          <p >{quoteBox.author}</p>
          <button style={randomColorButton} className='btn' onClick={randomAll}>&#62;</button>
        </div>
      </div>
    </article>
  )
}

export default QuoteBox