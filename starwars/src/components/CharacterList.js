import React, {useState, useEffect} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"
import { Container } from "reactstrap";

export default function CharacterList() {
    const [cha, setChar] = useState([]);
    useEffect (() =>{
        axios.get("https://swapi.co/api/people/")
        .then(res =>{
            console.log(res.data.results);
            setChar(res.data.results)
        })
        .catch(error => {
            console.log("Data Not Returned", error)
        })
    }, []);
    return (
        <Container>
           {cha.map(info => {
                return (
                    <CharacterCard
                    key={info.url}
                    name={info.name}
                    gender={info.gender}
                    height={info.height}
                    />
                );
            })}
         </Container>
    )
}