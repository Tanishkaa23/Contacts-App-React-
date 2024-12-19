import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [fav, setfav] = useState(false)

  const [contacts, setContacts] = useState([])
  function addContact(){
    const newContact = [...contacts,{name,company,phone,fav:fav}]
    setContacts(newContact)
  }

  function formHandler(e){
    e.preventDefault()
    setCompany('')
    setName('')
    setPhone('')
    setfav(false)
  }

  function deleteHandler(id){
    const delContact=[...contacts]
    delContact.splice(id,1)
    setContacts(delContact)
  }

  return (
    <div className='min-h-screen p-7 bg-zinc-300 flex flex-col items-center gap-10'>
      <form className=' bg-white p-5 w-[30%] rounded-md shadow-md h-[435px]' onSubmit={(e)=>{
        formHandler(e)
      }}>
        <h1 className='text-2xl font-semibold mb-4 text-center'>Add Contact</h1>
        <div className='mb-4 mt-5'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>Name</label>
          <input type="text"  placeholder='Enter Name' className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md'
          value={name}
          onChange={(e)=>{
            setName(e.target.value)
          }}
          />
        </div>
        
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>Company</label>
          <input type="text" placeholder='Enter Company' className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md'
          value={company}
          onChange={(e)=>{
            setCompany(e.target.value)
          }}
          />
        </div>
        
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>Phone</label>
          <input type="text" placeholder='Enter phone number' className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md'
          value={phone}
          onChange={(e)=>{
            setPhone(e.target.value)
          }}
          />
        </div>
        <div className='flex items-center gap-2 mb-4'>
          <input type="checkbox"
           checked={fav}
           onChange={(e)=>{
            setfav(e.target.checked)
           }}
          /><h1 className='text-md'>Favorite</h1>
        </div>
        <button onClick={addContact} className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>Add Contact</button>
      </form>

      <div>
        <h1 className='text-2xl text-center font-semibold mb-4'>Contact List</h1>
      {contacts.map((elem,id)=>{
        return <div key={id} className='bg-white w-[400px] rounded-md shadow-md mt-3 p-4 card inline-block m-8'>
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-bold capitalize'>{elem.name}</h1>
            <button onClick={(id)=>{
              deleteHandler(id)
            }} className='px-2 py-0.5 bg-red-500 text-white text-sm rounded'> Delete </button>
          </div>
          <h3 className='text-xl font-medium text-gray-800 capitalize'>{elem.company}</h3>
          <h3 className='text-lg font-medium text-gray-700'>Phone: {elem.phone}</h3>
          {elem.fav && (<h3 className='text-lg font-medium text-green-500 '>Favorite</h3>)}
        </div>
      })}
      </div>
    </div>
  )
}

export default App