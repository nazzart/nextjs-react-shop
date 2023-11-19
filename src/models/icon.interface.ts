
export interface Icon {
    size?: number;
    color?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string; 
    style?: { 
      [key: string]: string;
    }
  }
  