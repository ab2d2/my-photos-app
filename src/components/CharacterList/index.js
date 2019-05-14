import React, { Component } from 'react';
import { getCharacterList } from '../../Api/api';
class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = { characters: [] };
  }

  componentDidMount() {
    getCharacterList()
      .then(({ results }) => {
        this.setState({ characters: results });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <ul className="itemsList">
        {this.state.characters.map(character => (
          <li key={character.id}>
            <div>
              <p>{character.name}</p>
            </div>
            <div>
              <img alt="" src={character.image} />
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default CharacterList;
