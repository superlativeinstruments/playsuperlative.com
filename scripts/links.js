$(() => {

  // Utility for making links underlined. Unused for now, but keeping around in case we want to use in the future.

  var styleTag = $(`<style>
  .link{
      cursor: pointer;
      box-sizing: border-box;
      position: relative;
    }
    .underline{
      position: absolute;
      bottom: -.2rem;
      left: -1px;
      height: 1px;
      width: 0%;
      transition: width .25s;
    }
    .link:hover .underline{
      width: 100%;
    }
</style>`);
  $('html > head').append(styleTag);

  // Add underline for links.
  const links = document.getElementsByClassName('link');
  for (let i = 0; i < links.length; i++) {
    const underline = document.createElement("div");
    links[i].appendChild(underline).classList.add('underline');

    // Match the color to the parent's color.
    const linkColor = window.getComputedStyle(links[i]).getPropertyValue("color");
    underline.style['background-color'] = linkColor;
  }
});