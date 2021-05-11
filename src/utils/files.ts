import fs from 'fs';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const deleteFile = async (fileName: string) => {
  try {
    await fs.promises.stat(fileName);
  } catch (error) {
    return;
  }

  await fs.promises.unlink(fileName);
};
