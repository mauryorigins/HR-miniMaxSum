/* eslint-disable no-plusplus */
export default function miniMaxSum(arr: number[]): void {
  // Write your code here
  let sumamin = 0;
  let sumamax = 0;
  const order = arr.sort((a, b) => a - b);

  for (let i = 1; i < arr.length; i++) {
    sumamax += order[i];
  }
  for (let i = 0; i < arr.length - 1; i++) {
    sumamin += order[i];
  }
  console.log(sumamin, sumamax);
}
