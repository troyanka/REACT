const Pet = (props) => {
    return React.createElement('div', {},
        [
            React.createElement('h1', {}, props.name),
            React.createElement('h2', {}, props.animal),
            React.createElement('h2', {}, props.breed)
        ])
}

class App extends React.Component {

    handleTitleClicked() {
        alert('you clicked on a title');
    }

    render() {
        return (
            React.createElement("div", {}, [
                React.createElement('h1', {onClick: this.handleTitleClicked}, 'Adopt me!'),
                React.createElement(Pet, {
                    name: "Luna",
                    animal: "dog",
                    breed: "Havanese"
                }),
                React.createElement(Pet, {
                    name: "Petter",
                    animal: "bird",
                    breed: "Cockatiel"
                }),
                React.createElement(Pet, {
                    name: "Doink",
                    animal: "cat",
                    breed: "Mixed"
                })
        ])
            
        );
    }
}

// export default App;

ReactDOM.render(React.createElement(App), document.getElementById('root'));