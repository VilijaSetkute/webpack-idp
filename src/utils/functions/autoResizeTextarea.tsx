function autoResize<T extends HTMLTextAreaElement>(textarea: T) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 10 + 'px';
}

export const autoResizeTextarea = <T extends HTMLTextAreaElement>(
  className: string
) => {
  const textarea = document.querySelector(`.${className}`) as T;
  if (textarea) {
    autoResize(textarea);
    textarea.addEventListener('input', () => autoResize(textarea));
    textarea.addEventListener('focus', () => autoResize(textarea));
  }
};
