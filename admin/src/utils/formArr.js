export const status = [
  { value: "like", label: "Like" },
  { value: "hot", label: "Hot" },
  { value: "new", label: "New" },
];

export const langArr = [
  { value: "vi", label: "Tiếng Việt" },
  { value: "en", label: "English" },
];

export const categoryArr = [
  {
    value: "1",
    label: "Sản phẩm cho vịt ngan",
    children: [
      { value: "11", label: "Vaccine" },
      { value: "12", label: "Kháng thể" },
      { value: "13", label: "Thuốc và thức ăn bổ sung" },
    ],
  },
  {
    value: "2",
    label: "Sản phẩm cho gia cầm",
    children: [
      { value: "21", label: "Vaccine" },
      { value: "22", label: "Kháng thể" },
      { value: "23", label: "Thuốc và thức ăn bổ sung" },
    ],
  },
  {
    value: "3",
    label: "Sản phẩm cho lợn",
    children: [
      { value: "31", label: "Vaccine" },
      { value: "32", label: "Kháng thể" },
      { value: "33", label: "Thuốc và thức ăn bổ sung" },
    ],
  },
  {
    value: "4",
    label: "Sản phẩm cho thú nhỏ",
    children: [
      { value: "41", label: "Vaccine" },
      { value: "42", label: "Kháng thể" },
      { value: "43", label: "Thuốc và thức ăn bổ sung" },
    ],
  },
  {
    value: "5",
    label: "Sản phẩm cho đại gia súc",
    children: [
      { value: "51", label: "Vaccine" },
      { value: "52", label: "Kháng thể" },
      { value: "53", label: "Thuốc và thức ăn bổ sung" },
    ],
  },
  {
    value: "6",
    label: "Sản phẩm cho thủy sản",
    children: [
      { value: "61", label: "Vaccine" },
      { value: "62", label: "Thức ăn bổ sung" },
      { value: "63", label: "Thuốc và thức ăn bổ sung" },
    ],
  },
  {
    value: "7",
    label: "Sản phẩm nhập khẩu",
    children: [
      { value: "71", label: "Vaccine" },
      { value: "72", label: "Thức ăn bổ sung" },
      { value: "73", label: "Thuốc và thức ăn bổ sung" },
    ],
  },
  {
    value: "8",
    label: "Sản phẩm sát trùng",
    children: [],
  },
];

export const getChildCategories = (parentCategory) => {
  if (parentCategory) {
    const selectedCategory = categoryArr.find(
      (item) => item.value === parentCategory.value
    );
    return selectedCategory ? selectedCategory.children : [];
  }
  return [];
};

export function findValueByLabel(parentLabel, childLabel, categoryArr) {
  const parentCategory = categoryArr.find(
    (category) => category.label === parentLabel
  );

  if (parentCategory) {
    const childCategory = parentCategory.children.find(
      (child) => child.label === childLabel
    );
    if (childCategory) {
      return childCategory.value;
    }
  }

  return null; // Trả về null nếu không tìm thấy
}
