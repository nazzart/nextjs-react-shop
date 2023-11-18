
export interface Icon {
    size?: number;
    color?: string;
    onClick?:() => void;
    className?: string; 
    style?: { 
      [key: string]: string;
    }
  }
  