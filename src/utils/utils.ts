

export const jsonStringMatch = <T>(input: string): T => {
    const matchResult = input.match(/\(([\s\S]+?)\)/);
  
    if (!matchResult) {
      throw new Error(`Invalid JSON format in input: ${input}`);
    }
  
    const jsonString = matchResult[1];
    return JSON.parse(jsonString);
};

export const formatNumberWithDecimals = (
  number: number,
  decimalPlaces: number
): string => {
  const isInteger = Number.isInteger(number);

  if (isInteger) {
    return number.toString();
  }

  const numericValue = +number;

  if (isNaN(numericValue)) {
    throw new Error('Invalid number format');
  }

  return numericValue.toFixed(decimalPlaces);
};

 
 






 
 

  