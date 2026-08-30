'use client';

// type
export type ModalType = 'alert' | 'confirm' | 'layer';

interface Props {
  type?: ModalType;
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  title?: string;
  children?: ReactNode;
  confirmText?: string;
  cancelText?: string;
  closeOnDimClick?: boolean;
  width?: string | number; // layer 팝업 가변 너비 (예: '600px', '80%', 600)
}

// react
import { ReactNode, useEffect } from 'react';

// style
import { cn } from '@/lib/utils';
import style from '@/styles/LayerModal.module.scss';

export default function LayerModal({
  type = 'layer',
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  confirmText = '확인',
  cancelText = '취소',
  closeOnDimClick = false,
  width,
}: Props) {
  // 모달 열림 시 스크롤 방지 & ESC 키 이벤트
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    onClose();
  };

  const handleDimClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnDimClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  // type에 따른 너비(max-width) 지정
  const modalWidth =
    type === 'alert' || type === 'confirm' ? '360px' : typeof width === 'number' ? `${width}px` : width || '480px'; // layer 기본값 480px

  return (
    <div
      className={cn(
        'fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-5 backdrop-blur-[2px]',
        style.modalOverlay,
      )}
      onClick={handleDimClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div
        className={cn(
          'relative flex max-h-[90vh] w-full flex-col overflow-hidden rounded-[12px] bg-white shadow-xl',
          style.modalContainer,
          style[type],
        )}
        style={{ maxWidth: modalWidth }}
      >
        {/* Header */}
        <div className={cn('flex items-center justify-between px-5 pt-4 pb-3', style.modalHeader)}>
          {title && (
            <h2
              id="modal-title"
              className="m-0 text-lg leading-snug font-bold text-gray-900"
            >
              {title}
            </h2>
          )}
          <button
            type="button"
            className={cn('ml-auto p-1 text-2xl text-gray-400 transition-colors hover:text-gray-900', style.btnClose)}
            onClick={onClose}
            aria-label="팝업 닫기"
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div className={cn('overflow-y-auto px-5 pt-2 pb-5 text-sm leading-relaxed text-gray-700', style.modalContent)}>
          {children}
        </div>

        {/* Footer (alert / confirm 전용) */}
        {type !== 'layer' && (
          <div className={cn('flex gap-2 px-5 pt-3 pb-4', style.modalFooter)}>
            {type === 'confirm' && (
              <button
                type="button"
                className={cn(
                  'h-11 flex-1 rounded-lg bg-gray-100 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-200',
                  style.btnCancel,
                )}
                onClick={onClose}
              >
                {cancelText}
              </button>
            )}
            <button
              type="button"
              className={cn(
                'h-11 flex-1 rounded-lg bg-blue-600 text-sm font-semibold text-white transition-colors hover:bg-blue-700',
                style.btnConfirm,
              )}
              onClick={handleConfirm}
            >
              {confirmText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
