export const createQueryFromArray = (array: number[]): string => {
    return array.join('&userId=');
}