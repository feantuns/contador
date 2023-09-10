const $ = (search) => document.querySelector(search);
const textarea = $('#text')
const words = $('#words')
const charsWithSpace = $('#chars-with-space')
const charsWithoutSpace = $('#chars-without-space')

const updateField = (field, value) => {
    field.innerHTML = value;
}

const findWords = (str) => str.trim().split(' ').filter(Boolean);
const findWordsLength = (str) => findWords(str).length;
const findCharsWithSpace = (str) => str.length;
const findCharsWithoutSpace = (str) => findWords(str).map(word => word.length).reduce((prev, current) => prev + current, 0)

const handleChangeTextArea = ({target: { value }}) => {
    updateField(words, findWordsLength(value))
    updateField(charsWithSpace, findCharsWithSpace(value))
    updateField(charsWithoutSpace, findCharsWithoutSpace(value))
}

textarea.addEventListener('keyup', handleChangeTextArea)