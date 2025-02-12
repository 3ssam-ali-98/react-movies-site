const INITIAL_VALUE_from_storage= () => {
    const savedFavorites = localStorage.getItem('favorites');
    const savedCount = localStorage.getItem('count');

        if(savedFavorites && savedCount) 
        {
            return {
                favorites: JSON.parse(savedFavorites),  
                count: parseInt(savedCount)
            };
        }
        else
        {
            return{
                favorites: [],
                count: 0,
            }
        }
  };

const INITIAL_VALUE = INITIAL_VALUE_from_storage()



    export function faviourteReducer (state=INITIAL_VALUE, action){
        switch(action.type){
            case "add_to_fav":
                const newfavorites = [...state.favorites, action.payload]
                localStorage.setItem('favorites', JSON.stringify(newfavorites));
                localStorage.setItem('count', newfavorites.length.toString());

                return{
                    ...state,
                    favorites: newfavorites,
                    count: state.count + 1

                }


            case "remove_to_fav":  
            const lessfavorites = state.favorites.filter(item => item !== action.payload)
            localStorage.setItem('favorites', JSON.stringify(lessfavorites));
            localStorage.setItem('count', lessfavorites.length.toString());

            return{
                ...state,
                favorites: lessfavorites,
                count: state.count - 1
            }
            default: 
                return state;
        }
    }