// const properCase = () => {};
// const slugify = () => {};
// const truncate = () => {};

// properCase.js
function properCase(str) {
  return str
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

const fullName = properCase("anamika rai");
console.log(fullName);

// slugify.js

function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, "");
  str = str.toLowerCase();
  str = str
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-") //
    .replace(/-+/g, "-");
  return str;
}

const title = "The Quick Brown Fox Jumps Over The Lazy Dog!";
const slug = slugify(title);
console.log(slug);

//trurncate

const truncate = (str, length) =>
  str.length <= length ? str : `${str.slice(0, length).trim()}...`;
const result = truncate(
  "asaudua ashdw kajsdsv aosdjiasjdiw idsjdww ijidjwidi",
  20
);
console.log(result);

module.exports = {
  properCase,
  slugify,
  truncate,
};
