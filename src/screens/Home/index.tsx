import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import sendRequest from "../../services/request";
import { BookResponse, Books } from "../../types/Book";

import c from "./home.module.css";

import searchIcon from "../../assets/icons/home/search.png";
import Slider from "../../components/Slider";

const Home: React.FC<PropsWithChildren<{}>> = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [newBooks, setNewBooks] = useState<Books>();

  useEffect((): void => {
    getNewBooks();
  }, []);

  const getNewBooks = async (): Promise<void> => {
    try {
      const data: BookResponse = await sendRequest(
        process.env.REACT_APP_API_URL + "new",
        "get"
      );
      setNewBooks(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(searchInputValue);
    if (searchInputValue.length > 0) {
      inputRef.current!.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          handleSearch();
        }
      });
    }
  }, [searchInputValue]);

  const handleSearch = (): void => {
    console.log("aranacak kelime:", searchInputValue);
    setSearchInputValue("");
  };

  return (
    <div className={c.container}>
      <Header />

      {newBooks && <Slider data={newBooks} />}

      <div className={c.searchField}>
        <input
          className={c.searchInput}
          placeholder="Book Name or Author.."
          onChange={(e) => setSearchInputValue(e.target.value)}
          ref={inputRef}
        />
        <div className={c.searchButton}>
          <img src={searchIcon} alt="search" className={c.searchIcon} />
          Search
        </div>
      </div>
    </div>
  );
};

export default Home;
