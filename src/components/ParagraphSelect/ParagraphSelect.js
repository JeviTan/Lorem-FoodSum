import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './ParagraphSelect.css';

class ParagraphSelectComponent extends Component {
  render() {
    return (
        <div className="paragraph-select-container">
            <FormGroup controlId="formControlsSelect">
             <ControlLabel>Paragraphs</ControlLabel>
             <FormControl componentClass="select"value={this.props.numParagraphs}  onChange={this.props.updateParagraphs}>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>
               <option value="8">8</option>
             </FormControl>
            </FormGroup>
        </div>

    );
  }
}

export default ParagraphSelectComponent;
