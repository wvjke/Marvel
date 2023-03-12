import {useState, useEffect} from 'react';
import Spinner from '../spinner/Spinner';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';
import './charList.scss';
import PropTypes from 'prop-types';

const CharList = (props) => {

    const [charList, setCharlist] = useState([]),
          [newItemLoading, setNewItemLoading] = useState(false),
          [offset, setOffset] = useState(210),
          [charEnded, setCharEnded] = useState(false),
          [activeChar, setActiveChar] = useState(sessionStorage.getItem('activeItem'));
    
    const {loading, error, getAllCharacters} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded)
    }

    const onCharListLoaded =  (newCharList) => {

        let ended = false;
        if(newCharList.length < 9) {
            ended = true;
        }
        setCharlist(charList => [...charList, ...newCharList]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);

    }

    const setActiveItemSessionStorage = (id) => {
        const activeItem = charList.filter(item => item.id == id)
        sessionStorage.setItem('activeItem', activeItem[0].id);
    }


    function renderItems (arr)  {
        
        const items =  arr.map((item) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
            return (
                <CSSTransition key={item.id} timeout={500} classNames="char__item">
                    <li 
                        onFocus={() => {
                            setActiveItemSessionStorage(item.id);
                            setActiveChar(item.id);
                            props.onCharSelected(item.id);
                        }}
                        className={activeChar == item.id ? 'char__item char__item_selected' : 'char__item' }
                        key={item.id}
                        tabIndex={0}        >
                            <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                            <div className="char__name">{item.name}</div>
                    </li>
                </CSSTransition>
            )
        });

        return (
            <ul className="char__grid">
                <TransitionGroup component={null}>
                {items}
                </TransitionGroup>
            </ul>
        )
    }

               
        const items = renderItems(charList);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading && !newItemLoading ? <Spinner/> : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {items}
                <button className="button button__main button__long"
                        disabled={newItemLoading}
                        style={{'display': charEnded ? 'none' : 'block'}}
                        onClick={() => onRequest(offset)}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;