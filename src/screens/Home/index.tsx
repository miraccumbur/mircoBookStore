import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import sendRequest from "../../services/request";
import { Book, BookResponse, Books } from "../../types/Book";
import { AppDispatch } from "../../redux/store";
import { useAppDispatch } from "../../hooks/redux";
import { setLoading } from "../../redux/loadingReducer";

import Header from "../../components/Header";
import BookCard from "../../components/BookCard";
import Footer from "../../components/Footer";

import c from "./home.module.css";

import searchIcon from "../../assets/icons/home/search.png";
import Slider from "../../components/Slider";

const Home: React.FC<PropsWithChildren<{}>> = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [newBooks, setNewBooks] = useState<Books>();
  const [searchedValue, setSearchedValue] = useState<Books>();
  const [inputLongWarningStatus, setInputLongWarningStatus] =
    useState<boolean>(false);

  useEffect((): void => {
    getNewBooks();
  }, []);

  const getNewBooks = async (): Promise<void> => {
    try {
      dispatch(setLoading(true));
      const data: BookResponse = await sendRequest(
        process.env.REACT_APP_API_URL + "new",
        "get"
      );
      console.log("data", data);
      setNewBooks(data.data);
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
    }
  };

  const handleSearch = async (): Promise<void> => {
    try {
      dispatch(setLoading(true));
      if (searchInputValue.length > 1) {
        const data: BookResponse = await sendRequest(
          process.env.REACT_APP_API_URL + "search/" + searchInputValue,
          "get"
        );
        setSearchedValue(data.data);
        setInputLongWarningStatus(false);
      } else {
        setInputLongWarningStatus(true);
      }

      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className={c.container}>
      <Header />

      {newBooks && <Slider data={newBooks} />}

      <div className={c.searchField}>
        <input
          className={c.searchInput}
          placeholder="Book Name or Author.."
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
          ref={inputRef}
        />
        {searchedValue && (
          <div
            className={c.searchClearButton}
            onClick={() => {
              setInputLongWarningStatus(false);
              setSearchedValue(undefined);
              setSearchInputValue("");
            }}
          >
            X
          </div>
        )}

        <div className={c.searchButton} onClick={handleSearch}>
          <img src={searchIcon} alt="search" className={c.searchIcon} />
          Search
        </div>
      </div>

      {inputLongWarningStatus && (
        <div className={c.inputLongWarning}>
          The word you enter must be longer than 2 letters.
        </div>
      )}

      <div className={c.bookCardField}>
        {searchedValue &&
          searchedValue.books.map((data: Book) => {
            return <BookCard key={data.isbn13} data={data} />;
          })}
        {newBooks &&
          !searchedValue &&
          newBooks.books.map((data: Book) => {
            return <BookCard key={data.isbn13} data={data} />;
          })}
      </div>
      <Footer className={c.footer}/>
    </div>
  );
};

export default Home;
