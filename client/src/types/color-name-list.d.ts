declare module 'color-name-list' {
  interface ColorName {
    name: string;
    hex: string;
  }
  
  const colorNames: ColorName[];
  export default colorNames;
}
