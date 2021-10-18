import { useEffect, useState } from 'react';
import * as C from './App.styles';
import { Photo } from './types/Photo';
import * as Photos from './services/photos';
import { PhotoItem } from './components/PhotoItem';

const App = () => {

  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {

    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    }

    getPhotos();
  }, [])

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

      <C.UploadForm>
        <input type="file" />
        <input type="submit" value="Enviar" />
      </C.UploadForm>

        {loading &&
          <C.ScreenWarning>
            <div className="emoji">✋</div>
            <div>Carregando...</div>
          </C.ScreenWarning>
        }

        {!loading && photos.length > 0 &&
          <C.PhotoList>
            {photos.map((item, index) => (
              <PhotoItem key={index} url={item.url} name={item.name} />
            ))}
          </C.PhotoList>
        }

        {!loading && photos.length === 0 &&
          <C.ScreenWarning>
            <div className="emoji">😞</div>
            <div>Não há nada para exibir...</div>
          </C.ScreenWarning>
        }

      </C.Area>
    </C.Container>
  )
}

export default App;