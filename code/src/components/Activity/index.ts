import styled from "styled-components";
import { ActvityProps } from "./Activity.types";

export const ActivityCard = styled.label<ActvityProps>`
  width: 80%;
  color: #000;
  font-weight: bold;
  font-size: 1.5em;
  display: flex;
  text-align: center;
  padding: .5em;
  border: none;
  border-radius: 12px;
  background-color: #F4F2FF;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  text-decoration-color: #2B1887;
`


export default ActivityCard;