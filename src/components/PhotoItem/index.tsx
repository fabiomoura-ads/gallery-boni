import * as C from './styles';
import { Photo } from '../../types/Photo';

export const PhotoItem = ({ url, name }: Photo) => {
    return (
        <C.Container>
            <img src={url} alt={name} />
            <div>{name}</div>
        </C.Container>
    )
}