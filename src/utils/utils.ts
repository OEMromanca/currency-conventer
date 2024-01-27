

export const jsonStringMatch = <T>(input: string): T => {
    const matchResult = input.match(/\(([\s\S]+?)\)/);
  
    if (!matchResult) {
      throw new Error(`Invalid JSON format in input: ${input}`);
    }
  
    const jsonString = matchResult[1];
    return JSON.parse(jsonString);
};
  


 
 

  