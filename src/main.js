const toolButtons = document.querySelectorAll('.tool-btn');
const panels = document.querySelectorAll('.tool-panel');

function activateTool(toolName) {
  toolButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.tool === toolName);
  });

  panels.forEach((panel) => {
    panel.classList.toggle('is-hidden', panel.dataset.panel !== toolName);
  });
}

toolButtons.forEach((button) => {
  button.addEventListener('click', () => activateTool(button.dataset.tool));
});

activateTool('uploads');
