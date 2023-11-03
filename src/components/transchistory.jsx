import React from 'react'

const Transchistory = () => {
  return (
    <div>
        <h3>Transaction History</h3>
        <ul className='list'>
            <li className='plus'>
                project 1 Income
                <span>$1000</span>
                <button className='delete-btn'>X</button>
            </li>
            <li className='minus'>
                project 1 salaries
                <span>-$8888</span>
                <button className='delete-btn'>X</button>
            </li>
        </ul>
    </div>
  )
}

export default Transchistory