export const brainfk = (program: string, input: string = ''): string => {
  const inputChars = input.split('');
  let pc = 0;
  let ptr = 0;
  let output = '';
  const data: number[] = [];
  let op = program[pc];
  while (op) {
    switch (op) {
      case '>':
        ptr++;
        break;
      case '<':
        ptr--;
        break;
      case '+':
        data[ptr] = (data[ptr] || 0) + 1;
        break;
      case '-':
        data[ptr] = (data[ptr] || 0) - 1;
        break;
      case '.':
        output += String.fromCharCode(data[ptr]);
        break;
      case ',':
        data[ptr] = inputChars.shift()?.charCodeAt(0) || 0;
        break;
      case '[':
        if (data[ptr] === 0) {
          pc = program.indexOf(']', pc);
        }
        break;
      case ']':
        if (data[ptr] !== 0) {
          pc = program.lastIndexOf('[', pc);
        }
        break;
    }
    pc++;
    op = program[pc];
  }
  return output;
}
