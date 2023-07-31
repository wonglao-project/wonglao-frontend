import { FormEvent, useState } from "react";
import { storage } from "../service/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function ImageUpload() {
  const [files, setFiles] = useState<FileList | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleSubmitImage = async (e: FormEvent) => {
    e.preventDefault();

    if (!files) {
      return;
    }

    const arrayOfFiles = [...files];
    const urlImages: string[] = [];
    console.log(arrayOfFiles);

    for (let i = 0; i < arrayOfFiles.length; i++) {
      const v4uuid = v4();
      const imageRef = ref(storage, `images/${arrayOfFiles[i].name}${v4uuid}`);

      await uploadBytes(imageRef, arrayOfFiles[i]);
      const url = await getDownloadURL(imageRef);
      urlImages.push(url);
      console.log(url);
    }
    console.log(`upload success!`);
    console.log(urlImages);
  };

  return (
    <div>
      <form onSubmit={handleSubmitImage}>
        <label>IMAGES</label>
        <input
          onChange={handleFileChange}
          type="file"
          accept="image/*"
          multiple={true}
          required
        />
        {files &&
          [...files].map((file, index) => (
            <section key={file.name}>
              File number {index + 1} details:
              <ul>
                <li>Name: {file.name}</li>
                <li>Type: {file.type}</li>
                <li>Size: {file.size}</li>
              </ul>
            </section>
          ))}
        {files && <button type="submit">Submit</button>}
      </form>
    </div>
  );
}

export default ImageUpload;
