import styled from "@emotion/styled";

const classComponents = {
  Container: styled("div")`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    min-width: max-content;
    max-width: 700px;
    height: 200px;
    padding: 20px;
    background-color: #fdfefe;
    border-radius: 5px;
    -webkit-box-shadow: 3px 4px 8px 1px rgba(119, 119, 119, 0.67);
    box-shadow: 3px 4px 8px 1px rgba(119, 119, 119, 0.67);
  `,
  FlexContainer: styled("div")`
    display: flex;
    width: 100%;
    margin-bottom: 40px;
    &:last-of-type {
      margin-bottom: 0px;
    }
  `,
  InputField: styled("div")`
    margin-right: 40px;
    display: flex;
    flex-direction: column;
    width: 200px;
    &:last-of-type {
      margin-right: 0px;
    }
  `,
  Label: styled("label")`
    font-size: 17px;
    color: #404040;
  `,
  Input: styled("input")`
    font-family: inherit;
    margin-top: 10px;
    padding: 10px 12px;
    height: 16px;
    border: 2px solid #ccc;
    background-color: #fdfefe;
    border-radius: 5px;
    outline: none;
    &:focus {
      border: 2px solid #fddc5c;
    }
  `,
  Button: styled("button")`
    margin-left: auto;
    margin-top: auto;
    display: inline-block;
    text-transform: uppercase;
    color: #fff;
    border: none;
    background-color: #ccc;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    padding: 12px 40px;
    &:hover {
      background-color: #fddc5c;
    }
  `,
};

export default classComponents;
