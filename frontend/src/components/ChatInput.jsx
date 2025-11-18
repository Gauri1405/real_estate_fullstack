import React, {useState} from 'react'
export default function ChatInput({onSearch}){
  const [value,setValue] = useState('')
  return (<div className='mt-3'>
    <div className='input-group'>
      <input className='form-control' placeholder='e.g., Analyze Wakad' value={value} onChange={e=>setValue(e.target.value)}/>
      <button className='btn btn-primary' onClick={()=>{ if(value.trim()) { onSearch(value); setValue('') } }}>Send</button>
    </div>
  </div>)
}
