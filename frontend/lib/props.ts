export interface InputProps {
  label: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  type?: "text" | "password" | "email" | "number" | "tel" | "search";
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PasswordProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  bgColor?: string;
  color?: string;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  loading?: boolean;
  hoverColor?: string;
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
  id: string;
  title: string;
  price: number;
  src: string;
  alt: string;
}

export interface MenuProps {
  title: string;
  children: React.ReactNode;
}

type MenuItem = {
  label: string;
  icon?: React.ReactNode;
};

export interface AnimatedMenuProps {
  title: React.ReactNode;
  menuItems: MenuItem[];
  onClick?: (label: string) => void;
}

export interface ProductItem {
  category: string;
  description: string;
  imageUrl: string;
  name: string;
  price: number;
  _id: string;
}

export interface UserType {
  _id: string;
  fullName: string;
  email: string;
  role: string;
  mobile: string;
  profilePic: string;
  createdAt: string;
  updatedAt: string;
}

export interface BookType {
  name: string;
  description: string;
  price: string;
  category: string;
  imageUrl: string;
}

export interface PDFType {
  name: string;
  description: string;
  tags: string;
  price: string;
}
