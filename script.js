// Hàm được gọi khi di chuột lên ảnh hoặc khi ảnh được focus bằng bàn phím.
function upDate(previewPic) {
  // Bước 1: Kiểm tra sự kiện và thông tin của ảnh bằng Console.
  console.log("Sự kiện upDate đã kích hoạt!");
  console.log("alt:", previewPic.alt);
  console.log("src:", previewPic.src);

  // Bước 2: Lấy phần tử có id="image".
  const display = document.getElementById("image");

  // Bước 3: Thay đổi văn bản thành mô tả alt của ảnh.
  display.textContent = previewPic.alt;

  // Bước 4: Thay đổi hình nền thành ảnh mà người dùng đang chọn.
  display.style.backgroundImage = "url('" + previewPic.src + "')";
}

// Hàm được gọi khi chuột rời ảnh hoặc ảnh mất focus.
function unDo() {
  const display = document.getElementById("image");

  // Đưa hình nền về giá trị ban đầu.
  display.style.backgroundImage = "url('')";

  // Đưa văn bản về câu hướng dẫn ban đầu của đề bài.
  display.textContent = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}

// Bổ sung: Cho phép tương tác bằng phím Tab (onload + tabindex).
function initializeGallery() {
  const images = document.querySelectorAll(".preview");
  images.forEach(function (img, index) {
    img.setAttribute("tabindex", "0");
    console.log("Đã thêm tabindex cho ảnh", index + 1);
  });
}
