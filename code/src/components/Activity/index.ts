import styled from "styled-components";
import { ActvityProps } from "./Activity.types";

export const ActivityCard = styled.label<ActvityProps>`
  width: 80%;
  color: #000;
  display: flex;
  padding: .5em;
  border: none;
  border-radius: 12px;
  background-color: #F4F2FF;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  text-decoration-color: #2B1887;

  p {
    width: 80%;
    font-weight: bold;
    font-size: 1.2em;
    display: flex;
    flex-wrap: wrap;
    /* border: 1px solid black; */
  }
`


export default ActivityCard;