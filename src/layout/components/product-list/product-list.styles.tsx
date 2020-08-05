import styled from "@emotion/styled";

const classComponents = {
  Table: styled("table")`
    font-family: "Open Sans", sans-serif;
    margin: 0 auto;
    margin-top: 50px;
    border-collapse: collapse;
    min-width: max-content;
    max-width: 700px;
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
};

export default classComponents;
