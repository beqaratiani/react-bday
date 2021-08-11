const Clear = ({ clearMethod }) => {
  return (
    <div className='btnContainer'>
      <button onClick={clearMethod} className='btn'>
        Clear All
      </button>
    </div>
  )
}

export default Clear
