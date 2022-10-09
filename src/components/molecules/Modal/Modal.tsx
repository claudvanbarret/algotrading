import { Button } from '../../atoms/Button';
import * as S from './Modal.styles';
import { ModalProps } from './Modal.types';

const Modal = (props: ModalProps) => {
  const { open, title, children, okText, onOk, onClose } = props;

  return (
    <S.Modal open={open} onClick={onClose}>
      <S.Content onClick={(event) => event.stopPropagation()}>
        <S.Header>
          <S.Title>{title}</S.Title>
        </S.Header>
        <S.Body>{children}</S.Body>
        <S.Footer>
          {okText && (
            <Button variant="primary" onClick={onOk}>
              {okText}
            </Button>
          )}
        </S.Footer>
      </S.Content>
    </S.Modal>
  );
};

export default Modal;
