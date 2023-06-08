export function generateFilePath(file) {
  const [name, ext] = file.name.split(".");
  const fileName = name + "_" + crypto.randomUUID() + "." + ext;
  return fileName;
}
