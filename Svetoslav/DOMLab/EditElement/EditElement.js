function edit(ref, match, replacer) {
  const matcher = new RegExp(match, "g");
  const value = ref.textContent.replace(matcher, replacer);

  ref.textContent = value;
}
