import { TStatus } from "../../pages/ListPage";
import { StyledHeader } from "./style";

interface IProps {
  status: TStatus;
}

const Header = ({ status } : IProps) => {
  return (
    <StyledHeader>
      <h2>To-Do App</h2>
      <p>All: {status.all}</p>
      <p>Checked: {status.checked}</p>
      <p>Unchecked: {status.unchecked}</p>
    </StyledHeader>
  )
}

export default Header;