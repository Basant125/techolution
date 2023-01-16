import { func } from "prop-types";
import React, { Component,useRef } from "react";
import ReactDOM from "react-dom";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import  "./multiselect.css";
const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};
const dataOptions = [
    { value: "Enterprise_Cloud", label: "Enterprise Cloud" },
    { value: "Product_Innovation", label: "Product Innovation" },
    { value: "Real_World_AI", label: "Real World AI" },
    { value: "Co-create", label: "Co-create" },
    { value: "Job_Opportunities", label:"Job Opportunities"}
  ];
  const wrapperRef = React.createRef();
  const openDropdown =()=>{
   wrapperRef.current?.onMenuOpen();
  }
const optionSelected = [];

export default class Multiselect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      optionSelected: null,
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateSelected = this.updateSelected.bind(this)
  }

  handleChange = selected => {
    this.setState({
      optionSelected: selected,
    })
    wrapperRef.current.selected = selected
    wrapperRef.current.state.selectValue = selected
    this.props.updateFormValue(selected);
  }
  handleCreate = option => {
    // console.log(option, "opt")
  }
  updateSelected = () => {
    if (this.state.optionSelected === null && optionSelected?.length >= 1) {
      this.state.optionSelected = [optionSelected[optionSelected.length - 1]]
    } else {
      const filtered = this.state.optionSelected?.filter(
        item => item?.value === optionSelected[optionSelected.length - 1]?.value
      )
      if (filtered?.length <= 0 && optionSelected[optionSelected.length - 1] !== undefined) {
        this.state.optionSelected?.push(
          optionSelected[optionSelected.length - 1]
        )
      }
    }
    optionSelected.length = 0;
    this.handleChange(this.state.optionSelected)

  }
  render() {
    return (
      <>
        <span
          className="d-inline-block multi_select_input"
          data-toggle="popover"
          data-trigger="focus"
          data-content="Please selecet account(s)"
        >
          <ReactSelect
            ref={wrapperRef}
            options={dataOptions}
            isMulti
            closeMenuOnSelect={false}
            blurInputOnSelect={false}
            hideSelectedOptions={false}
            components={{
              Option,
            }}
            onChange={this.handleChange.bind(this)}
            allowSelectAll={true}
            value={this.state.optionSelected}
            isSearchable={false}
            placeholder="How can we help?"
            displayValue={false}
            classNamePrefix="multi_select"
            onMenuOpen={this.updateSelected.bind(this)}
            //menuIsOpen={isMenuOpen[0]}
            //openMenuOnClick={true}
          />
          {/* <ReactSelect
          options={colourOptions}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{
            Option
          }}
        //   defaultMenuIsOpen={true}
          onChange={this.handleChange}
          //onCreateOption={this.handleCreate}
          allowSelectAll={true}
          value={this.state.optionSelected}
          //inputValue={"Select Your Interests"}
          //placeholder="Select Your Interests"
          isSearchable={false}
          
          
        /> */}
          {this.state.optionSelected != null &&
            this.state.optionSelected.length != 0 && (
              <div className="selected_items_count">
                Interests Added ({this.state.optionSelected.length})
              </div>
            )}
        </span>
      </>
    )
  }
}


export const updateDataOptions = data => {
  const val = data.split(" ").join("_")
  var filteredData = dataOptions.filter(item => item.label === data)
  if (filteredData?.length <= 0) {
    dataOptions.unshift({ value: val, label: data })
  }
  optionSelected.push({ value: val, label: data })
  openDropdown()
}
export const updateDataOptionsByPage = data => {
var filteredData = dataOptions.filter(item => item.label === data)
var isSelected = optionSelected.filter(item => item.label === data)
  if (isSelected?.length <= 0 && filteredData?.length > 0) {
    optionSelected.push(filteredData[0])
  }
  openDropdown()
}


