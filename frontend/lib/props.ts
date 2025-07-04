export interface InputProps {
  title: string;
  placeholder: string;
  fullWidht?: boolean;
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
}
