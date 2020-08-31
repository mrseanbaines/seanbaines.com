export const isDefined = <T extends any>(prop: any): prop is Required<T> => typeof prop !== 'undefined'
