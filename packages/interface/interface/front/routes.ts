export interface Routes {
  path: string;
  element: JSX.Element;
  children?: Routes[];
}
