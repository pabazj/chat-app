import { useState, useEffect } from "react";
import { useStorage } from 'reactfire';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const useFileUpload = (file) => {

    const [uplodingProgress, setUplodingProgress] = useState(0)
    const [error, setError] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)

    const storage = useStorage();

    useEffect(() => {
    
        if (file) {
            const storageRef = ref(storage, `media/${file.name}`)
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on("state_changed",
                (snapshot) => {
                    const progress =
                        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setUplodingProgress(progress);
                },
                (error) => {
                    setError(error);
                },
                () => {

                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setImageUrl(downloadURL)
                    });
                }
            );
        }

    }, [file, storage])

    return { uplodingProgress, error, imageUrl , setImageUrl}
}

export default useFileUpload;