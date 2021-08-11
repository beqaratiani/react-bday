const Birthday = ({ img, name, age }) => {
  return (
    <div className='card'>
      <div className='cardLeft'>
        <img src={img} alt='' />
      </div>
      <div className='cardRight'>
        <h5>{name}</h5>
        <p>{`${age} years`}</p>
      </div>
    </div>
  )
}

export default Birthday
