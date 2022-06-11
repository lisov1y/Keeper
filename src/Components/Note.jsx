
export default function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className='note'>
      <div className='note-text'>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
      <button className='delete' onClick={handleClick}>X</button>
    </div>
  )
}
