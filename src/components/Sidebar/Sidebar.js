import React, { Component } from "react";
import "./Sidebar.css";

import ParagraphSelectComponent from "../ParagraphSelect/ParagraphSelect";
import SentenceSelectComponent from "../SentenceSelect/SentenceSelect";
import UserNameComponent from "../UserNameInput/UserNameInput";

class SidebarComponent extends Component {
	render() {
		return (
			<div className="sidebar-container">
				<div id="sidebar-header">Paragraphs and Sentences: </div>
				<form action="">
					<ParagraphSelectComponent updateParagraphs={this.props.updateParagraphs} numParagraphs={this.props.numParagraphs} />
					<SentenceSelectComponent updateSentences={this.props.updateSentences} numSentences={this.props.numSentences} />
					<SentenceSelectComponent updateSentences={this.props.updateSentences} numSentences={this.props.numSentences} />
					{/* <Button id="copy-button" bsSize="large">Copy!</Button> */}
				</form>
			</div>
		);
	}
}

export default SidebarComponent;
