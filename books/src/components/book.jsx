import React from "react";
import { Button } from "reactstrap";

const Book = props => {
  let { handleDelete, handleEdit, book } = props;
  let { id, title, rating } = book;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{rating}</td>
      <td>
        <Button
          color='success'
          size='sm'
          className='mr-2'
          onClick={() => handleEdit(book)}>
          Edit
        </Button>

        <Button color='danger' size='sm' onClick={() => handleDelete(id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Book;
