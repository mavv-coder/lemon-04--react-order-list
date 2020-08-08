import styled from "@emotion/styled";

const classComponents = {
  Container: styled("div")`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    font-family: "Open Sans", sans-serif;
    min-width: max-content;
    max-width: 700px;
    height: 200px;
    padding: 20px;
    background-color: #fdfefe;
    border-radius: 5px;
    -webkit-box-shadow: 3px 4px 8px 1px rgba(119, 119, 119, 0.67);
    box-shadow: 3px 4px 8px 1px rgba(119, 119, 119, 0.67);
  `,
  List: styled("ul")`
    list-style: none;
  `,
  ListItem: styled("li")``,
  ItemDesc: styled("span")`
    color: green;
  `,
  ItemCost: styled("span")`
    color: red;
  `,
  HiddenContainer: styled("div")`
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    font-family: "Open Sans", sans-serif;
    min-width: max-content;
    max-width: 740px;
    height: max-content;
    padding: 20px 0;
  `,
  ButtonBack: styled("button")`
    display: inline-block;
    text-transform: uppercase;
    margin: 20px 0px 0px 20px;
    font-weight: 400;
    color: #404040;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    border: 2px solid #ccc;
    padding: 12px 40px;
    letter-spacing: 0.5px;
    background-color: #fff;
    transition: all 0.2s;
    &:hover {
      color: #fff;
      background-color: #404040;
      border: 2px solid #404040;
    }
    &:active {
      background-color: #ccc;
      border: 2px solid #ccc;
    }
  `,
  ButtonConfirm: styled("button")`
    display: inline-block;
    text-transform: uppercase;
    margin: 20px 0px 0px 20px;
    font-weight: 400;
    color: #404040;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    border: 2px solid #ccc;
    padding: 12px 40px;
    letter-spacing: 0.5px;
    background-color: #fff;
    transition: all 0.2s;
    &:active {
      background-color: #ccc;
      border: 2px solid #ccc;
    }
    &:hover {
      background-color: #20c073;
      border: 2px solid #20c073;
    }
  `,
};

export default classComponents;
