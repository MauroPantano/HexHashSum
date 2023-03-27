export function hexHash(code: string): number {
    let sum=0;
    let strConstruct = '';
    for(let i=0; i<code.length;i++){
      strConstruct += code.charCodeAt(i).toString(16);
      console.log(strConstruct);
    }
    for(let char of strConstruct){
      if(parseInt(char) < 10){
        sum += parseInt(char);
      }
    }
    return sum;
  }