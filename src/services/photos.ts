import { getDownloadURL, listAll, ref } from "@firebase/storage";
import { storage } from "../libs/firebase";
import { Photo } from "../types/Photo"

export const getAll = async () => {
    const list: Photo[] = [];

    const imageFolderRef = ref(storage, "images");

    const listPhotos = await listAll(imageFolderRef);

    for( let i in listPhotos.items ) {

        let photoUrl = await getDownloadURL(listPhotos.items[i]);

        list.push({
            name: listPhotos.items[i].name,
            url: photoUrl
        })
    }

    return list;
}
