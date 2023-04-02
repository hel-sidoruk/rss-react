import { render } from '@testing-library/react';
import { FileInput } from './FileInput';

test('File input has a button for upload file', () => {
  const { getByText } = render(
    <FileInput
      image=""
      changeImage={(s: string | ArrayBuffer) => {
        s;
      }}
    />
  );
  const button = getByText(/Upload file/);
  expect(button).toBeInTheDocument();
});
