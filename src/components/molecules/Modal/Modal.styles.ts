import styled from 'styled-components';
import Theme from '../../../theme/Theme';
import { ModalProps } from './Modal.types';

const { colors, spaces } = Theme;

export const Modal = styled.div<Pick<ModalProps, 'open'>>`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  background-color: ${colors.fillBlackTertiary};
  border-radius: 4px;
`;

export const Body = styled.div`
  padding: ${spaces.sp};
  width: 100%;
  border-top: 1px solid ${colors.fillGreyQuinternary};
  border-bottom: 1px solid ${colors.fillGreyQuinternary};
`;

export const Header = styled.div`
  padding: ${spaces.mp};
`;

export const Footer = styled.div`
  padding: 10px;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: ${colors.fill};
`;
