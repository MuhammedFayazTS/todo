export function validateCreateTodo(data) {
  const { title, description } = data;
  if (!title || !description) {
    return {
      isValid: false,
      message: "Title and description are required",
    };
  }
  return { isValid: true, data };
}
