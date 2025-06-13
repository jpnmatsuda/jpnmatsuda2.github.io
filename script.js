// script.js

const papers = document.querySelectorAll('.paper');

papers.forEach(paper => {
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  // Função para iniciar o arrasto
  function startDrag(e) {
    isDragging = true;
    const event = e.type.startsWith('touch') ? e.touches[0] : e;
    offsetX = event.clientX - paper.offsetLeft;
    offsetY = event.clientY - paper.offsetTop;
    // Para evitar comportamento padrão, como rolagem
    if (e.type.startsWith('touch')) {
      e.preventDefault();
    }
  }

  // Função para durante o arrasto
  function doDrag(e) {