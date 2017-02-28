// why is this not even in the standard lib?
exports.randomInArray = array =>
  array[Math.floor(Math.random() * array.length)]

exports.delayPromise = delay => // h4rdc0r3 4rr0w funct10n5 n35st1ng
  (...args) =>
    new Promise(resolve =>
      setTimeout(() =>
        resolve(...args), delay))

exports.superscriptize = text => // dis kinda function yknow
  text
    .replace(/a/gi, 'ᵃ')
    .replace(/b/gi, 'ᵇ')
    .replace(/c/gi, 'ᶜ')
    .replace(/d/gi, 'ᵈ')
    .replace(/e/gi, 'ᵉ')
    .replace(/f/gi, 'ᶠ')
    .replace(/g/gi, 'ᵍ')
    .replace(/h/gi, 'ʰ')
    .replace(/i/gi, 'ᶦ')
    .replace(/j/gi, 'ʲ')
    .replace(/k/gi, 'ᵏ')
    .replace(/l/gi, 'ˡ')
    .replace(/m/gi, 'ᵐ')
    .replace(/n/gi, 'ⁿ')
    .replace(/o/gi, 'ᵒ')
    .replace(/p/gi, 'ᵖ')
    .replace(/q/gi, 'ᑫ')
    .replace(/r/gi, 'ʳ')
    .replace(/s/gi, 'ˢ')
    .replace(/t/gi, 'ᵗ')
    .replace(/u/gi, 'ᵘ')
    .replace(/v/gi, 'ᵛ')
    .replace(/w/gi, 'ʷ')
    .replace(/x/gi, 'ˣ')
    .replace(/y/gi, 'ʸ')
    .replace(/z/gi, 'ᶻ')

exports.vaporize = text => // should really do smth else with those
  text
    .replace(/a/gi, 'ａ')
    .replace(/b/gi, 'ｂ')
    .replace(/c/gi, 'ｃ')
    .replace(/d/gi, 'ｄ')
    .replace(/e/gi, 'ｅ')
    .replace(/f/gi, 'ｆ')
    .replace(/g/gi, 'ｇ')
    .replace(/h/gi, 'ｈ')
    .replace(/i/gi, 'ｉ')
    .replace(/j/gi, 'ｊ')
    .replace(/k/gi, 'ｋ')
    .replace(/l/gi, 'ｌ')
    .replace(/m/gi, 'ｍ')
    .replace(/n/gi, 'ｎ')
    .replace(/o/gi, 'ｏ')
    .replace(/p/gi, 'ｐ')
    .replace(/q/gi, 'ｑ')
    .replace(/r/gi, 'ｒ')
    .replace(/s/gi, 'ｓ')
    .replace(/t/gi, 'ｔ')
    .replace(/u/gi, 'ｕ')
    .replace(/v/gi, 'ｖ')
    .replace(/w/gi, 'ｗ')
    .replace(/x/gi, 'ｘ')
    .replace(/y/gi, 'ｙ')
    .replace(/z/gi, 'ｚ')
