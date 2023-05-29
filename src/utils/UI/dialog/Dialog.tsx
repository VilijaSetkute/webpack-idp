import { FC, useEffect, useRef } from 'react';
import './styles.scss';
import React from 'react';

interface ModalProps {
  onClose: () => void;
  children: any;
}

export const Dialog: FC<ModalProps> = ({ onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="modal-container" ref={modalRef}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, { onClose })
      )}
    </div>
  );
};
