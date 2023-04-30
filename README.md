# REACT STARSHİP LİST APP

## Özet

- React.js, Context ve https://swapi.dev/api/ kullanılarak yazılmıştır. Yıldız gemilerinin listelendiği ve ayrıca yıldız gemilerini arayıp bulabileceğiniz bir listeleme uygulaması.

### Kullanılan Teknolojiler

- React.Js
- TailwindCss
- React-router-dom
- React-icons
- Hero-icons
- headlessui

## Proje

React.Js de ilk önce projemizi oluşturuyoruz

> npx create-react-app starship

Daha sonrasında proje klasörümüzü açıyoruz

> cd starship

Artık projemizi çalıştırabiliriz.

> npm start

Ben projeme başlamadan önce gerekli olacak olan paketlerimiz yükledim

> npm i axios

> npm i react-router-dom

Css için ben TailwindCss tercih ettim

> npm install -D tailwindcss

> npx tailwindcss init

İcon için

> npm install react-icons --save

ekstra olarak tailwindui'dan örnek bir component tasarımı aldım.

> npm install @headlessui/react @heroicons/react

Paketlerimi kurduktan sonra tasarım yapmaya başladım.

### Anasayfa

![image](https://user-images.githubusercontent.com/79282877/235317001-c173002b-fe79-4f09-a334-0525715f3de9.png)

### StarshipList

![image](https://user-images.githubusercontent.com/79282877/235317157-f185a06b-e2ab-4aed-ae76-26a0ad408e89.png)

### StarshipList modal

![image](https://user-images.githubusercontent.com/79282877/235317192-fe5dd112-ab7f-4c5e-b063-bed2649c6ecd.png)

### Aşağıdaki resimde olduğu gibi yıldız gemisi arayabilirsiniz.

![Adsız](https://user-images.githubusercontent.com/79282877/235317306-7a678e95-de28-4640-8b30-bc0a77d82bd9.png)

### Arama yaptıktan sonra detay sayfasına yönlendiriliyorsunuz.

![image](https://user-images.githubusercontent.com/79282877/235317362-8565ef6d-c343-4a4c-a50d-12060dd13cb7.png)

## Tasarım bittikten sonra apiden verileri alma işlemlerini yaptım.

```
function CardList() {
  const [starshipsList, setStarshipsList] = useState([]);
  const [starshipsData, setStarshipsData] = useState({});
  const [page, setPage] = useState(1);

  const newItemsRef = useRef(null);

  useEffect(() => {
    if (newItemsRef.current) {
      newItemsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [starshipsList]);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/?page=${page}`)
      .then((res) => {
        setStarshipsData(res.data);
        if (page === 1) {

          setStarshipsList(res.data.results);
        } else {

          setStarshipsList([...starshipsList, ...res.data.results]);
        }
      })
      .catch((err) => console.log(err));
  }, [page]);
```

- Yukarıdaki kodda apiden ilk önce gelen verileri aldım. Daha sonrasında "Daha fazla göster" özelliği için iki tane state tanımladım. Apiden 10'ar tane veri geliyordu. Yıldız gemilerinin hepsini gösterebilmek için için apiye istek atarken "page" özelliğinide ekledim. Gelen ilk verileri state kaydettikten sonra "Load more" butonuna basınca sayfa sayısı artıyor bu sayede diğer sayfanın verileri geliyor. Gelen verileride "if" koşulu kullanarak diğer verilerin üstüne yazdırdım. Bu sayede ilk verilerde kaybolmamış oldu ve yıldız gemilerinin hepsini gösterme fırsatım oldu.

* "Load more" butonuna bastığımızda gelen verilere focuslanmak içinde 2. bir useEffect ve useRef kullandım. BU sayede kullanıcı butona bastığında gelen verilere daha çabuk görme imkanı sundu.

## Search

Search işlemi yaparken inputa değer girip entera bastıktan sonra gelmesi için form üzerinde submit olayı gerçekleştirdim. useNavigate ile de başka bir componente yönlendirip orda görüntülenmesi yaptım.

```
function Search() {

  const { setSearch, setStarships, search } = useStarship();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .get(`https://swapi.dev/api/starships/?search=${search}`)
      .then((res) => setStarships(res.data.results))
      .catch((err) => console.log(err));
    setSearch("");
    navigate("/searchList");
  };

```

- Burada verileri başka componentlerde kullanacağımdan dolayı context yapısını kullandım.

```

import { createContext, useState, useContext } from "react";

const StarshipsContext = createContext();

export const StarshipsContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [starships, setStarships] = useState([]);

  const values = {
    setSearch,
    setStarships,
    search,
    starships,
  };
  return (
    <StarshipsContext.Provider value={values}>
      {children}
    </StarshipsContext.Provider>
  );
};
export const useStarship = () => {
  const context = useContext(StarshipsContext);

  if (context === undefined) {
    throw new Error("useStarship must be used withing a StarshipProvider");
  }
  return context;
};


```

[Uygulama Linki](https://ml-final-case.netlify.app)

# Hazırlayan

- Muhammet LEVENT
