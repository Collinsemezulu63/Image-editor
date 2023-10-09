//image upload
const input_file = document.querySelector('input[type=file]'),
  upload_but = document.querySelector('.upload-but'),
  image = document.querySelector('.img-cont img');
input_file.addEventListener('change', () => {
  const image = document.querySelector('.img-cont img'),
    file = input_file.files[0],
    reader = new FileReader();

  reader.addEventListener('load', () => {
    image.src = reader.result;
  });
  if (file) reader.readAsDataURL(file);
  image_filter_range();
});
upload_but.addEventListener('click', () => {
  input_file.click();
});

//apply-image-filter
const apply_styles = () => {
  image.style.filter = `sepia(${sepia.value}%)  saturate(${saturate.value}) invert(${invert.value}%) contrast(${contrast.value}%) grayscale(${grayscale.value}%) brightness(${brightness.value}%) opacity(${opacity.value}%)`;
};

//image-filter-range
const image_filter_range = () => {
  const brightness = document.querySelector('#brightness'),
    // blur = document.querySelector("#blur"),
    contrast = document.querySelector('#contrast'),
    grayscale = document.querySelector('#grayscale'),
    invert = document.querySelector('#invert'),
    saturate = document.querySelector('#saturate'),
    opacity = document.querySelector('#opacity'),
    sepia = document.querySelector('#sepia');

  brightness.addEventListener('input', () => {
    document.querySelector(
      '.brightness-comment'
    ).innerHTML = `${brightness.value}%`;
    apply_styles();
  });

  contrast.addEventListener('input', () => {
    document.querySelector(
      '.contrast-comment'
    ).innerHTML = `${contrast.value}%`;
    apply_styles();
  });

  grayscale.addEventListener('input', () => {
    document.querySelector(
      '.grayscale-comment'
    ).innerHTML = `${grayscale.value}%`;
    apply_styles();
  });

  invert.addEventListener('input', () => {
    document.querySelector('.invert-comment').innerHTML = `${invert.value}%`;
    apply_styles();
  });

  saturate.addEventListener('input', () => {
    document.querySelector('.saturate-comment').innerHTML = `${saturate.value}`;
    apply_styles();
  });

  sepia.addEventListener('input', () => {
    document.querySelector('.sepia-comment').innerHTML = `${sepia.value}%`;
    apply_styles();
  });

  opacity.addEventListener('input', () => {
    document.querySelector('.opacity-comment').innerHTML = `${opacity.value}%`;
    apply_styles();
  });
};

//save-image
const save_but = document.querySelector('.save-but');
save_but.addEventListener('click', () => {
  const canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  ctx.filter = `sepia(${sepia.value}%)  saturate(${saturate.value}) invert(${invert.value}%) contrast(${contrast.value}%) grayscale(${grayscale.value}%) brightness(${brightness.value}%) opacity(${opacity.value}%)`;
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  const link = document.createElement('a');
  link.download = 'collins-image-editor.jpg';
  link.href = canvas.toDataURL();
  link.click();
});
