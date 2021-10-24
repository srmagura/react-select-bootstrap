import { StylesConfig } from "react-select";

export type BootstrapConfig = Partial<{
  primary: string;
  success: string;
  danger: string;

  // TODO add more Bootstrap variables as needed
}>;

export interface GetBootstrapSelectStylesOptions {
  isMulti: boolean;

  valid?: boolean;
  showValidation?: boolean;
  size?: "sm" | "lg";

  bootstrapConfig?: BootstrapConfig;
}

export function getBootstrapSelectStyles({}: GetBootstrapSelectStylesOptions): Required<StylesConfig> {
  return {} as any; // TODO
}
