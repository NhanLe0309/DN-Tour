function showSection(sectionId) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
  //trỏ tới phần có class là detail
  const sections = document.querySelectorAll('.detail');
  //nếu nó đang có class active thì sẽ xóa đi để ẩn xuống
  sections.forEach(section => {
      section.classList.remove('active');
  });
  //chọn id bằng section đã chọn để thêm vào nó css active để hiện lên
  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add('active');
}