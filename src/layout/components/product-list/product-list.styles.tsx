import styled from "@emotion/styled";

const classComponents = {
  Container: styled("div")`
    margin: 0 auto;
    display: flex;
    font-family: "Open Sans", sans-serif;
    min-width: max-content;
    max-width: 740px;
    height: max-content;
    padding: 20px 0;
  `,
  Button: styled("button")`
    display: inline-block;
    text-transform: uppercase;
    margin: 20px 20px 10px 0;
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
      background-color: #20c073;
      border: 2px solid #20c073;
    }
    &:active {
      background-color: #404040;
      border: 2px solid #404040;
    }
    &:last-of-type:hover {
      background-color: #f54842;
      border: 2px solid #f54842;
    }
    &:last-of-type:active {
      background-color: #404040;
      border: 2px solid #404040;
    }
  `,
  Table: styled("table")`
    font-family: "Open Sans", sans-serif;
    margin: 0 auto;
    border-collapse: collapse;
    width: 740px;
    -webkit-box-shadow: 3px 4px 8px 1px rgba(119, 119, 119, 0.67);
    box-shadow: 3px 4px 8px 1px rgba(119, 119, 119, 0.67);
  `,
  TableData: styled("td")`
    color: #404040;
    border-right: 2px solid #ccc;
    text-align: left;
    padding: 8px;
    &:last-of-type {
      border-right: none;
    }
  `,
  TableHead: styled("th")`
    color: #fdfefe;
    font-weight: 400;
    border-right: 2px solid #fdfefe;
    text-align: left;
    padding: 8px;
    background-color: #404040;
    &:last-of-type {
      border-right: none;
    }
  `,
  TableRow: styled("tr")`
    &:nth-of-type(even) {
      background-color: #eee;
    }
  `,
  Input: styled("input")`
    padding: 3px;
    text-align: right;
    font-family: inherit;
    border: 1px solid #ccc;
    background-color: #fdfefe;
    outline: none;
    transition: all 0.2s;
    &:focus {
      border: 1px solid #fddc5c;
    }
  `,
};

export default classComponents;
