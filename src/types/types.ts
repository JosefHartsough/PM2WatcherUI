export interface ProcessListData {
  pid: number;
  name: string;
  pmId: number;
  status: string;
  cpu: number;
  memory: number;
  uptime: number;
  restarts: number;
}

export interface ProcessDetails {
  pid: number;
  name: string;
  pmId: number;
  status: string;
  memory: number;
  cpu: number;
  execMode: "string";
  execInterpreter: "string";
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: string;
  size?: string;
  disabled?: boolean;
}
