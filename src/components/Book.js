const Book = ({id, title, category}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  )
}

export default Book;
