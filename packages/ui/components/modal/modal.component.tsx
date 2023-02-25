import React from "react";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  open: boolean;
  close: () => void;
  action?: () => void;
  actionLabel?: string;
}

export const ModalComponent: React.FC<ModalProps> = ({
  title,
  children,
  open,
  close,
  action,
  actionLabel,
}: ModalProps) => {
  if (!open) return null;

  return (
    <div className="modal-box">
      <div className="modal-background" />
      <div className="modal-content">
        <div className="modal-body">
          <div className="modal-card">
            <h5 className="modal-card-title">{title}</h5>
            <div className="modal-card-content">{children}</div>
            <div className="modal-card-footer">
              <button type="button" onClick={close}>
                Cancel
              </button>
              {action && (
                <button type="button" onClick={action} className="danger">
                  {actionLabel}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
