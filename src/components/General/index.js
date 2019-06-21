import styled from 'styled-components';
import { OutlineButton } from "rimble-ui";

// OutlineButton is ignoring theme color, so this is workaround...
export const ShallowButton = styled(OutlineButton).attrs(()=>({}))`
  color: ${({theme})=> theme.colors.silver}
`;
