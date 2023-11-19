
export interface Icon {
    size?: number;
    color?: string;
    onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
    className?: string; 
    style?: { 
      [key: string]: string;
    }
  }
  