export interface InputProps {
  label: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  type?: "text" | "password" | "email" | "number" | "tel" | "search";
}

export interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "text" | "outlined" | "contained";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  size?: "small" | "medium" | "large";
  fullwidth?: boolean;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactElement<unknown>;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  disableBackdropClick?: boolean;
}

export interface AnmiatedProps {
  children: React.ReactNode;
}

export interface AnmiationProps {
  children: React.ReactNode;
  duration?: number;
  repeat?: boolean;
}

export interface ScaleButtonProps {
  text: string;
  onClick?: () => void;
  justify?: "start" | "center" | "end";
  bgColor?: string;
  textColor?: string;
}

export interface ScrollerItemsProps {
  list: string[];
}

export interface CartProps {
  title: string;
  price: number;
  src: string;
  alt: string;
}
