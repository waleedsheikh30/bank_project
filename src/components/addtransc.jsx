import React, { useState } from 'react'

const Addtransc = () => {
    const [desc , setDesc] = useState();
    const [transAmount , setTransAmount] = useState();

  return (
    <div>
        <h3>Add New Transaction</h3>
        <form>
            <div className='form-control'>
                <label htmlFor="description">Description</label>
                <input type="text" id='description' placeholder='Details of Transc' value={desc}
                onChange={(e) => setDesc(e.target.value)} />
            </div>
            <div className='form-control'>
                <label htmlFor="transamount">Transc Amount</label>
                <input type="text" id='transamount' placeholder='Amount of Transc' value={transAmount}
                onChange={(e) => setTransAmount(e.target.value)} />
            </div>
            <button className='btn'>Add Transc</button>
        </form>
    </div>
  )
}

export default Addtransc