function autoResize(textarea: HTMLTextAreaElement) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 10 + 'px';
}

export const autoResizeTextarea = (className: string) => {
  const textarea = document.querySelector(
    `.${className}`
  ) as HTMLTextAreaElement;
  if (textarea) {
    autoResize(textarea);
    textarea.addEventListener('input', () => autoResize(textarea));
    textarea.addEventListener('focus', () => autoResize(textarea));
  }
};
