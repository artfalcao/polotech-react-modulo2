import { TailSpin } from  'react-loader-spinner';
import { colors } from '../../GlobalStyle';
import { Column } from '../Column';
import styled from 'styled-components';

const CenteredColumn = styled(Column)`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = () => {
  return (
    <CenteredColumn>
      <TailSpin
        height="80"
        width="80"
        color= {colors.primary}
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </CenteredColumn>
  )
}

export default Loading;


