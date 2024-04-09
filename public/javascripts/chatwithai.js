const _random = () => {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 250;
  var b = num & 250;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
const isColorDark = (color) => {
  // Convert the hex color to RGB
  const rgb = parseInt(color.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >>  8) & 0xff;
  const b = (rgb >>  0) & 0xff;

  // Use the relative luminance formula to determine if the color is dark
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance < 128; // Adjust this threshold for your preference
};


let _rand;
let _gooey;
let tl = gsap.timeline({ ease: 'Sine.in' });

document.addEventListener('click', () => {
  _gooey = Math.floor(Math.random() * 100);
  _rand = _random();

  tl.to('.path', { attr: { d: `M ${-_gooey} 100 V ${_gooey} Q ${_gooey} 0 100 ${_gooey} V 100 z` }, duration: 0.6, visibility: 'visible', stagger: 0.01, ease: Power2.easeIn });

  tl.to('.path', { opacity: 0, duration: 0.3, stagger: 0.01, ease: Power2.easeOut }, '-=0.5');

  tl.to('.background', { backgroundColor: _rand }, '-=0.2');

  tl.to('.path', { attr: { d: `M ${-_gooey} 100 V ${_gooey} Q ${_gooey} 0 100 ${_gooey} V 100 z` }, visibility: 'hidden', stagger: 0.01, ease: Power2.easeIn }, '-=0.2');

  tl.to('.path', { attr: { d: `M 0 100 V 100 Q ${_gooey} 100 100 100 V 100  z` }, opacity: 1, stagger: 0.01, visibility: 'hidden', ease: Power2.easeOut }, '-=0.2');

  // Determine font color based on the background color
  const fontColor = isColorDark(_rand) ? 'white' : 'black';
  gsap.to('body', { color: fontColor });
});
