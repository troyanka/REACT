import { React, Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class ModalComp extends Component {
  constructor() {
    super();
  }

  state = {
    newBookModal: false,
    editBookModal: false,
    newBookData: {
      title: "",
      rating: ""
    },
    editBookData: {
      id: "",
      title: "",
      rating: ""
    }
  };
  render() {
    const {
      newBookModal,
      newBookData,
      editBookModal,
      editBookData
    } = this.state;
    return (
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
    );
  }
}

export default ModalComp;
