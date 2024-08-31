document
  .getElementById("email-form")
  .addEventListener("submit", function (event) {
    // Ngăn không cho form tự động submit
    event.preventDefault();

    // Lấy giá trị email mỗi khi form được submit
    const personInfo = document.querySelector("#personal-detail");
    const emailContainer = document.getElementById("submit-email");
    const errorMessage = document.getElementById("error-message");
    const message = document.getElementById("message");
    const emailInput = document.getElementById("email-input").value;

    // Kiểm tra xem email có hợp lệ không
    if (validateEmail(emailInput)) {
      errorMessage.classList.add("hide");
      emailContainer.classList.add("hide");
      personInfo.classList.remove("hide");
    } else {
      errorMessage.classList.remove("hide");
      message.classList.add("hide");
      console.log(Boolean(emailInput)); // Kiểm tra xem emailInput có giá trị hay không
    }
  });

// Hàm kiểm tra email có hợp lệ không
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

//Chức năng ẩn thông tin nghề nghiệp

// const buttonView = document.querySelector(".toggle-btn");

// document.querySelector(".toggle-btn").addEventListener("click", function () {
//   const detailContainer = this.previousElementSibling; // Phần tử chứa thông tin kỹ năng
//   if (detailContainer.style.display === "none") {
//     detailContainer.style.display = "block";
//     buttonView.textContent = "View Less";
//   } else {
//     detailContainer.style.display = "none";
//     buttonView.textContent = "View More";
//   }
// });

document.querySelectorAll(".toggle-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const detailContainer = this.previousElementSibling; // Phần tử chứa thông tin

    if (detailContainer.style.display === "none") {
      // Nếu phần tử là #favourite-detail, đặt display là grid, nếu không thì block
      if (detailContainer.id === "favourite-detail") {
        detailContainer.style.display = "grid";
      } else {
        detailContainer.style.display = "block";
      }
      this.textContent = "View Less"; // Đổi nút thành "View Less"
    } else {
      detailContainer.style.display = "none"; // Ẩn nội dung
      this.textContent = "View More"; // Đổi nút lại thành "View More"
    }
  });
});
