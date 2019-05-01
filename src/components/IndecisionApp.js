import React, { Component } from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";
export default class IndecisionApp extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleMakeDecision = this.handleMakeDecision.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
    this.state = {
      options: [""],
      selectedOption: undefined
    };
  }
  componentDidMount() {
    console.log("Indecision mounted");
    if (JSON.parse(localStorage.getItem("options")))
      this.setState(() => ({
        options: JSON.parse(localStorage.getItem("options"))
      }));
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      console.log("componentDidUpdate");
      localStorage.setItem("options", JSON.stringify(this.state.options));
    }
  }
  handleClearSelectedOption() {
    this.setState(() => ({ selectedOption: undefined }));
  }
  handleDeleteOption(optionToBeRemovied) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToBeRemovied !== option)
    }));
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleMakeDecision() {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomIndex];
    this.setState(() => ({ selectedOption: option }));
  }
  handleAddOption(option) {
    if (!option) {
      return "Please enter a valid input..!";
    } else if (this.state.options.indexOf(option) > -1) {
      return "The option is already exists...!";
    }
    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  }
  render() {
    const title = "Indecision App";
    const subTitle = "Put your life in a computers hand";
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handleMakeDecision={this.handleMakeDecision}
        />
        <br />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
