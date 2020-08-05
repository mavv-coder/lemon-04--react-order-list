import styled from "@emotion/styled";

const classComponents = {
  Container: styled("div")`
    font-family: Arial, Helvetica, sans-serif;
    min-width: max-content;
    margin: 20px;
    height: 400px;
    padding: 20px;
    background-color: #fdfefe;
    border-radius: 5px;
    -webkit-box-shadow: 3px 4px 8px 1px rgba(119, 119, 119, 0.67);
    box-shadow: 3px 4px 8px 1px rgba(119, 119, 119, 0.67);
  `,
  InputField: styled("div")`
    display: flex;
    flex-direction: column;
    width: 200px;
  `,
  Label: styled("label")`
    font-size: 18px;
    color: #999;
  `,
  Input: styled("input")`
    margin-top: 10px;
    padding: 10px 12px;
    border: 2px solid #fddc5c;
    background-color: #fdfefe;
    border-radius: 5px;
    outline: none;
  `,
};

export default classComponents;
