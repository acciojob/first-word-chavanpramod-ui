function firstWord(s) {
  if (!s) return s;
  const trimmed = s.trimStart();
  const spaceIndex = trimmed.indexOf(" ");
  if (spaceIndex === -1) return trimmed;
  return trimmed.slice(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));