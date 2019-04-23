// JSON server https://www.youtube.com/watch?v=1zkgdLZEdwM
// Example from https://www.youtube.com/watch?v=9CPmtIeapMw&list=WL&t=0s&index=3
import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import Book from "./components/book";
class App extends Component {
  state = {
    books: [],
    newBookData: {
      title: "",
      rating: ""
    },
    editBookData: {
      id: "",
      title: "",
      rating: ""
    },
    newBookModal: false,
    editBookModal: false
  };

  componentWillMount() {
    this._refreshBooks();
  }

  _refreshBooks = () => {
    axios
      .get("http://localhost:3000/books")
      .then(response => this.setState({ books: response.data }));
  };

  handleDelete = id => {
    axios.delete("http://localhost:3000/books/" + id).then(this._refreshBooks);
  };

  handleEdit = bookToEdit => {
    this.setState({
      editBookData: bookToEdit,
      editBookModal: !this.state.editBookModal
    });
  };

  handleAddBook = () => {
    axios
      .post("http://localhost:3000/books?", this.state.newBookData)
      .then(response => {
        let { books } = this.state;
        books.push(response.data);
        this.setState(books);
        this.toggleBookModal("newBookModal");
        this.setState({
          newBookData: {
            title: "",
            rating: ""
          }
        });
      });
  };

  handleEditBook = () => {
    let { id, title, rating } = this.state.editBookData;
    axios
      .put("http://localhost:3000/books/" + id, {
        title,
        rating
      })
      .then(response => {
        this._refreshBooks();
        this.setState({ editBookModal: false });
      });
  };

  toggleBookModal = modalName => {
    this.setState({ [modalName]: !this.state[modalName] });
    this._refreshBooks();
  };

  handleInputChange = (e, bookDataName) => {
    let bookData = this.state[bookDataName];
    bookData[e.target.id] = e.target.value;
    this.setState({ [bookDataName]: bookData });
  };

  render() {
    const {
      newBookModal,
      newBookData,
      editBookModal,
      editBookData
    } = this.state;
    return (
      <div className='App container'>
        <h1>Books App</h1>
        <Button
          color='primary'
          className='mb-3'
          onClick={() => this.toggleBookModal("newBookModal")}>
          Add Book
        </Button>

        {/* <AddModal /> */}

        {/* TODO: split modals to components  */}
        <Modal
          isOpen={newBookModal}
          toggle={() => this.toggleBookModal("newBookModal")}>
          <ModalHeader toggle={() => this.toggleBookModal("newBookModal")}>
            Add a new Book
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for='title'>Title</Label>
              <Input
                id='title'
                value={newBookData.title}
                onChange={e => this.handleInputChange(e, "newBookData")}
              />
            </FormGroup>
            <FormGroup>
              <Label for='rating'>Rating</Label>
              <Input
                id='rating'
                value={newBookData.rating}
                onChange={e => this.handleInputChange(e, "newBookData")}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.handleAddBook}>
              Add Book
            </Button>{" "}
            <Button
              color='secondary'
              onClick={() => this.toggleBookModal("newBookModal")}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <Modal
          isOpen={editBookModal}
          toggle={() => this.toggleBookModal("editBookModal")}>
          <ModalHeader toggle={() => this.toggleBookModal("editBookModal")}>
            Edit a Book
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for='title'>Title</Label>
              <Input
                id='title'
                value={editBookData.title}
                onChange={e => this.handleInputChange(e, "editBookData")}
              />
            </FormGroup>
            <FormGroup>
              <Label for='rating'>Rating</Label>
              <Input
                id='rating'
                value={editBookData.rating}
                onChange={e => this.handleInputChange(e, "editBookData")}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.handleEditBook}>
              Edit Book
            </Button>{" "}
            <Button
              color='secondary'
              onClick={() => this.toggleBookModal("editBookModal")}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map(book => (
              <Book
                book={book}
                key={book.id}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
