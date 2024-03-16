import {useState} from "react"
import SearchBar from "../components/SearchBar"
import SearchResult from "../components/SearchResult"
import  { ProductProvider } from "../ProductContext"

export default function Home() {

  return (
    <div>
        <ProductProvider>
        <SearchBar />
        <SearchResult />
        </ProductProvider>
    </div>
  )
}
