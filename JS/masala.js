/*findWords("test") // {t:2, e:1,s:1}
obj -> 
[t, e, s, t]

obj {
	t : obj.t + 1,
	e : 1,
	s : 1,
}
*/

function Char_Counts(str) {
  const wordsList = [
    "asdf sasdasdas asdasdasd. asdasdasd",
    "fdas",
    "asds",
    "d fm",
    "dfaa",
    "aaaa",
    "aabb",
    "aaabb",
  ];
  const uchars = { wordsList };
  str.replace(function (l) {
    uchars[l] = isNaN(uchars[l]) ? 1 : uchars[l] + 1;
  });
  return uchars;
}
console.log(Char_Counts());
