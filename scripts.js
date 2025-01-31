// Фильтрация проектов
const filtersContainer = document.querySelector('.filters');
const projects = document.querySelectorAll('.project');

filtersContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('filter-btn')) {
    const filter = event.target.getAttribute('data-filter');

    // Убираем активный класс у всех кнопок и добавляем его только к текущей
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Фильтрация проектов
    projects.forEach(project => {
      const category = project.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  }
});

// Модальные окна
function openModal(projectId) {
  const modal = document.getElementById(`modal-${projectId}`);
  if (modal) {
    modal.style.display = "block";

    // Закрытие модального окна по клику вне его области
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal(projectId);
      }
    });
  }
}

function closeModal(projectId) {
  const modal = document.getElementById(`modal-${projectId}`);
  if (modal) {
    modal.style.display = "none";
  }
}

// Слайдер в модальном окне
function changeSlide(projectId, direction) {
  const modal = document.getElementById(`modal-${projectId}`);
  if (!modal) return;

  const slides = modal.querySelectorAll('.slide');
  let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

  // Убираем активный класс у текущего слайда
  slides[activeIndex].classList.remove('active');

  // Вычисляем новый индекс
  activeIndex += direction;
  if (activeIndex >= slides.length) activeIndex = 0;
  if (activeIndex < 0) activeIndex = slides.length - 1;

  // Добавляем активный класс новому слайду
  slides[activeIndex].classList.add('active');
}