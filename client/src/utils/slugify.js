export const slugify = (str) => {
  str = str.replace(/^\s+|\s+$/g, ""); // Xóa khoảng trắng ở đầu và cuối chuỗi
  //   str = str.toLowerCase();

  // Loại bỏ dấu
  str = str.replace(/\s+/g, "-"); // Thay thế dấu cách bằng dấu gạch ngang
  // .replace(/-+/g, "-"); // Nếu có nhiều hơn 1 dấu gạch ngang liên tiếp, thay thế chúng bằng 1 dấu gạch ngang duy nhất

  return str;
};
