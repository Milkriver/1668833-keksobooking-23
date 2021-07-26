const IMAGE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const imageShowPreviewHandler = (inputForm, previewForm, alt, width) => {
  const input = document.querySelector(inputForm);
  const preview = document.querySelector(previewForm);

  input.addEventListener('change', () => {
    const image = preview.querySelector('img');
    const file = input.files[0];
    const fileName = input.files[0].name;
    const matches = IMAGE_TYPES.some((type) => fileName.endsWith(type));
    if (image) {
      image.remove();
    }
    if (matches) {
      const url = URL.createObjectURL(file);
      const createdPreviewImage = document.createElement('img');
      preview.style.padding = '0px';
      createdPreviewImage.setAttribute('src', url);
      createdPreviewImage.setAttribute('alt', alt);
      createdPreviewImage.style.width = `${width}px`;
      preview.appendChild(createdPreviewImage);
    }
  });
};

export { imageShowPreviewHandler };
