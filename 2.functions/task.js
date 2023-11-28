function getArrayParams(...arr) {
  if (arr.length === 0) {
    return {
      min: undefined,
      max: undefined,
      avg: undefined,
    };
  }

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
  }

  const avg = (sum / arr.length).toFixed(2);

  return {
    min: Number(min),
    max: Number(max),
    avg: Number(avg),
  };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (const num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
    } else {
      sumOddElement += num;
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0; // Если массив пустой, вернем 0
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (const num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
      countEvenElement++;
    }
  }

  if (countEvenElement === 0) {
    return 0;
  }

  const average = sumEvenElement / countEvenElement;
  return average;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (const data of arrOfArr) {
    const result = func(...data);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}

