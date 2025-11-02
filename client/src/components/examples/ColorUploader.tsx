import { ColorUploader } from '../ColorUploader';

export default function ColorUploaderExample() {
  return <ColorUploader onImageUpload={(file) => console.log('File uploaded:', file.name)} />;
}
