type HandlePhotoChange = (
  fileInput: HTMLInputElement | null,
  setFieldValue: (field: string, value: string) => void
) => void;

export const handlePhotoChange: HandlePhotoChange = (fileInput, setFieldValue) => {
  if (fileInput && fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = (event.target as FileReader)?.result as string;
      setFieldValue('profilePhoto', result);
    };
    reader.readAsDataURL(fileInput.files[0]);
  }
};